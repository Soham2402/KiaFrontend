import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ product }) => {
  const { img, name, price } = product;
  const prodLink = "https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80"

  return (



    <Link
      to={img?`/store/${img.product}`:'/store/'} // Update this line to use img directly
      className='py-5 px-3 gap-2 h-[350px] w-[250px] hover:scale-105 transition-transform cursor-pointer flex flex-col items-center justify-start bg-hero-blue shadow-tight-pink rounded-3xl'
    >
      <span>
        <img
          className="max-w-[200px] max-h-[250px] item shadow-lg rounded-lg"
          src={img ? `https://api.kiaartworks.in${img.image}`: prodLink}
          alt=""
        />
      </span>

      <span>
        <h1 className='font-bold text-sm text-center text-gray-600 uppercase tracking-widest max-w-[100%]'>{name}</h1>
      </span>

      <span>
        <p className='font-bold text-sn text-gray-600 tracking-widest justify-self-center'>Price: ₹{price}</p>
      </span>
    </Link>
  );
};

export default ItemCard;
