import React from 'react'

const ProductTop = () => {
  return (
    <div>
        
         <div className="">

             <div className="py-10 md:py-20">
                <h1 className='text-3xl text-slate-800 text-center font-poptwo font-bold dark:text-slate-50 md:text-5xl'> Explore My <span className='text-green-500'>Projects</span></h1>
                <h4 className='text-base md:text-xl text-slate-800 font-poptwo font-bold py-4 text-center dark:text-slate-50'>Are you looking for amazing e-course platform? <br /> Don't worry! We got it for you!</h4>
             </div>

            <div className="w-full pb-5">
                <h3 className='text-2xl text-slate-800 font-poptwo font-bold py-4 dark:text-slate-50 md:text-3xl'>Technology</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                    <div className="p-3 flex items-center justify-center bg-white dark:bg-gray-500 rounded-md box-shadow">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-[#08D9FF] rounded-full mr-2"> 
                            <i class="text-3xl text-[#08D9FF] fa-brands fa-react"></i>
                        </div>
                        <div className="w-5/6 px-2">
                            <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-white'>React Js</h3>
                            <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50'>This is some content from a media component</p>
                        </div>
                    </div>

                    <div className="p-3 flex items-center justify-center bg-white dark:bg-gray-500 rounded-md box-shadow">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-[#080808] rounded-full mr-2"> 
                            <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path className='text-3xl text-[#080808]' d="M17.6644 17.6493L10.2602 8H8V16H10V10.9462L16.0869 18.8788C14.8907 19.5909 13.4931 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.2053 19.1077 16.2022 17.6644 17.6493ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14 12V8H16V12H14Z"></path></svg>
                        </div>
                        <div className="w-5/6 px-2">
                            <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-slate-50'>Next Js</h3>
                            <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50'>This is some content from a media component</p>
                        </div>
                    </div>
                    
                    <div className="p-3 flex items-center justify-center bg-white dark:bg-gray-500 rounded-md box-shadow">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-[#5DAC4C] rounded-full mr-2"> 
                            <i class="text-3xl text-[#5DAC4C] fa-brands fa-node-js"></i>
                        </div>
                        <div className="w-5/6 px-2">
                            <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-white'>Node Js</h3>
                            <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50'>This is some content from a media component</p>
                        </div>
                    </div>

                    <div className="p-3 flex items-center justify-center bg-white dark:bg-gray-500 rounded-md box-shadow">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-[#002233] rounded-full mr-2 overflow-hidden"> 
                            <img className='w-[80%]' src="https://img.icons8.com/color/512/express-js.png" alt="" />
                        </div>
                        <div className="w-5/6 px-2">
                            <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-white'>Express Js</h3>
                            <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50'>This is some content from a media component</p>
                        </div>
                    </div>

                    <div className="p-3 flex items-center justify-center bg-white dark:bg-gray-500 rounded-md box-shadow">
                        <div className="w-14 h-14 flex items-center justify-center border-2 border-[#6BA342] rounded-full mr-2 overflow-hidden"> 
                            <img className='w-[80%]' src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="" />
                        </div>
                        <div className="w-5/6 px-2">
                            <h3 className='text-xl font-bold font-poptwo text-slate-800 dark:text-white'>Express Js</h3>
                            <p className='font-medium font-poptwo text-slate-800 dark:text-slate-50'>This is some content from a media component</p>
                        </div>
                    </div>

                </div>

            </div>
         </div>

    </div>
  )
}

export default ProductTop



