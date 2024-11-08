import React from 'react'
import Projects from './Projects'

const ProjectsBox = () => {
  return (
    <div>

      <div className="py-10 md:py-20">
        <h1 className='text-center text-2xl text-slate-800 font-bold font-poptwo dark:text-slate-50 md:text-4xl py-10 md:py-20'>Browse <span className='text-green-500'>Projects</span> <br /> <span className='text-center text-lg text-slate-800 font-semibold font-poptwo dark:text-slate-50 md:text-xl'>Explore This Owsem Projects</span></h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">

             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://newlightdigital.com/wp-content/uploads/2024/01/new-website-in-2024.jpeg" headline= 'React Js' tecnology='This is some content from a media component'/>
             <Projects imgsrc="https://bootstrapmade.com/content/templatefiles/Yummy/Yummy-bootstrap-website-template-md.webp" headline= 'React Js' tecnology='This is some content from a media component'/>

        </div>

      </div>

    </div>
  )
}

export default ProjectsBox
