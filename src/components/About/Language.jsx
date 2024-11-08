import React from 'react'

const Language = ({color, persent, language}) => {
  return (
    <div>
      
       <div className="px-5 mb-3">
            <h3 className='text-lg font-semibold font-poptwo text-slate-800 dark:text-slate-50'>{language}</h3> 
            <div className="w-full h-2 bg-slate-400 rounded-full">
                   <div style={{width:persent, backgroundColor:color}} className={`h-full rounded-full relative`}>
                       <span style={{borderColor:color}} className={`absolute -top-3 right-0 h-8 w-8 p-1 border-2 rounded-full font-poptwo 
                      font-bold text-[12px] text-slate-800 bg-slate-50 flex items-center justify-center`}> {persent} </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Language
