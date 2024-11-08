import React from 'react'

const Projects = ({imgsrc, headline, tecnology}) => {
  return (
    <div>
      
      <div className="shadow w-full rounded duration-300 ease-in-out p-3 border-2 border-slate-300 bg-slate-100 hover:bg-slate-50 hover:border-yellow-400 dark:bg-slate-700 dark:hover:bg-slate-900">
                <div className="h-60 overflow-hidden">
                    <img className='w-full md:h-full hover:scale-[1.2] duration-500 ease-in-out' src={imgsrc} alt="" />
                </div>
                <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-white mt-3'>{headline}</h3>
                <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50 mb-5'>{tecnology}</p>

                <a href='' className='w-full rounded-full block text-center py-2 border-2 border-green-500 font-poptwo font-bold text-green-500 hover:text-slate-50 hover:bg-green-500'>
                    Browse Now
                    <i class="px-2 text-green-500 hover:text-slate-50 fa-solid fa-arrow-up-right-from-square"></i>
                </a>

            </div>


    </div>
  )
}

export default Projects
