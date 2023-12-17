import React, { useState,useEffect } from 'react'
import CategoryCard from '../components/CategoryCard'
import { listCategories } from '../utils/requests'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

const CategoryPage = () => {

  
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const setData = async ()=>{
      try{
          const data = await listCategories()
          console.log(data)
          setItems(data)
          setLoading(false)
      }catch(error){
          setError(error.message)
          console.log("Error while setting data", error)
          setLoading(false)

      }finally{
          setLoading(false)
      }
  }

  useEffect(()=> {setData()},[])




  return (

    
    <div className=' pt-[7em] max-w-screen min-h-screen'>
      {loading? <Loading/>:
      error? <NotFound/>:
      items.length === 0 ? <NotFound/>:
      <section className='grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-3 md:w-[90%] lg:w-[65%] overflow-hidden m-auto p-3'> 
      {
        items.map((item)=> <CategoryCard key={item.id} item = {item}/>)
      }
          
      </section> 
      }

    </div>
  )
}

export default CategoryPage
