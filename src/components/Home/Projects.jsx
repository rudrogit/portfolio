import React from 'react'

const Projects = () => {
  return (
    <div>
         {/* My products */}
        <div className="py-10 pt-20">
            <h1 className='text-4xl border-l-4 pl-3 mb-5 font-bold font-poptwo text-slate-800 dark:text-slate-200 border-slate-800 dark:border-slate-200'>My Top Projects</h1>
            <p className='text-lg font-poptwo pr-[10%] font-medium text-slate-800 dark:text-slate-200'>I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my    main technical skill sets and technologies I use. Want to find out more about my experience? Check out my  
                <span className='text-green-500 px-2 cursor-pointer'>online resume</span> and 
                <span className='text-green-500 px-2 cursor-pointer'>project portfolio.</span>
            </p>
        </div>
        {/* Projects */}
        <div className="w-full flex flex-wrap flex-col justify-center items-center gap-5 pb-20 lg:gap-10 lg:flex-row">

            <div className="w-full lg:w-5/12 rounded-md bg-slate-600 p-3 lg:p-5">
               <div className="w-full h-60 overflow-hidden mb-5 lg:h-80">
                  <img className='w-full hover:scale-[1.3] duration-500 ease-in-out' src="https://www.webdew.com/wp-content/uploads/2024/07/Jimdo-1-1024x625.webp" alt="" />
               </div>
               <div className="flex flex-col justify-between sm:flex-row">
                  <div className="mb-3">
                      <div className="w-full flex flex-wrap gap-3 items-center mb-3">
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>React</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>gsap</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>Web Devolopment</button>
                      </div>
                      <h2 className='text-2xl font-poptwo font-bold'># website-builder</h2>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <button className='w-16 h-16 border-2 rounded-full outline-none'> <i class="rotate-45 text-sky-500 text-2xl fa-solid fa-arrow-up-long"></i> </button>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-5/12 rounded-md bg-slate-600 p-3 lg:p-5">
               <div className="w-full h-60 overflow-hidden mb-5 lg:h-80">
                  <img className='w-full hover:scale-[1.3] duration-500 ease-in-out' src="https://s3-alpha.figma.com/hub/file/4323747573/a14783f4-fe49-4c87-ad29-bb97d9b612e6-cover.png" alt="" />
               </div>
               <div className="flex flex-col justify-between sm:flex-row">
                  <div className="mb-3">
                      <div className="w-full flex flex-wrap gap-3 items-center mb-3">
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>React</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>gsap</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>Web Devolopment</button>
                      </div>
                      <h2 className='text-2xl font-poptwo font-bold'># Food - Website Design</h2>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <button className='w-16 h-16 border-2 rounded-full outline-none'> <i class="rotate-45 text-sky-500 text-2xl fa-solid fa-arrow-up-long"></i> </button>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-5/12 rounded-md bg-slate-600 p-3 lg:p-5">
               <div className="w-full h-60 overflow-hidden mb-5 lg:h-80">
                  <img className='w-full hover:scale-[1.3] duration-500 ease-in-out' src="https://images.squarespace-cdn.com/content/v1/643d462156eda3673214a28c/1681737290239-1BLJJRZ6SHRLWI310GV6/2022-06-01_08-07-28.png" alt="" />
               </div>
               <div className="flex flex-col justify-between sm:flex-row">
                  <div className="mb-3">
                      <div className="w-full flex flex-wrap gap-3 items-center mb-3">
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>React</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>gsap</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>Web Devolopment</button>
                      </div>
                      <h2 className='text-2xl font-poptwo font-bold'># Image Galarry website</h2>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <button className='w-16 h-16 border-2 rounded-full outline-none'> <i class="rotate-45 text-sky-500 text-2xl fa-solid fa-arrow-up-long"></i> </button>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-5/12 rounded-md bg-slate-600 p-3 lg:p-5">
               <div className="w-full h-60 overflow-hidden mb-5 lg:h-80">
                  <img className='w-full hover:scale-[1.3] duration-500 ease-in-out' src="https://images.ctfassets.net/lzny33ho1g45/5VGvMMdX169JCk60IJCRDA/358a2d3f62c6028d978efc382cb83ad5/image10.png?w=1400" alt="" />
               </div>
               <div className="flex flex-col justify-between sm:flex-row">
                  <div className="mb-3">
                      <div className="w-full flex flex-wrap gap-3 items-center mb-3">
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>React</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>gsap</button>
                        <button className='px-3 py-1 border-2 rounded-full outline-none'>Web Devolopment</button>
                      </div>
                      <h2 className='text-2xl font-poptwo font-bold'># busness-website</h2>
                  </div>
                  <div className="flex justify-center items-center mb-2">
                    <button className='w-16 h-16 border-2 rounded-full outline-none'> <i class="rotate-45 text-sky-500 text-2xl fa-solid fa-arrow-up-long"></i> </button>
                  </div>
               </div>
            </div>

        </div>

    </div>
  )
}

export default Projects
