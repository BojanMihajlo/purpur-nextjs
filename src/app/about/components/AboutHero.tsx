'use client'
import {motion} from "framer-motion"
import Navbar from "@/app/home/Navbar"

export default function AboutHero() {
  return (
    <div>

      <motion.div
          initial={{ y: '-100%' }}  // Start off-screen above
          animate={{ y: 0 }}         // Animate to its normal position (0)
          exit={{ y: '100%' }}       // Optionally animate off-screen below when removed
          transition={{ duration: 2 }} // Control the duration of the animation
        >
       <div className="md:h-screen h-[93vh] bg-[url(/images/aboutCo.jpg)] rounded-bl-full bg-fixed bg-cover bg-top " >
        <div className="md:ml-25 md:p-10">
         <Navbar/>
        </div>
      </div> 
    </motion.div>
    </div>
  )
}
