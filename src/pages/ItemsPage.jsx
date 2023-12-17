import React, { useEffect, useState } from 'react';
import { getItem } from '../utils/requests';
import Loading from '../components/Loading';
import ItemCard from '../components/ItemCard';
import NotFound from '../components/NotFound';

const ItemsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const result = await getItem();
      setProducts(result);
    } catch (error) {
      setError("There was an error");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Use useEffect to log the updated state
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className='py-[7em] md:max-w-[80%] m-auto'>
      {loading ? (
        <Loading />
      ) : error ? (
        <NotFound />
      ) : products.length === 0 ? (
        <NotFound />
      ) : (
        <div className='min-h-screen  flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center  flex-wrap gap-5'>
          {products.map((product) => (
            <ItemCard
              key={product.id}
              product={{
                img: product.product_images[0],
                name: product.name,
                price: product.price,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemsPage;
