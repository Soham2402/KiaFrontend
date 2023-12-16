import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className=' h-[85vh] text-lg font-bold text-center m-auto mx-10'>
      <h1>Sorry the item was not found or it does not exist :(</h1>
      <Link to="/"  className=' underline'>Go back to home page</Link>
    </div>
  )
}

export default NotFound
