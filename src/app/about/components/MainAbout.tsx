import React from 'react'
import { Blogs } from '../../../../types';


interface MainProps {
    data: Blogs[];
    secondText:string[]
    firstText:string[]
    thirdText:string[]
  }

const MainAbout:React.FC<MainProps> = ({data, secondText,firstText,thirdText}) => {


  return (
    <>
    
      <div  className="md:px-10 content-center">
                    <h1 className="text-4xl font-bold px-8 ">{data[0].title.rendered}</h1>
                    <div
                    
                    className="md:text-xl px-8 py-5"
                    >
                      <p>{firstText}</p>
                      </div>
                  </div>

    <div key={data[0].id} className='md:flex justify-center gap-8 md:p-20 p-10'>

        <div className='md:w-[40%] text-l border-b-2 border-l-2 rounded-4xl'>
         <p className='p-12'>{secondText}</p>
        </div>

        <div className="relative  md:h-100 h-60 md:w-[48%] overflow-hidden mt-8 ">
        <video
        className="absolute w-auto rounded-bl-full "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/knittMashine.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
        </div>
      
    </div>

    <div className=' bg-[url(/images/about2.jpg)] h-120 bg-cover bg-fixed rounded-bl-full md:my-10'></div>
    {/* <div className='md:h-25'></div> */}
    <div className='p-10  border-t-2 border-l-2 rounded-4xl md:mx-20 my-15 md:text-2xl'>
      <p>{thirdText}</p>

    </div>
   
    </>
  )
}
export default MainAbout