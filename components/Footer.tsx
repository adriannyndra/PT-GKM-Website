import React from 'react'
import { FaEnvelope, FaPhone, FaMarker } from 'react-icons/fa6'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Footer = () => {
  return (
    <footer className="w-full py-4"
    style={{ backgroundColor:'#0C2D4C' }}>
        <div className="max-w-[1240px] mx-auto flex justify-center">
            <div className="flex space-x-4">
                <div className="flex-1  text-white p-6">
                    <img src="/assets/logo-2.jpeg" alt="" 
                    style={{ borderRadius:'15px', height:'100px', marginBottom:'30px'}} />
                    <p className='text-sm tracking-widest text-neutral-300'>
                        PT. GRAHASINDO KARYA MANDIRI merupakan perusahaan yang bergerak dibidang Konsultan Bangunan dan Konsultan Perizinan.
                    </p>
                </div>
                <div className="flex-1 ">
                    <h1 className=' font-semibold text-neutral-200 p-6 uppercase tracking-widest'>
                      KONTAK
                    </h1>
                    <div className='pl-6 text-sm text-neutral-300'>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="mr-2" /> grahasindo@outlook.com
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhone className="mr-2" /> +62-031-501-5771
                        </div>
                        <div className="flex items-center">
                            <FaMarker className="mr-2" /> 
                            Jl. Pucang Anom VII No. 52, Kec. Gubeng, Kota Surabaya
                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <h1 className=' font-semibold text-neutral-200 p-6 uppercase tracking-widest'>
                      HEAD OFFICE
                    </h1>
                    <div className="px-6">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2116662395314!2d112.75605691432095!3d-7.283798873684106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb8d9bc4a7b5%3A0xd8d355a44e76aeeb!2sJl.%20Pucang%20Anom%20VII%20No.52%2C%20Pucang%2C%20Kec.%20Gubeng%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060243%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1693926538149!5m2!1sen!2sid"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                </div>
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