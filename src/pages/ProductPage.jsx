import React from 'react'
import ProductTop from '../components/Product/ProductTop'
import ProjectsBox from '../components/Product/ProjectsBox'
import FAQ from '../components/Home/FAQ'

const ProductPage = () => {
  return (
    <div className='text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800'>
       
       <div className="w-[96%] mx-auto md:w-[90%] lg:w-5/6">
          <ProductTop/>
          <ProjectsBox/>
          <FAQ/>
       </div>

    </div>
  )
}

export default ProductPage
