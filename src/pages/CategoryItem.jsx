import React, { useEffect, useState } from 'react'
import { listCategoryItem } from '../utils/requests'
import Loading from '../components/Loading'
import ItemCard from '../components/ItemCard'
import NotFound from '../components/NotFound'
import { useParams } from 'react-router-dom'

const CategoryItem = () => {

  const {id} = useParams()

  const [products, setProducts] = useState([]) 
  const [loading, setLoading] = useState(true) 
  const [error, setError] = useState() 

  const getData = async () =>{
    try{
      const result = await listCategoryItem(id)
      setProducts(result)
    }catch(error){
      setError("There was an error")
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() =>  {setData()},[])
  console.log(products)
  return (


    <div className=' pt-[7em]'>
      {loading?<Loading/>:
      error? <NotFound/>:
      products.length == 0? <NotFound/>:
      <div className='min-h-screen flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-5'>
          {
            products.map((product)=> <ItemCard key = {product.id} product = {{"img":product.product_images[1],"name":product.name,"price":product.price}}/>)
          }
      </div>
      }

    </div>
  )
}

export default CategoryItem
