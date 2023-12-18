import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (


    <div name = '/' className='lg:pt-[7em] pt-16 relative'>
      <div className='w-[89%] bg-hero-blue m-auto rounded-3xl shadow-2xl '>
        <div className='flex justify-evenly items-center flex-col-reverse p-10 gap-5 md:flex-row  md:justify-around inner-shadow rounded-3xl'>
          <section className=' flex flex-col gap-5 items-center md:items-start md:gap-9 md:ml-11'>

            <h1 className=' text-[3em] md:text-[4em] font-bold md:text-left text-center '> It's that time of the year!</h1>
            <p className='  md:w-[50%] md:text-[1.2em] lg:text-[1.4em] text-center md:text-left font-thin'>Embrace the Magic of Christmas! Make Your Wedding Dreams Come True! Find Joy in Every Click
Start Your Celebration Journey Below!</p>
            <Link to='/store/' className='hover:scale-110 transition-transform bg-button font-serif text-white text-[1em]  md:text-[1.5em] self-center md:self-start px-[4em] py-[1em] rounded-[5em] shadow-tight'>Shop Now</Link>

          </section>

          <section className='max-w-[40vh] md:mr-11 flex'>
            <img className=' rounded-2xl' src="https://i.imgur.com/2jdRCki.png" alt="" />
          </section>

        </div>
      </div>
    </div>
  )
}

export default Hero
