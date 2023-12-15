import React, { useState } from 'react';

const Carousal = ({ images }) => {
  const [index, setIndex] = useState(0);

  const changeIndex = (key) => {
    setIndex(key);
  };



  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-8">
        <span className="">
          <img
            className="md:max-w-xl max-h-[25em] md:max-h-[33em] item shadow-lg rounded-lg"
            src={`http://localhost:8000${images[index].image}`}  // Use the image URL from the API response
            alt=""
          />
        </span>
        <span className="flex md:justify-start justify-center gap-4 flex-wrap">
          {images.map((image, key) => {
            if (key === 4) {
              return null;
            } else {
              return (
                <img
                  key={key}
                  className="md:max-w-[5em] max-h-[5em] rounded-lg cursor-pointer"
                  onClick={() => changeIndex(key)}
                  src={`http://localhost:8000${image.image}`}  // Use the image URL from the API response
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
