import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-bl-[200px] md:rounded-bl-full ">
      {/* Video Background */}

      <div className='relative z-10  mt-10 w-full'>
      <Navbar/>
      </div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>

      {/* Hero Content */}
      <div  className="absolute z-20 bottom-10 right-0 md:bottom-0 md:right-16 lg:right-32">
       
        <Image
         src="/images/logoPur.png"
         alt='photo'
         width={600}
          height={600}
          className="sm:w-[250px] md:w-[350px] lg:w-[500px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
