"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const clients = [
  {
    imageUrl: "/assets/clients/bca.png", 
  },
  {
    imageUrl: "/assets/clients/samwon.png", 
  },
  {
    imageUrl: "/assets/clients/cocacola.png", 
  },
  {
    imageUrl: "/assets/clients/castrol.png", 
  },
  {
    imageUrl: "/assets/clients/europacific-partners.png", 
  },
  {
    imageUrl: "/assets/clients/radjak-hospital.png", 
  },
  {
    imageUrl: "/assets/clients/rsiamelati-magetan.png", 
  },
  {
    imageUrl: "/assets/clients/cj-korea-express.png", 
  },
  {
    imageUrl: "/assets/clients/erha-ultimate.png", 
  },
  {
    imageUrl: "/assets/clients/pt-indolakto.png", 
  },
  {
    imageUrl: "/assets/clients/pt-jatim-autocomp.png", 
  },
  {
    imageUrl: "/assets/clients/mitra-keluarga.png", 
  },
  {
    imageUrl: "/assets/clients/ihc-rs.png", 
  },
];

const Clients = () => {
  return (
    <>
      <div className="rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden mb-[8rem]">
        <h1 className="text-3xl uppercase tracking-wider mb-5 font-bold text-mainDarkBlue"
        style={{
          textShadow: '2px 4px 4px rgba(0, 0, 0, 0.3)', // Custom text shadow
        }}
        >KLIEN KAMI</h1>
        <hr  style={{
        width: '100px',
        height: '10px',
        marginBottom: '50px',
        backgroundColor: '#1D73BE',
        border: 'none', }} />
        <InfiniteMovingCards items={clients} direction="right" speed="normal" pauseOnHover={false} />
      </div>

      {/* Red Line */}
      {/* <hr  style={{
            width: '100%',
            height: '8px',
            marginTop: '3rem',
            backgroundColor: '#E00113',
            border: 'none', }} /> */}
    </>
  );
};

export default Clients;
