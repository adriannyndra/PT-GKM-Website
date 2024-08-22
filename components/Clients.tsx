"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const clients = [
  {
    imageUrl: "/assets/clients/bca.png", // Add image URL
  },
  {
    imageUrl: "/assets/clients/samwon.png", // Add image URL
  },
];

const Clients = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col bg-white items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl uppercase tracking-wider mb-5 font-bold text-gray-700">KLIEN KAMI</h1>
      <InfiniteMovingCards items={clients} direction="right" speed="fast" pauseOnHover={false} />
    </div>
  );
};

export default Clients;
