import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../utils/requests';
import Carousal from '../components/Carousal';
import Loading from '../components/Loading';
import NotFound from '../components/NotFound';

const SingleItem = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const getItem = async () => {
    try {
      let data = await getSingleItem(id);
      setItem(data);
    } catch (error) {
      console.log("Error");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const HandleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const generateWhatsAppLink = () => {
    const productName = item.name;
    const productLink = window.location.href;
    const encodedMessage = encodeURIComponent(`I am interested in this product: ${productName}\n${productLink}`);
    return `https://wa.me/9820024015?text=${encodedMessage}`;
  };


  useEffect(() => { 
    getItem();
  }, []);

  return (
    <div className="pt-[7em] bg-hero-blue flex min-h-screen items-start md:items-center justify-center md:justify-center relative">

      {loading ? <Loading /> :
        error ? <p>There was an error try later</p> :
          item.length === 0 ? <NotFound /> :
            <div className="flex md:gap-[10em] gap-[2em] items-center justify-center flex-col md:flex-row mx-4 my-10">
              {item && item.product_images && <Carousal images={item.product_images} />}

              <section className="flex flex-col items-center justify-evenly md:max-w-[30vw] gap-[2em]">
                <span className=" flex flex-col md:gap-8 gap-4">
                  <h1 className="font-bold text-3xl text-center">{item.name}</h1>
                  <p className="font-cardo md:text-lg text-sm">{item.description.about}</p>
                </span>

                <span className="flex items-center justify-between gap-3 md:gap-10 flex-col md:flex-row">
                  <h1 className="font-bold text-2xl">Price: ₹ {item.price}</h1>
                  <a href={generateWhatsAppLink()}  target="_blank" rel="noopener noreferrer"
                    onClick={HandleClick}
                    className="bg-white mt-5 md:mt-0 font-serif text-black text-2xl self-center px-[1em] py-[0.5em] rounded-[5em] shadow-tight hover:scale-110 transition-transform"
                  >
                    Contact me
                  </a>
                </span>
              </section>
            </div>
      }

      {isCopied && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-primary-bg p-8 rounded shadow-lg">
            <p className="text-black">URL Copied!</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default SingleItem;
