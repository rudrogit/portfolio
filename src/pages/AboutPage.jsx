import React from 'react'
import Skills from '../components/About/Skills'
import WhatiDo from '../components/Home/WhatiDo'
import Banner from '../components/Home/Banner'
import Footer from '../components/WebControl/Footer'

const AboutPage = () => {
  return (
    <div className='text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800'>

      <div className="w-[96%] mx-auto md:w-[90%] xl:w-5/6">
      <div className="w-full py-10 md:py-20">
           <h1 className='text-3xl text-slate-800 dark:text-white font-bold font-poptwo text-center md:text-6xl'>Know  <span className='text-green-500'>About Us</span></h1>
       </div>
         <Skills/>
      </div>
      <Banner/>
      <div className="w-[96%] mx-auto md:w-[90%] xl:w-5/6 py-10">
          <WhatiDo/>
      </div>

    </div>
  )
}

export default AboutPage
