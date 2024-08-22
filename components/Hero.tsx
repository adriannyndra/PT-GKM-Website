"use client";
import React from 'react'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { FaLocationArrow } from 'react-icons/fa6'


const words = [
  {
    text: "Konsultan SLF Berpengalaman dan",
  },
  {
    text: "Terpercaya.",
    className: "text-mainLightBlue dark:text-blue-400",
  },
];


const Hero = () => {
  return (
    <>

    <FloatingWhatsApp 
          phoneNumber="+6285853017373"
          accountName="Admin"
          avatar='/assets/logo.png'
          statusMessage='+6285853017373'
          chatMessage='Halo!🤝 Silahkan lakukan konsultasi bersama kami dengan mengirim pesan'
        />


    <div>
        {/* Hero Image */}
        <img 
          src="/assets/hero1.png" 
          alt="Hero Image" 
          className="w-full object-cover opacity-35 absolute inset-0 -z-10 mt-12"
          style={{ height: '95%'}} />
        <div className="absolute inset-0 bg-black -z-20 mt-12"></div>
        {/* <div className="absolute inset-0 bg-red-700 -z-20 mt-12"></div> */}
        {/* <div className="absolute inset-0 bg-blue-900 -z-20 mt-12"></div> */}


        {/* Typewriter Hero Text */}
        <div className="flex flex-col items-center justify-center h-[40rem] overflow-hidden">
          <h4 className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base ">
            <b className='uppercase tracking-widest'>PT. GRAHASINDO KARYA MANDIRI</b>
          </h4>
          
          <TypewriterEffectSmooth words={words} />

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-8">
            <button 
              style={{
                border: '0px solid #000',   // Border color and thickness
                backgroundColor: 'rgba(39, 148, 245, 0.8)', // Semi-transparent background
                color: 'white',               // Text color
                padding: '12px 22px',        // Padding
                borderRadius: '15px',         // Rounded corners
                cursor: 'pointer',           // Pointer cursor on hover
                outline: 'none',             // Remove default focus outline
                fontSize: '16px',            // Font size
                transition: 'background-color 0.3s ease', // Smooth background transition
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(39, 148, 245, 0.3)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(39, 148, 245, 0.8)'}
            >
              Hubungi Kami 
            </button>
            <button
              style={{
                border: '0px solid #000',   // Border color and thickness
                backgroundColor: 'rgba(39, 148, 245, 0.8)', // Semi-transparent background
                color: 'white',               // Text color
                padding: '14px 24px',        // Padding
                borderRadius: '15px',         // Rounded corners
                cursor: 'pointer',           // Pointer cursor on hover
                outline: 'none',             // Remove default focus outline
                fontSize: '16px',            // Font size
                transition: 'background-color 0.3s ease', // Smooth background transition
                // display: 'flex'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(39, 148, 245, 0.3)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(39, 148, 245, 0.8)'}
            >
              Layanan Kami 
              {/* <FaLocationArrow /> */}
            </button>
          </div>
        </div>

    </div>

    {/* Gradient Background */}
    {/* <img src="/assets/home-gradient.png" alt="home gradient" style={{ width:'100%', position:'absolute', top:'790px' }} /> */}
    </>
  )
}

export default Hero