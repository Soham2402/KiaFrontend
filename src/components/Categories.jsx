import React from 'react'

const Categories = () => {
  return (
    <div className='m-auto'>
        <div className='my-[10em] text-center'>
            <h1 className=' font-bold text-2xl lg:text-3xl font-nica pb-2'>Categories</h1>
            <p className=' font-thin'>Find what you are looking for</p>
        </div>

    <div className='mt-[12em] md:mt-auto flex flex-col items-center gap-10 bg-hero-blue py-5 md:flex-row  md:py-[5em] md:justify-evenly'>
        <section className='max-w-[40vh] md:max-w-[45vh] md:mr-11 relative bottom-32 flex flex-col gap-3 z-[999]'>
                <img className='rounded-2xl shadow-ulg' src="https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80" alt="" />
                <section className='text-center pb-5 pt-2'>
                    <h2 className=' text-3xl font-bold '>Decor</h2>
                    <p>Beautify your house</p>
                </section>
        </section>
        <section className='max-w-[40vh] md:max-w-[45vh] md:mr-11  relative bottom-32 md:top-12 flex flex-col md:flex-col-reverse  gap-3'>
                <img className=' rounded-2xl  shadow-uxl' src="https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80" alt="" />
                <section className='text-center pb-5 pt-2'>
                    <h2 className=' text-3xl font-bold '>Decor</h2>
                    <p>Beautify your house</p>
                </section>
        </section>
        <section className='max-w-[40vh] md:max-w-[45vh] md:mr-11  relative bottom-32 flex gap-3 flex-col'>
                <img className=' rounded-2xl  shadow-uxl' src="https://images.unsplash.com/photo-1572978567882-408eb0787206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsbCUyMGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw=&w=1000&q=80" alt="" />
                <section className='text-center pb-5 pt-2'>
                    <h2 className=' text-3xl font-bold '>Decor</h2>
                    <p>Beautify your house</p>
                </section>
        </section>
    </div>
      
    </div>
  )
}

export default Categories
