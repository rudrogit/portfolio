import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import heroimg from '../../assets/images/hero-img.png'

const Hero = () => {

    const [text] = useTypewriter({
        words:['devoloper', 'Designer', 'Programar'],
        loop:{},
        typeSpeed:150,
        deleteSpeed:100,
      })

  return (
    <div className=''>

       <div className="w-full h-fit pt-10 flex flex-col items-center justify-center 
       lg:flex-row lg:justify-between lg:pt-20">
            <div className="w-full lg:w-7/12">
            {/* main */}
                <h2 className='text-2xl font-poptwo text-slate-900 dark:text-slate-200 font-semibold
                md:text-3xl'>HI, I'M A FREELANCER</h2>
                <h2 className='text-6xl font-poptwo text-green-500 dark:text-slate-20 font-bold py-3
                md:text-8xl md:py-5'>{text} <Cursor/></h2> 
                <h2 className='text-xl font-poptwo font-medium text-slate-800 dark:text-slate-200 pr-20 mb-5'>I'm a software engineer specializing in scalable web apps. Explore 
                    <span className='text-green-500 px-2 cursor-pointer'>project portfolio</span>  
                    and 
                    <span className='text-green-500 px-2 cursor-pointer'>online resume.</span>
                </h2>
                <button className='px-3 py-1 rounded-full outline-none cursor-pointer bg-green-500 mr-5 mb-3 sm:px-5'><i className="px-1 fa-solid fa-right-long"></i> View Portfolio</button>
                <button className='px-3 py-1 rounded-full outline-none cursor-pointer bg-sky-500 sm:px-5'><i class="px-1 fa-regular fa-address-book"></i> View Resume</button>
            </div>
            <div className="w-full py-10 lg:p-0 lg:w-5/12">
                <img id='animation' className='w-4/6 mx-auto' src={heroimg} alt="loo" />
            </div>
       </div>
       {/* count */}
       <div className="w-full py-5 flex flex-wrap gap-10 lg:pb-20">
            <div className="w-2/6 pr-5 lg:pr-0 lg:w-1/6 flex">
                <h2 className='text-3xl font-poptwo font-bold border-r-4 text-slate-900 dark:text-slate-200 border-slate-800 dark:border-slate-200 pr-3 mr-2 md:text-5xl'>3</h2>
                <div className="flex flex-col font-poptwo font-semibold">
                    <span className='text-slate-900 dark:text-slate-200'>Years of </span>
                    <span className='text-slate-900 dark:text-slate-200'>Experience</span>
                </div>
            </div>
            <div className="w-2/6 pr-5 lg:pr-0 lg:w-1/6 flex">
                <h2 className='text-3xl font-poptwo font-bold border-r-4 text-slate-900 dark:text-slate-200 border-slate-800 dark:border-slate-200 pr-3 mr-2 md:text-5xl'>10</h2>
                <div className="flex flex-col font-poptwo font-semibold">
                    <span className='text-slate-900 dark:text-slate-200'>Projects </span>
                    <span className='text-slate-900 dark:text-slate-200'>Completed</span>
                </div>
            </div>
            <div className="w-2/6 pr-5 lg:pr-0 lg:w-1/6 flex">
                <h2 className='text-3xl font-poptwo font-bold border-r-4 text-slate-900 dark:text-slate-200 border-slate-800 dark:border-slate-200 pr-3 mr-2 md:text-5xl'>15</h2>
                <div className="flex flex-col font-poptwo font-semibold">
                    <span className='text-slate-900 dark:text-slate-200'>Clients </span>
                    <span className='text-slate-900 dark:text-slate-200'>Worldwide</span>
                </div>
            </div>
       </div>

    </div>
  )
}

export default Hero
