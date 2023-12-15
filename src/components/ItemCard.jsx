import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({product}) => {

    const {img, name, price} = product
    console.log(img)
  return (
    <Link to={`/store/${img.product}`} className='py-5 px-3 gap-2 h-[300px] hover:scale-105 transition-transform cursor-pointer flex flex-col items-center justify-start bg-hero-blue shadow-tight-pink rounded-3xl '>
        <span className=''>
        <img
            className="max-w-[200px] max-h-[250px] item shadow-lg rounded-lg"
            src={`http://localhost:8000${img.image}`} 
            alt=""
          />
        </span>

        <span>
            <h1 className='font-bold text-sm text-gray-600 uppercase tracking-widest '>{name}</h1>
        </span>
        
        <span>
            <p className=' font-bold text-sn text-gray-600 tracking-widest  justify-self-start'>Price: ₹{product.price}</p>
        </span>

    </Link>
  )
}

export default ItemCard
