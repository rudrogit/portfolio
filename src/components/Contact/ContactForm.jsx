import React from 'react'

const ContactForm = () => {
  return (
    <div className='py-10 md:py-52'>
        
       <div className="flex flex-col gap-10 justify-between items-center md:flex-row">

           <div className="w-full px-3 md:p-0 md:w-7/12">
             <h1 className='text-3xl border-l-4 border-green-500 text-green-500 font-poptwo font-semibold pl-3 my-5 md:text-5xl md:mb-10'>Send A Message</h1>
             <form 
             action=""
             className=''
             >
                <div className="flex flex-col md:flex-row gap-5">
                    <input 
                    type="text" 
                    placeholder='Your Name'
                    className='w-full px-3 py-2 text-black bg-white rounded-md outline-none mb-3 box-shadow md:py-3'
                    />
                    <input 
                    type="email" 
                    placeholder='Your Email'
                    className='w-full px-3 py-2 text-black bg-white rounded-md outline-none mb-3 box-shadow md:py-3'
                    />
                </div>
                <input 
                type="number" 
                placeholder='Your Whatsapp Number'
                className='w-full px-3 py-2 text-black bg-white rounded-md outline-none mb-3 box-shadow md:py-3'
                />
                <textarea 
                placeholder='Your Message'
                className='resize-none w-full h-32 px-3 py-2 text-black bg-white rounded-md outline-none mb-3 box-shadow'
                >
                </textarea>
                <button 
                type='submit'
                className='w-full px-3 py-2 font-semibold bg-green-500 rounded-md outline-none mb-3 box-shadow md:py-3'
                >
                    Submit
                </button>

             </form>
           </div>

           <div className="w-full bg-green-500 rounded-lg p-3 md:w-96 md:p-5">
             <h1 className='text-2xl text-white font-bold font-poptwo md:text-3xl'>Contact Info</h1>

             <div className="flex items-center justify-center py-3">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                  <i class="text-green-500 text-xl fa-solid fa-location-arrow"></i>
                </div>
                <div className="w-5/6">
                    <h1 className='text-xl font-semibold'>Location</h1>
                    <p className='text-slate-200'>Dhaperhat, Sadullapur, Gaibandha, Rangpur Division</p>
                </div>
             </div>

             <div className="flex items-center justify-center py-3">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                  <i class="text-green-500 text-xl fa-solid fa-envelope"></i>
                </div>
                <div className="w-5/6">
                    <h1 className='text-xl font-semibold'>Email</h1>
                    <p className='text-slate-200'>support@rabbil.com</p>
                </div>
             </div>

             <div className="flex items-center justify-center py-3">
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mr-3">
                  <i class="text-green-500 text-xl fa-solid fa-phone"></i>
                </div>
                <div className="w-5/6">
                    <h1 className='text-xl font-semibold'>Phone No</h1>
                    <p className='text-slate-200'>+8801774688159</p>
                </div>
             </div>

             <div className="">
                <div className="flex mt-8">
                  <div className="w-12 h-12 border-2 border-green-500 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-slate-300 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-green-500 duration-300 ease-in-out text-2xl fa-brands fa-facebook"></i></div>
                  <div className="w-12 h-12 border-2 border-green-500 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-slate-300 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-green-500 duration-300 ease-in-out text-2xl fa-brands fa-instagram"></i></div>
                  <div className="w-12 h-12 border-2 border-green-500 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-slate-300 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-green-500 duration-300 ease-in-out text-2xl fa-brands fa-linkedin"></i></div>
                  <div className="w-12 h-12 border-2 border-green-500 rounded-full bg-slate-700 flex items-center justify-center mx-2 cursor-pointer hover:border-slate-300 hover:bg-slate-800 duration-300 ease-in-out"><i className="hover:text-green-500 duration-300 ease-in-out text-2xl fa-brands fa-square-x-twitter"></i></div>
                </div>
             </div>


           </div>
       </div>

    </div>
  )
}

export default ContactForm
