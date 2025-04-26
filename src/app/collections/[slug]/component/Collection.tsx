"use client"

import React from 'react'
import {motion} from "framer-motion"
import Navbar from '@/app/home/Navbar'


interface MainProps {
  formatSlug : string
  imageHtml:string
}

const Collection:React.FC<MainProps> =({formatSlug,imageHtml}) => {
  return (
    <div className='bg-amber-100'>
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
                  className="md:h-screen h-[93vh] bg-[url(/images/coverCol1.jpg)]  bg-fixed bg-cover bg-center overflow-hidden mb-10 " 
                >
           <div className="md:ml-25 md:p-10">
                    <Navbar/>
                   </div>
            <div className="lg:pt-100 md:pt-80 md:pl-40 pt-85 lg:pl-40 pl-20"> 
           
        <h1 className="lg:text-6xl text-3xl text-center font-bold text-white " style={{textShadow:"2px 2px 4px red"}} >
          {formatSlug}
        </h1>
       </div> 
    </motion.div>
       

      <div
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 p-10 mt-20"
        dangerouslySetInnerHTML={{ __html: imageHtml }}      
      /> 
    </div>
  )
}
export default Collection