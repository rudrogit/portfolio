import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#173250]'>
      
       <div className="w-full h-80 flex flex-col items-center justify-center">
          <h1 className='px-[1%] font-poptwo md:px-[22%] text-3xl text-center sm:text-4xl lg:text-6xl mb-3'>Build your Personal Portfolio Website with Flixta</h1>
          <h1 className='px-[3%] md:px-[5%] text-3xl text-center sm:text-4xl lg:text-5xl'></h1>
          <div className="flex mt-8">
            <div className="w-12 h-12 border-2 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-green-500 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-sky-500 duration-300 ease-in-out text-2xl fa-brands fa-facebook"></i></div>
            <div className="w-12 h-12 border-2 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-green-500 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-sky-500 duration-300 ease-in-out text-2xl fa-brands fa-instagram"></i></div>
            <div className="w-12 h-12 border-2 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-green-500 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-sky-500 duration-300 ease-in-out text-2xl fa-brands fa-linkedin"></i></div>
            <div className="w-12 h-12 border-2 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-green-500 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-sky-500 duration-300 ease-in-out text-2xl fa-brands fa-square-x-twitter"></i></div>
          </div>
       </div>
       <div className="pb-5">
          <small className='block text-center pb-3 border-b border-slate-400 px-10'>© 2024 Flixta, All Rights Reserved. Developed By 
            <span className='text-sky-500 px-1'>DEV.Rudro</span>
           With </small>
       </div>

    </div>
  )
}

export default Footer
