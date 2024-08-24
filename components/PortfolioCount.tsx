import React from "react";

const PortfolioCount = () => {
  return (
    <div className="bg-mainLightBlue text-center py-14 mb-32">
      <div className="flex justify-center space-x-16">

        <div className="relative text-5xl font-bold text-white after:content-[''] after:absolute after:right-[-32px] after:top-1/2 after:transform after:-translate-y-1/2 after:h-12 after:w-px after:bg-white">
          2018
          <div className="text-xl font-medium text-white mt-4"> {/* Added margin-top */}
            Tahun Berdiri
          </div>
        </div>
        
        <div className="relative text-5xl font-bold text-white after:content-[''] after:absolute after:right-[-32px] after:top-1/2 after:transform after:-translate-y-1/2 after:h-12 after:w-px after:bg-white">
          119
          <div className="text-xl font-medium text-white mt-4"> {/* Added margin-top */}
            Proyek Selesai
          </div>
        </div>
        
        <div className="relative text-5xl font-bold text-white">
          119
          <div className="text-xl font-medium text-white mt-4"> {/* Added margin-top */}
            Klien Puas
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioCount;
