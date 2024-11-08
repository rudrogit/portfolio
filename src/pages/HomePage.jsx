import React from 'react'
import Hero from '../components/Home/Hero'
import WhatiDo from '../components/Home/WhatiDo'
import Banner from '../components/Home/Banner'
import Projects from '../components/Home/Projects'
import Footer from '../components/WebControl/Footer'
import FAQ from '../components/Home/FAQ'

const HomePage = () => {
  return (
    <div className='text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800'>

        <div className="w-[96%] mx-auto md:w-[90%] lg:w-5/6">
            <Hero/>
            <WhatiDo/>
        </div>
        <Banner/> 
        <div className="w-[96%] mx-auto md:w-[90%] xl:w-5/6">
           <Projects/>
           <FAQ/>
        </div>

    </div>
  )
}

export default HomePage
