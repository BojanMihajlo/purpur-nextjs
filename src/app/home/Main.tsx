"use client"
import React  from 'react'
import { motion, useTransform, useScroll} from "framer-motion";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Blogs } from '../../../types';


interface MainProps {
  data: Blogs[];
  imageUrls: string[];
  
}
const Main: React.FC<MainProps> = ({ data, imageUrls }) =>{
  
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'], // Scroll through the whole section
    layoutEffect:false
  });


  
  const fontSizeBig = useTransform(scrollYProgress, [0, 1], ['200px', '400px']);
  const fontSizeSmall=useTransform(scrollYProgress, [0, 1], ['100px', '150px']);
  const fontSizeMedium=useTransform(scrollYProgress,[0, 1], ['100px', '200px']) ;

    const y = useTransform(scrollYProgress, [0, 1], [0, 2400]); // vertical travel
    const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, -700, 160, -100,-400]); // zig-zag pattern
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.6,0.8,0.2,1,1.2]); // small zoom
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // optional spin
    const xc = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 100, -200, 160, -100,-10]); // zig-zag pattern
    const yc = useTransform(scrollYProgress, [0, 1], [0, 2500]); // vertical travel

    
    const images = [imageUrls[1],imageUrls[2],imageUrls[3],imageUrls[4]]

  return (
    <>
      <div ref={sectionRef} className='md:h-[465vh] h-[455vh] relative'>


        <div
        key={data[0].id}
          className=" h-screen mt-15 content-center border-t-2 rounded-tr-full"
         
        >
          <motion.div
          style={{fontSize:fontSizeMedium,overflow:"hidden"}}
          className='p-10 lg:block hidden'
          >
           SINCE 1992...
 
          </motion.div>

          <motion.div
        
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.6 }}
          className='p-10 lg:hidden block text-4xl font-bold'
          >
           SINCE 1992...
 
          </motion.div>

          

          <div className='flex flex-col md:flex-row justify-center items-center gap-6 px-4'>
            <div className='lg:block hidden'>
          <Image
          src={imageUrls[0]}
          alt='photo'
          width={500}
          height={400}
          className='rounded-3xl shadow-2xl ring-offset-8'
          />

      </div>
      <div>
         <motion.div
         style={{ scale, y:y,x:x,rotate}}
         className='sticky top-20 lg:block hidden' 
         >
          <Image
           src={'/images/yarn31.webp'}
           alt='yarnball'
           width={350}
           height={100}
          sizes="(max-width: 800px) 100vw, 800px"

          />
          </motion.div>

          <motion.div
         style={{ scale, y:yc,x:xc,rotate}}
         className='sticky top-20 lg:hidden block' 
         >
          <Image
           src={'/images/yarn31.webp'}
           alt='yarnball'
           width={350}
           height={100}
          sizes="(max-width: 800px) 100vw, 800px"

          />
          </motion.div>

          </div>
          </div>
       

        </div>
    

    <div   className=" w-full h-60 bg-amber-100" >
    <motion.div
    className='text-center lg:block hidden'
    style={{fontSize:fontSizeBig}}
      
      >
        PUR PUR 
        </motion.div>

        <motion.div
    className='text-center lg:hidden block'
    style={{fontSize:fontSizeSmall}}
      
      >
        PUR PUR 
        </motion.div>
        </div>


      <div  className='w-full'>
        <Link href='/collections'>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:px-15 px-4" key={data[0].id}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={image}
                    alt={`Gallery ${index}`}
                    width={280}
                    height={200}
                    className="rounded-3xl shadow-2xl"
                  />
                </div>
              ))}
            </div>
    </Link>
    </div>
     <div   className=" w-full h-50 -mt-5 pt-10 bg-amber-100 text-center">
         <motion.div
            className='lg:text-9xl text-5xl font-bold md:font-normal'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
             
             >
               COLLECTIONS
             
               </motion.div>
               </div>
         
               <Link href='/collections/our-western-story'>
         <div className='h-150 bg-cover bg-fixed mb-20 rounded-bl-full' style={{backgroundImage:`url(${imageUrls[7]})`}}></div>
         </Link>
          <div className='lg:h-100 h-40'></div>

               <div className=' border-t-2 rounded-tl-full  flex justify-center items-center p-20'>
                           
                                <div  className=''>
                                   
                                    <div className='pl-110 pt-10 lg:block hidden'>
                                       
                                        <Image
                                         src={imageUrls[6]}
                                         alt='hat'
                                         width={320}
                                         height={220}
                                         className='rounded-3xl shadow-2xl ring-offset-8'
                                        />
                                        
                                    </div>

                                    <motion.div 
                                   
                                   className='-mt-5 lg:text-9xl text-4xl font-bold lg:font-normal ml-5 md:ml-0 '
                                   initial={{ opacity: 0, y: 80 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.8, ease: "easeOut" }}
                                   viewport={{ once: false, amount: 0.6 }}
                                  >
             
                                   HANDMADE...
                                  
                                  </motion.div>
               
                                </div>
                                
                         </div>

        </div>
    </>
  )
}

export default Main
