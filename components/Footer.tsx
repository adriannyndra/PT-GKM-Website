import React from 'react'
import { FaEnvelope } from 'react-icons/fa6'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Footer = () => {
  return (
    <footer className="w-full py-4"
    style={{ backgroundColor:'#0C2D4C' }}>
        <div className="max-w-[1366px] mx-auto flex justify-center">
            <div className="flex space-x-4">
                <div className="flex-1  text-white p-6">
                    <img src="/assets/logo-2.jpeg" alt="" 
                    style={{ borderRadius:'15px', height:'100px', marginBottom:'30px'}} />
                    <p className='text-sm tracking-widest text-neutral-300'>
                        PT. GRAHASINDO KARYA MANDIRI merupakan perusahaan yang bergerak dibidang Konsultan Bangunan dan Konsultan Perizinan.
                    </p>
                </div>
                <div className="flex-1 text-center font-semibold text-neutral-200 p-6 uppercase tracking-widest">
                    KONTAK
                </div>
                <div className="flex-1 text-center font-semibold text-neutral-200 p-6 uppercase tracking-widest">HEAD OFFICE</div>
            </div>
        </div>
        <div className="w-full text-center mt-16">
        <span className="text-sm text-gray-400 ">
          Copyright © 2024 Konsultan SLF Bangunan Dan Gedung - PT. Grahasindo Karya Mandiri : by PTGKM
        </span>
      </div>
      
    </footer>
    
  )
}

export default Footer