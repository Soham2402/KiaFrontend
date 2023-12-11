import React, { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'





const Header = () => {
  const [nav, setNav] = useState(false);
  // const [isOpen, setOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav)
    // setOpen(!isOpen)
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };


  return (
    <div className='bg-primary-bg font-serif text-[20px] fixed z-[1000] w-full'>
      <nav className='hidden lg:flex justify-between items-center p-5 flex-wrap w-[90%] m-auto'>
        <span className='text-[2em] font-nica'>
          <Link to="/">Kia</Link>
        </span>
        <span className='flex align-middle gap-11 flex-wrap'>
          <Link to="/categories/" >categories</Link>
          <Link to="/store/">products</Link>
          <Link to="/">contact us</Link>
          <Link to="/about/">about</Link>
        </span>
      </nav>


      
      <div className='fixed lg:hidden w-full bg-primary-bg z-[1001]'>
        {/* <div className='relative left-[70%] md:left-[87%] cursor-pointer px-10 py-2' > */}
        <div className='flex text-center items-center justify-between  p-2' >
          <span className='text-[1.5em] pl-2 font-nica'>
            <Link to="/">Kia</Link>
          </span>
          <span>
            <Hamburger toggled={nav} toggle={setNav} color='#EDAFB8'  />
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
          <div className='flex flex-col items-center text-2xl h-[70%] justify-start text-center'>
          <Link  to="/categories/" onClick={handleNav}  className='w-[100vw] py-10  cursor-pointer mb-[10px]' >categories</Link>
          <Link to="/store/" onClick={handleNav}  className='w-[100vw] py-10  mb-[10px]'>products</Link>
          <Link to="/" onClick={handleNav}  className='w-[100vw] py-10  mb-[10px]'>contact us</Link>
          <Link to="/about/" onClick={handleNav}  className='w-[100vw] py-10  mb-[10px]'>about</Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

