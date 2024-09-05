import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import { Timeline } from "@/components/ui/timeline";

const data = [
    {
      title: "2024",
      content: (
        <div>
            {/* Item */}
            <p className="text-neutral-800  dark:text-mainDarkBlue  text-xs md:text-sm font-normal mb-2">
            <b>&#x2022; RSAI PUTRI</b>
          </p>
          <p className="text-neutral-800 dark:text-mainDarkBlue  text-xs md:text-sm font-normal mb-8">
            PENGURUSAN SLF & PEMBUATAN AS BUILT DRAWING
          </p>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
            
            {/* Item */}
          <p className="text-neutral-800  dark:text-neutral-800 text-xs md:text-sm font-normal mb-2">
            <b>&#x2022; RSAI PUTRI</b>
          </p>
          <p className="text-neutral-800 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
            PENGURUSAN SLF & PEMBUATAN AS BUILT DRAWING
          </p>
            {/* Item */}
          <p className="text-neutral-800  dark:text-neutral-800 text-xs md:text-sm font-normal mb-2">
            <b>&#x2022; PT. AKASHA WIRA INTERNASIONAL, TBK BOGOR</b>
          </p>
          <p className="text-neutral-800 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
            PENGURUSAN SLF & PEMBUATAN AS BUILT DRAWING
          </p>
            {/* Item */}
          <p className="text-neutral-800  dark:text-neutral-800 text-xs md:text-sm font-normal mb-2">
            <b>&#x2022; PT. AKASHA WIRA INTERNASIONAL, TBK BOGOR</b>
          </p>
          <p className="text-neutral-800 dark:text-neutral-800 text-xs md:text-sm font-normal mb-8">
            PENGURUSAN SLF & PEMBUATAN AS BUILT DRAWING
          </p>

          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
    {
        title: "2021",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Deployed 5 new components on Aceternity today
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Card grid component
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Startup template Aceternity
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Random file upload lol
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Himesh Reshammiya Music CD
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Salman Bhai Fan Club registrations open
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              
            </div>
          </div>
        ),
    },
    {
        title: "2020",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Deployed 5 new components on Aceternity today
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Card grid component
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Startup template Aceternity
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Random file upload lol
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Himesh Reshammiya Music CD
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Salman Bhai Fan Club registrations open
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              
            </div>
          </div>
        ),
    },
    {
        title: "2019",
        content: (
          <div>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Deployed 5 new components on Aceternity today
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Card grid component
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Startup template Aceternity
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Random file upload lol
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Himesh Reshammiya Music CD
              </div>
              <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                ✅ Salman Bhai Fan Club registrations open
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              
            </div>
          </div>
        ),
    },
  ];

export default function Portfolio() {
  return (
    <main>
      <ContactBar />
      <Navbar />
      <HeaderBreadcrumbs currentLocation="Portfolio" />
      
      {/* Image Section */}
      <div className="flex justify-center mt-16">
        <img src="/assets/header-portfolio.jpeg" alt="Portfolio Header" className="h-[180px]" />
      </div>

      {/* Content Section */}
      <div className="flex justify-center mt-8 mb-16">
        <div className="w-[1140px]">
          <Timeline data={data} />
        </div>
      </div>

      <Footer />
    </main>
  );
}