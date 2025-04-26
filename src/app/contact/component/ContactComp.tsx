'use client'

import React from 'react'
import {motion} from "framer-motion"
import Navbar from '@/app/home/Navbar'
export default function ContactComp() {
  return (
    <div className='bg-amber-100'>

<motion.div
          initial={{ y: '-100%' }}  // Start off-screen above
          animate={{ y: 0 }}         // Animate to its normal position (0)
          exit={{ y: '100%' }}       // Optionally animate off-screen below when removed
          transition={{ duration: 2 }} // Control the duration of the animation
        >
       <div className="md:h-screen h-[92vh] bg-[url(/images/contactCover.jpg)] rounded-bl-full  bg-fixed bg-cover md:bg-center bg-right " >
        <div className="md:ml-25 md:p-10">
         <Navbar/>
        </div>
      </div> 
    </motion.div>
  <motion.div className='flex flex-col justify-center items-center p-25 '
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
  
  >
    <div className='md:text-5xl text-2xl font-bold md:p-10 p-5'>
        <h1>Contact Us</h1>

    </div>
    <div className='md:flex gap-10 md:pb-10'>

    <div className='p-8 border-t-2 border-l-2 rounded-2xl mb-2'>
    <h1 className='md:text-3xl font-bold'>Email:</h1>
    <p className='md:text-2xl'>purpur@gmail.com</p>
    </div>

    <div className='p-8  border-t-2 border-l-2 rounded-2xl mb-2'>
        <h1 className='md:text-3xl font-bold'>Phone:</h1>
        <p className='md:text-2xl'>0038970566667</p>
        <p className='md:text-2xl'>0038971869803</p>
    </div>
    </div>

    </motion.div>

     <motion.div className='p-5 flex flex-col justify-center items-center min-h-screen'
     initial={{ opacity: 0, y: 80 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     viewport={{ once: false, amount: 0.3 }}
     >

      <div>
         <h1 className='md:text-5xl text-4xl font-bold'>Get in Touch</h1>
         </div>

         <div className=' bg-[url(/images/yarn31.webp)] bg-cover bg-center rounded-full md:w-[50%] '>
          <form className='md:py-20 p-12 flex flex-col justify-center pr-20 md:w-[70%] '>
            <input placeholder='Name' className='p-5 m-2 bg-white rounded-2xl'/>
            <input placeholder='Email' className='p-5 m-2 bg-white rounded-2xl'/>
            <textarea placeholder='Message ' className='p-5 m-2 bg-white rounded-2xl'></textarea>
            <button className='bg-white rounded-2xl p-3 mt-2 w-[25%] ml-10 hover:bg-black hover:text-white hover:cursor-pointer '>Send</button>
          </form>
          
         </div>
     </motion.div>
       

    </div>
  )
}
