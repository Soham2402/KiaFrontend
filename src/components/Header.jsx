import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'





const Header = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleNav = () => setNav(!nav);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };


  return (
    <div className='bg-primary-bg font-serif text-[20px] fixed z-[1000] w-full'>
      <nav className='hidden lg:flex justify-between items-center p-5 flex-wrap w-[90%] m-auto'>
        <span className='text-[2em] font-nica'>
          <a href="">Kia Enterprises</a>
        </span>
        <span className='flex align-middle gap-11 flex-wrap'>
          <Link to="/categories/">categories</Link>
          <Link to="/store/">products</Link>
          <Link to="/">contact us</Link>
          <Link to="/about/">about</Link>
        </span>
      </nav>


      
      <div className='fixed lg:hidden w-full bg-primary-bg z-[1001]'>
        {/* <div className='relative left-[70%] md:left-[87%] cursor-pointer px-10 py-2' > */}
        <div className='flex text-center items-center justify-between  p-2' >
          <span className='text-[1.5em] pl-2 font-nica'>
            <a href="">Kia</a>
          </span>
          <span  onClick={handleNav}>
            <Hamburger toggled={isOpen} toggle={setOpen} color='#EDAFB8'  />
          </span>
           
        </div>
      </div>

      {nav && (
        <motion.div
          className='fixed top-0 left-0 w-full h-full bg-primary-bg origin-top flex justify-center items-center overflow-y-hidden'
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={navVariants}
        >
          <div className='flex flex-col items-center text-2xl h-[70%] justify-around'>
            <a href="">categories</a>
            <a href="">products</a>
            <a href="">contact us</a>
            <a href="">about</a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

