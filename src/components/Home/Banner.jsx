import React from 'react'

const Banner = () => {
  return (
    <div>
        
        <div 
        id='banner'
        className="w-full h-96 flex flex-col items-start justify-center bg-purple-500 mt-10 px-[3%] md:px-[5%] lg:px-[10%]">
            <h2 className='text-3xl font-bold pl-5 border-l-4 leading-[55px] font-poptwo mb-5 md:text-4xl lg:mb-10 lg:text-6xl lg:order-1'>Functional Web Devolopment</h2>
            <h2 className='text-xl pl-5 text-left font-poptwo m-0
            lg:border-l-4 md:text-2xl lg:text-4xl lg:mb-10 lg:order-2'>Frontend and backend development, database management, responsive design, debugging, performance optimization, version control, problem-solving, and collaborative teamwork.</h2>
        </div>

    </div>
  )
}

export default Banner
