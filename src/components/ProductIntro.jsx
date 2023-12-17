import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getItem } from '../utils/requests'
import Loading from './Loading'

const ProductIntro = () => {

   const imgLink = 'https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80'

    const [products, setProducts] = useState([]) 
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState() 
  
    const getData = async () =>{
      try{
        const result = await getItem()
        setProducts(result)
      }catch(error){
        setError("There was an error")
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    useEffect(() =>  {getData()},[])

  return (

    <div className='m-auto'>
        <div className='my-[10em] text-center'>
            <h1 className=' font-bold text-2xl lg:text-3xl font-nica pb-2'>Products</h1>
            <p className=' font-thin'>Find what you are looking for</p>
        </div>

        <div className=' bg-hero-blue  w-full flex flex-col items-center'>

            
            {
                loading? <Loading/>:
                error? <p>Sorry there was an error</p>:
                <div className='mt-[1em] md:mt-auto flex flex-col items-center gap-10 py-5 md:flex-row  md:py-[5em] md:justify-evenly'>
   
                <Link to={products[0]?`/store/${products[0].id}`:'/store/'} className='max-w-[40vh] md:max-w-[45vh] md:mr-11 flex flex-col gap-3 z-[999]'>
                    <img className='hover:scale-110 transition-transform rounded-2xl shadow-ulg' src={products[0]? `https://api.kiaartworks.in${products[0].product_images[0].image}` :imgLink} alt="" />
                    <section className='text-center pb-5 pt-2'>
                        <h2 className=' text-3xl font-bold '>{products[0]? products[0].name:'More to come'}</h2>
                    </section>
                </Link>
                <Link to={products[8]?`/store/${products[8].id}`:'/store/'} className='max-w-[40vh] md:max-w-[45vh] md:mr-11  flex gap-3 flex-col'>
                    <img className='hover:scale-110 transition-transform  rounded-2xl  shadow-uxl' src={products[8]? `https://api.kiaartworks.in${products[8].product_images[0].image}` :imgLink} alt="" />
                    <section className='text-center pb-5 pt-2'>
                        <h2 className=' text-3xl font-bold '>{products[8]? products[8].name:'More to come'}</h2>
                    </section>
                </Link>
                <Link to={products[5]?`/store/${products[5].id}`:'/store/'} className='max-w-[40vh] md:max-w-[45vh] md:mr-11  flex gap-3 flex-col'>
                    <img className='hover:scale-110 transition-transform  rounded-2xl  shadow-uxl' src={products[5]? `https://api.kiaartworks.in${products[5].product_images[0].image}` :imgLink} alt="" />
                    <section className='text-center pb-5 pt-2'>
                        <h2 className=' text-3xl font-bold '>{products[5]? products[5].name:'More to come'}</h2>
                    </section>
                </Link>
                </div>
            } 
            
            <Link to='/store/' className= 'hover:scale-110 transition-transform mb-[2em] md:text-[1.5em] bg-white font-serif text-black text-[1em] self-center px-[4em] py-[1em] rounded-[5em] shadow-tight' href="">Shop Now</Link>

        </div>
    </div>
  )
}

export default ProductIntro
