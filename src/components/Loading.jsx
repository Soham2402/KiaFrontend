import React from 'react'
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className='min-h-screen text-lg font-bold text-center m-auto mx-10'>
       <ReactLoading type={'cylon'} color={'#EDAFB8'} height={667} width={375} className=' m-auto' />
    </div>
  )
}

export default Loading
