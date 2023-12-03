import React from 'react'


const Header = () => {
  return (
    <div className='w-screen bg-primary-bg font-serif text-[20px] '>
      <nav className='flex justify-between items-center p-5 flex-wrap w-[90%] m-auto'>
        <span className='text-[2em] font-nica'>
            <a  href="">Kia Enterprises</a>
        </span>
        <span className='flex  align-middle gap-11 flex-wrap'>
            <a href="">categories</a>
            <a href="">products</a>
            <a href="">contact us</a>
            <a href="">about</a>
        </span>
      </nav>
    </div>
  )
}

export default Header
