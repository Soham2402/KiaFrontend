import React, { useEffect, useState } from 'react'
import { listCategories } from '../utils/requests'
import  NotFound  from './NotFound'
import Loading from './Loading'
import { Link } from 'react-router-dom'



const Categories = () => {


    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const setData = async ()=>{
        try{
            const data = await listCategories()
            setItems(data)
            console.log(data)
            alert(data)
        }catch(error){
            setError(error.message)
            console.log("Error while setting data", error)
        }finally{
            setLoading(false)
        }
    }

    function hasWhiteSpace(s) {
        let output = s[0]
        if (s.indexOf(' ') >= 0){
            return output+s[s.indexOf(' ')+1]
        }else{
            return output+s[1]
        }
      }


    useEffect(()=> setData,[])


  return (


    <div className='m-auto mb-[-5em]'>
        <div className='my-[10em] text-center'>
            <h1 className=' font-bold text-2xl lg:text-3xl font-nica pb-2'>Categories</h1>
            <p className=' font-thin'>Find what you are looking for</p>
        </div>

    <div className='flex flex-col items-center justify-around '>
    {
        loading? <Loading/>
        : error ? <p className=' w-screen text-lg font-bold text-center justify-self-center'>There was an error, please try later</p>
        : items.length < 3 ? <NotFound/>:
        (<>
            <div className='mt-[5em] md:mt-auto flex flex-col items-center gap-10 py-[3em] md:flex-row  md:py-[5em] md:justify-evenly  bg-hero-blue w-full'>
                
        <Link to={`/categories/store/${items[0].id}`} className='relative bottom-32 hover:border-pink-500 border-button rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 m-auto bg-button p-2 w-[60vw] h-[60vw] text-center md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] shadow-tight '> 
          <div className=' flex flex-col items-center justify-center h-[100%]'>
            <div className=' text-7xl font-bold uppercase text-pink-500'>{hasWhiteSpace(items[0].name)}</div>
            <div className=' text-md shadow-ti uppercase text-pink-500 font-nica font-bold'>{items[0].name}</div>
          </div>
        </Link>

        <Link to={`/categories/store/${items[1].id}`} className='relative bottom-32 md:top-12 hover:border-pink-500 border-button rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 m-auto bg-button p-2 w-[60vw] h-[60vw] text-center md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] shadow-tight '> 
          <div className=' flex flex-col items-center justify-center h-[100%]'>
          <div className=' text-7xl font-bold uppercase text-pink-500'>{hasWhiteSpace(items[1].name)}</div>
            <div className=' text-md shadow-ti uppercase text-pink-500 font-nica font-bold'>{items[1].name}</div>
          </div>
        </Link>
    
        <Link to={`/categories/store/${items[2].id}`} className='relative bottom-32 hover:border-pink-500 border-button rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 m-auto bg-button p-2 w-[60vw] h-[60vw] text-center md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] shadow-tight '> 
          <div className=' flex flex-col items-center justify-center h-[100%]'>
          <div className=' text-7xl font-bold uppercase text-pink-500'>{hasWhiteSpace(items[2].name)}</div>
            <div className=' text-md shadow-ti uppercase text-pink-500 font-nica font-bold'>{items[].name}</div>
          </div>
        </Link>
            </div>
        <Link to='/categories/' className='hover:scale-105 transition-transform relative bottom-32 md:bottom-[19em]  md:text-[1.5em] bg-white font-serif text-black text-[1em] self-center px-[4em] py-[1em] rounded-[5em] shadow-tight'>Shop Now</Link>
        </>
        )
        
    }


    </div>
        

    

      
    </div>
  )
}

export default Categories
