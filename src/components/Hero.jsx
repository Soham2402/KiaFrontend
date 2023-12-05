import React from 'react'

const Hero = () => {
  return (
    <div className='lg:pt-[7em] pt-16 relative'>
      <div className='w-[89%] bg-hero-blue m-auto rounded-3xl shadow-2xl '>
        <div className='flex justify-evenly items-center flex-col-reverse p-10 gap-5 md:flex-row  md:justify-evenly inner-shadow rounded-3xl'>
          <section className='flex flex-col gap-5 items-center md:items-start md:gap-9 md:ml-11'>

            <h1 className='text-[3em] md:text-[4em] font-bold md:text-left text-center '> Lorem Ipsum</h1>
            <p className='  md:w-[50%] md:text-[1.2em] lg:text-[1.4em] text-center md:text-left font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit aspernatur! Labore sed iure eligendi eos voluptas tempora nemo quas.</p>
            <a className='bg-button font-serif text-white text-[1em]  md:text-[1.5em] self-center md:self-start px-[4em] py-[1em] rounded-[5em] shadow-tight' href="">Shop Now</a>

          </section>

          <section className='max-w-[40vh] md:mr-11 '>
            <img className=' rounded-2xl' src="https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80" alt="" />
          </section>

        </div>
      </div>
    </div>
  )
}

export default Hero
