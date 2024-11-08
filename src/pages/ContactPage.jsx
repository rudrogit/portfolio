import React from 'react'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/WebControl/Footer'

const ContactPage = () => {
  return (
    <div className='text-slate-900 dark:text-slate-200 bg-slate-100 dark:bg-slate-800'>
        
        <div className="w-[96%] mx-auto md:w-[90%] lg:w-5/6">
            <ContactForm/>
        </div>
        
    </div>
  )
}

export default ContactPage
