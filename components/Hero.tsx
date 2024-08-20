"use client";
import React from 'react'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Konsultan SLF Berpengalaman dan",
  },
  {
    text: "Terpercaya.",
    className: "text-blue-300 dark:text-blue-300",
  },
];


const Hero = () => {
  return (
    <div className='h-screen'>
        <img 
          src="/assets/hero1.png" 
          alt="Hero Image" 
          className="w-full object-cover opacity-35 absolute inset-0 -z-10 mt-12"
          style={{ height: '95%'}} />
        <div className="absolute inset-0 bg-black -z-20 mt-12"></div>
        {/* <div className="absolute inset-0 bg-red-700 -z-20 mt-12"></div> */}
        {/* <div className="absolute inset-0 bg-blue-900 -z-20 mt-12"></div> */}


        {/* Typewriter Hero Text */}
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
          <h4 className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base ">
            <b>PT. GRAHASINDO KARYA MANDIRI</b>
          </h4>

          <TypewriterEffectSmooth words={words} />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            {/* Buttons Here nanti */}
          </div>
        </div>

    </div>
  )
}

export default Hero