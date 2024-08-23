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
];

const Clients = () => {
  return (
    <>
      <div className="rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden mb-60">
        <h1 className="text-3xl uppercase tracking-wider mb-5 font-bold text-gray-700">KLIEN KAMI</h1>
        <hr  style={{
        width: '100px',
        height: '10px',
        marginBottom: '50px',
        backgroundColor: '#1D73BE',
        border: 'none', }} />
        <InfiniteMovingCards items={clients} direction="right" speed="fast" pauseOnHover={false} />
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
