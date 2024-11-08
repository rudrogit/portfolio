import React, { useState } from 'react'
import DarkLightBtn from '../../others/DarkLightBtn';
import { Link } from 'react-router-dom'

const Navber = () => {

   const [popup, setPopup] = useState(false);
   
  return (
    <div className='sticky top-0 left-0 z-50'>
      
       <div className="py-3 bg-slate-50 dark:bg-gray-700 z-50 border-b-2 dark:border-slate-500">
            <nav className='w-full px-[3%] flex items-center justify-between xl:px-[10%] relative'>

                <h1 className='text-2xl text-slate-900 dark:text-slate-100 md:text-3xl font-popone font-bold cursor-pointer active:scale-90 duration-500'><a href="/"> DEV. Rudro</a></h1>

                {/* Nav List */}
                <div className={`absolute w-5/6 h-96 top-16 right-0 bg-slate-300 dark:bg-gray-700 ${popup? 'block' : 'hidden'}
                md:w-fit md:bg-transparent md:h-fit md:static md:block`}>
                    <ul className='py-5 px-10 flex flex-col items-start gap-4 text-lg font-poptwo
                    md:p-0 md:items-center md:flex-row md:text-xl md:gap-6 lg:10'>

                        <Link to={'/'} className='text-slate-800 dark:text-slate-300 font-semibold dark:hover:hover:text-green-400 hover:text-green-400 transition decoration-300 cursor-pointer'>Home</Link>
                        <Link to={'/about'} className='text-slate-800 dark:text-slate-300 font-semibold dark:hover:hover:text-sky-400 hover:text-sky-400 transition decoration-300 cursor-pointer'>About Me</Link>
                        <Link to={'/products'} className='text-slate-800 dark:text-slate-300 font-semibold dark:hover:hover:text-sky-400 hover:text-sky-400 transition decoration-300 cursor-pointer'>Projects</Link>
                        <Link to={'/contact'} className='text-slate-800 dark:text-slate-300 font-semibold dark:hover:hover:text-sky-400 hover:text-sky-400 transition decoration-300 cursor-pointer'>Contact Me</Link>
                        <li className='hidden md:block'><DarkLightBtn/></li>

                    </ul>
                </div>
               {/* toggle or dark icon */}
               <div className="flex items-center md:hidden">
                    {/* Nav toggle icon */}
                        <label  className="btn btn-circle swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input onClick={()=> setPopup(!popup)} type="checkbox" />
                            {/* hamburger icon */}
                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 512 512">
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>
                            {/* close icon */}
                            <svg
                                className="swap-on fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 512 512">
                                <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                            </svg>
                        </label>
                    {/* Dark Light Mode */}
                     <DarkLightBtn/>
               </div>

            </nav>
       </div>

    </div>
  )
}

export default Navber
