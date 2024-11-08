import React, { useState } from 'react'

const Accordion = ({qustion, answer}) => {
  const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div>
      
     <div className="p-4 bg-gray-600 mb-3 rounded-md">
        <button 
        onClick={()=> setAccordionOpen(!accordionOpen)}
        className='w-full flex justify-between items-center'>
            <span className='w-5/6 text-white text-xl text-left font-poptwo font-semibold '>{qustion}</span>
           {accordionOpen ? 
           <div className='w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center'><i class="text-slate-500 fa-solid fa-chevron-up"></i></div> 
           :
           <div className='w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center'><i class="text-sky-500 fa-solid fa-chevron-down"></i></div>} 
        </button>
        <div className={`w-full grid overflow-hidden transition-all duration-500 ease-in-out
            ${accordionOpen? 'grid-rows-[1fr] opacity-100 pt-3' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden text-slate-200 text-lg font-normal font-poptwo ">
                {answer}
            </div>
        </div>
     </div>
       
    </div>
  )
}

export default Accordion
