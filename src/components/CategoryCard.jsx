import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({item}) => {


    function hasWhiteSpace(s) {
        let output = s[0]
        if (s.indexOf(' ') >= 0){
            return output+s[s.indexOf(' ')+1]
        }else{
            return output+s[1]
        }
      }

  return (
    <Link to={`/categories/store/${item.id}`} className='hover:border-pink-500 border-button rounded-lg hover:scale-105 transition-transform cursor-pointer border-2 m-auto bg-button p-2 w-[60vw] h-[60vw] text-center md:w-[25vw] md:h-[25vw] lg:w-[20vw] lg:h-[20vw] shadow-tight '> 
          <div className=' flex flex-col items-center justify-center h-[100%]'>
            <div className=' text-7xl font-bold uppercase text-pink-500'>{hasWhiteSpace(item.name)}</div>
            <div className=' text-md shadow-ti uppercase text-pink-500 font-nica font-bold'>{item.name}</div>
          </div>
    </Link>
  )
}

export default CategoryCard
