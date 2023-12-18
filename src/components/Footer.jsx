import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

<footer className=" bg-button shadow">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-black  text-center ">© 2023 <a href="" className="hover:underline">Kia Enterprises™</a>. All Rights Reserved.
    </span>
    <div className="flex flex-wrap gap-8 md:gap-10  items-center mt-3 text-sm font-medium text-black  justify-center sm:mt-0">
           <Link to="/categories/" >categories</Link>
          <Link to="/store/">products</Link>
          <a href="https://wa.me/9326759131">contact us</a>
           <Link to="/"  duration={1000}>home</Link>
    </div>
    </div>
</footer>

  );
};

export default Footer;
