import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import { listItems } from '../utils/requests'


const Axios = () => {
    
    const [items, setItems] = useState()

    const listItems = async () => {
        const result = await axios.get("http://127.0.0.1:8000/inventory/")
        setItems(result.data)
    }

     useEffect(()=> listItems,[])
     console.log(items)

    return (
        <div>
            ji
            {

                items.map((item)=>{
                    const { id, description, product_images, name, price } = item
                    return (
                        <div key={id} className='mb-10 bg-button text-black w-[30%] m-auto flex flex-col justify-center items-center rounded-xl shadow-lg'>
                            <span>
                                <h1 className=' text-5xl font-bold'>{name}</h1>
                            </span>
                            <span>
                                <h1 className=' text-2xl font-bold'>{description.about}</h1>
                            </span>
                            <span>
                                <h1 className=' text-2xl font-bold'>{product_images[0].image}</h1>
                            </span>
                            <span>
                                <h1 className=' text-2xl font-bold'>{price}</h1>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Axios


