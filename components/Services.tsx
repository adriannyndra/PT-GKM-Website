'use client'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
  {
    title: "Konsultan PBG",
    imageUrl:
      "/assets/services/konsultan-pbg.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan SLF",
    imageUrl:
    "/assets/services/konsultan-slf.png",
    link: "https://stripe.com",
  },
  {
    title: "Konsultan Bangunan",
    imageUrl:
      "/assets/services/konsultan-bangunan.png",
    link: "https://stripe.com",
  },
  // {
  //   title: "Konsultan Pemetaan",
  //   imageUrl:
  //     "/assets/default.jpg",
  //   link: "https://stripe.com",
  // },
  {
    title: "Konsultan Andalalin",
    imageUrl:
    "/assets/services/konsultan-andalalin.png",
    link: "https://stripe.com",
  },
  // {
  //   title: "Konsultan Lingkungan",
  //   imageUrl:
  //   "/assets/default.jpg",
  //   link: "https://stripe.com",
  // },
  {
    title: "Konsultan Struktur",
    imageUrl:
    "/assets/services/konsultan-struktur.jpg",
    link: "https://stripe.com",
  },
  // {
  //   title: "Konsultan Perencanaan",
  //   imageUrl:
  //   "/assets/default.jpg",
  //   link: "https://stripe.com",
  // },
  // {
  //   title: "Konsultan Manajemen Konstruksi / Pengawasan",
  //   imageUrl:
  //   "/assets/default.jpg",
  //   link: "https://stripe.com",
  // },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-[5rem] overflow-hidden">
        <h1 className="text-3xl uppercase tracking-wider mb-5 font-bold text-gray-700">Layanan Kami</h1>
        <hr  style={{
        width: '100px',
        height: '10px',
        // marginBottom: '50px',
        backgroundColor: '#1D73BE',
        border: 'none', }} />
        {/* <p className="w-[40rem] text-center text-gray-700 tracking-wider">Kami adalah perusahaan yang bergerak di bidang Konsultasi Perizinan Bangunan. Dengan komitmen tinggi terhadap profesionalisme, kami selalu berupaya memberikan hasil terbaik kepada setiap klien. Berikut adalah jenis layanan yang kami tawarkan:</p> */}
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
    </div>
  )
}

export default Services