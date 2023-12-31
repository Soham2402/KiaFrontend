import React, { useState } from 'react';

const Carousal = ({ images }) => {
  const [index, setIndex] = useState(0);

  const changeIndex = (key) => {
    setIndex(key);
  };

  const defaultImg = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-8">
        <span className="">
          <img
            className="md:max-w-xl max-h-[25em] md:max-h-[33em] item shadow-lg rounded-lg"
            src={images[0]? `https://api.kiaartworks.in${images[index].image}`:defaultImg }  // Use the image URL from the API response
            alt=""
          />
        </span>
        <span className="flex md:justify-start justify-center gap-4 flex-wrap">
          {images.map((image, key) => { {
              return (
                <img
                  key={key}
                  className="md:max-w-[5em] max-h-[5em] rounded-lg cursor-pointer"
                  onClick={() => changeIndex(key)}
                  src={`https://api.kiaartworks.in${image.image}`}  // Use the image URL from the API response
                  alt=""
                />
              );
            }
          })}
        </span>
      </section>
    </div>
  );
};

export default Carousal;
