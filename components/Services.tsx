'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
      "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-[10rem] overflow-hidden">
        <h1 className="text-2xl uppercase tracking-wider mb-5 font-bold text-gray-700">Layanan Kami</h1>
        {/* <p className="w-[40rem] text-center">Kami adalah perusahaan yang bergerak di bidang Konsultasi Perizinan Bangunan. Dengan komitmen tinggi terhadap profesionalisme, kami selalu berupaya memberikan hasil terbaik kepada setiap klien. Berikut adalah jenis layanan yang kami tawarkan:</p> */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
    </div>
  )
}

export default Services