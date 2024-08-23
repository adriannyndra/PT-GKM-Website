import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-4">
        <div className="max-w-[1366px] mx-auto flex justify-center">
            <div className="flex space-x-4">
                <div className="flex-1  text-white">
                    <img src="/assets/logo-2.jpeg" alt="" style={{ borderRadius:'15px', height:'100px', margin:'30px' }} />
                    PT. GRAHASINDO KARYA MANDIRI merupakan perusahaan yang bergerak dibidang Konsultan Bangunan dan Konsultan Perizinan.
                </div>
                <div className="flex-1 text-center text-white">Div 2</div>
                <div className="flex-1 text-center text-white">Div 3</div>
            </div>
        </div>
        <div className="w-full text-center mt-4">
        <span className="text-sm text-gray-400">
          Copyright © 2024 Konsultan SLF Bangunan Dan Gedung - PT. Grahasindo Karya Mandiri : by PTGKM
        </span>
      </div>
    </footer>
    
  )
}

export default Footer