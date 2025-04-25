"use client"
import React from 'react'
import Navbar from '@/app/home/Navbar'
import { useRef } from "react";

import {motion, useScroll, useTransform} from "framer-motion"

export default function Collect() {


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

   const fontSize = useTransform(scrollYProgress, [0, 1], ['40px', '70px']);
    
  return (
     <>
    <motion.div
                  initial={{
                    borderBottomLeftRadius:0,
                  }}
                  whileInView={{
                   borderBottomLeftRadius:950,
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                  }}
                  className="h-screen bg-[url(/images/collectHero.jpg)]  bg-fixed bg-cover lg:bg-bottom bg-right overflow-hidden" 
                >
            
          <div className="md:ml-25 md:p-10">
            <Navbar/>
            </div>
    </motion.div>
    <div className='md:h-[100vh] h-[80vh] content-center' >
    <motion.div
        className='text-center  font-bold md:block hidden'
        style={{fontSize}}
        ref={ref}
          
          >
          ONCE UPON A TIME...
            </motion.div>

            <motion.div
        className='text-center p-12 text-red-600 font-bold md:block hidden'
        style={{fontSize}}
        ref={ref}
          
          >
          WE TELL OUR STORIES...
            </motion.div>

            <motion.div
        className='text-center font-bold md:block hidden'
        style={{fontSize}}
        ref={ref}
          
          >
         CHOOSE YOUR COLLECTION STORY...
            </motion.div>

            <motion.div
            className='text-center font-bold md:hidden block text-2xl'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
            >
           <p className='p-5'>ONCE UPON A TIME...</p>
          <p className='p-5 text-red-500'>WE TELL OUR STORIES...</p>
          <p className='p-5'> CHOOSE YOUR COLLECTION STORY...</p>
            </motion.div>

            </div>
     <div className='h-[40vh]'></div>
             
      

    </>
  )
}
