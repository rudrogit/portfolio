import React from 'react'
import Language from './Language'

const Skills = () => {
  return (
    <div>
      
      <div className="flex flex-col gap-5 lg:flex-row pt-10 pb-20">

         <div className="w-full p-3 lg:w-3/6">
            <Language color='#d97706' language='HTML' persent='95%' />
            <Language color='#3b82f6' language='CSS' persent='90%' />
            <Language color='#eab308' language='Javascript' persent='75%' />
            <Language color='#38BDF8' language='Tailwind' persent='87%' />
            <Language color='#81e0ff' language='React Js' persent='85%' />
            <Language color='#4D535C' language='Next Js' persent='15%' />
            <Language color='#679F5D' language='Node js' persent='55%' />
            <Language color='#383838' language='Express js' persent='87%' />
            <Language color='#81C047' language='Mongo DB' persent='93%' />
         </div>

         <div className="w-full px-3 bg-sky-10 lg:w-3/6 lg:px-5">
            <p className='text-green-500 font-poptwo font-semibold mb-2'>Why Choose Us</p>
            <h1 className='text-2xl text-slate-800 dark:text-slate-50 font-bold font-poptwo mb-3 md:text-4xl'>Learn Something Good, Do Something Better</h1>
            <p className='text-sm text-slate-700 dark:text-slate-100 font-normal mb-3 md:text-base md:pr-[5%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat tempore architecto, tempora odio, vero ducimus impedit hic reprehenderit veritatis ipsam voluptates quaerat accusantium magni ipsa. Maiores sequi voluptates vero.</p>
            <p className='text-sm text-slate-700 dark:text-slate-100 font-normal mb-3 md:text-base md:pr-[5%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod earum voluptate obcaecati sint fugiat ipsum officia praesentium exercitationem? Fuga rem nulla odio optio libero cupiditate. Non, saepe? Reiciendis ipsam nam veritatis quibusdam, quae fuga magnam quidem? Explicabo fugit iure neque aliquid dolorum dicta praesentium beatae quo accusantium! Recusandae, culpa labore.</p>
            <p className='text-sm text-slate-700 dark:text-slate-100 font-normal mb-3 md:text-base md:pr-[5%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequuntur dolorem perspiciatis quas <span className='text-green-500 font-poptwo'>Learn CV</span> cum ea.</p>
            <button className='font-semibold px-4 py-2 rounded-md bg-green-500 block'>Learn More</button>
         </div>

      </div>

    </div>
  )
}

export default Skills
