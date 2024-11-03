import React from 'react'
import Navbar from './home/Navbar'
import Welcome from './home/Welcome'
import Skills from './home/Skills'
import Work from './home/Work'
import { NavLink } from 'react-router-dom';
import ContactForm from './ContactForm'

function Home() {
  return (
    <div>
      <Welcome />
      {/* <hr /> */}
      <br />
      <br />
      <Skills />
      {/* <hr /> */}
      <br />
      <Work />
      
      <div className="flex items-center justify-center mt-4 mb-4">
         <NavLink className="border-none  hover:bg-slate-200 bg-slate-100 p-2 px-4 rounded-md text-black" to="/work">View More</NavLink>
      </div>
      {/* <hr /> */}
     <br />
      <div className="flex flex-col  items-center justify-center mt-5 mb-3">
          <h1 className='flex flex-col text-2xl font-ligo mb-3'>Featured By</h1>
          <div className='md:flex md:flex-row lg:gap-9 gap-4 p-3  '>
               <p className='shadow-sm bg-gray-100  mb-2'>
                <img  src="https://bibekdhakal.odoo.com/web/image/444-261d5b26/spm.webp" alt="" />
               </p>
               <p className='shadow-sm bg-gray-100  mb-2'>
                <img  src="https://bibekdhakal.odoo.com/web/image/445-dbb87f53/Untitled-2.webp" alt="" />
               </p>
               <p className='shadow-sm bg-gray-100  mb-2'> 
                <img  src="https://bibekdhakal.odoo.com/web/image/450-3bc4428e/jat.webp" alt="" />
               </p>
               <p className='shadow-sm bg-gray-100   mb-2'>
                <img  src="https://bibekdhakal.odoo.com/web/image/449-1754c689/teen2.webp" alt="" />
               </p>
          </div>
      </div>
      {/* <hr /> */}
      <br />

     {/* <ContactForm /> */}
    </div>
  )
}

export default Home
