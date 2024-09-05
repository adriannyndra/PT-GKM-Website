"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./ui/use-outside-click";

export function ServicesNew() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-mainLightBlue sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    {/* <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p> */}
                  </div>

                  {/* <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-200 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    <div className="flex flex-col items-center justify-center mb-[5rem] overflow-hidden">
        <h1 className="text-3xl uppercase tracking-wider mb-5 font-bold text-mainDarkBlue"
        style={{
            textShadow: '2px 4px 4px rgba(0, 0, 0, 0.3)', // Custom text shadow
          }}
          >
            Layanan Kami
        </h1>

        <hr  style={{
        width: '100px',
        height: '10px',
        // marginBottom: '50px',
        backgroundColor: '#1D73BE',
        border: 'none', }} />
    </div>

      {/* Cards */}
      <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-[120px]">
        {cards.map((card, index) => (
            <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-[rgba(0,89,255,0.22)] rounded-xl cursor-pointer"
            style={{ minHeight: "300px", minWidth: "200px" }}  // Set fixed size
    >
      <div className="flex gap-4 flex-col w-full h-full p-2"
    //   style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      >
        <motion.div layoutId={`image-${card.title}-${id}`}>
          <Image
            width={300}  // Increase the width
            height={300}  // Increase the height
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-2xl object-cover object-top"
          />
        </motion.div>
        <div className="flex justify-center items-center flex-col" >
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-neutral-800 dark:text-neutral-800 text-center md:text-left text-base"
          >
            <b>{card.title}</b>
          </motion.h3>
          {/* <motion.p
            layoutId={`description-${card.description}-${id}`}
            className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
          >
            {card.description}
          </motion.p> */}
        </div>
      </div>
    </motion.div>
  ))}
</ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
    {
      title: "Konsultan PBG",
      src: "/assets/services/konsultan-pbg.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan PBG menawarkan layanan ahli dalam perencanaan dan evaluasi bangunan untuk memastikan kepatuhan terhadap peraturan pemerintah. Tim profesional kami membantu memperlancar proses perizinan.
          </p>
        );
      },
    },
    {
      title: "Konsultan SLF",
      src: "/assets/services/konsultan-slf.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan SLF memberikan dukungan dalam pengelolaan izin pemanfaatan bangunan. Para ahli kami membantu mendapatkan sertifikat kelaikan fungsi bangunan untuk memastikan keamanan dan kepatuhan.
          </p>
        );
      },
    },
    {
      title: "Konsultan Bangunan",
      src: "/assets/services/konsultan-bangunan.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Bangunan berspesialisasi dalam perancangan, perencanaan, dan pengawasan proyek konstruksi. Kami memastikan bangunan aman, fungsional, dan memenuhi kebutuhan klien.
          </p>
        );
      },
    },
    {
      title: "Konsultan Pemetaan",
      src: "/assets/services/konsultan-pemetaan.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Pemetaan menawarkan layanan pemetaan topografi dan data spasial. Kami menyediakan solusi pemetaan dengan akurasi tinggi yang penting untuk perencanaan kota dan proyek konstruksi.
          </p>
        );
      },
    },
    {
      title: "Konsultan Andalalin",
      src: "/assets/services/konsultan-andalalin.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Andalalin menyediakan layanan untuk mengevaluasi dan mengelola kajian dampak lalu lintas. Tim kami membantu memastikan proyek memenuhi peraturan lalu lintas dan mengoptimalkan penggunaan jalan.
          </p>
        );
      },
    },
    {
      title: "Konsultan Lingkungan",
      src: "/assets/services/konsultan-lingkungan.png",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Lingkungan menawarkan layanan analisis dampak lingkungan dan pengelolaan. Kami membantu bisnis mematuhi peraturan lingkungan dan mendorong pembangunan berkelanjutan.
          </p>
        );
      },
    },
    {
      title: "Konsultan Struktur",
      src: "/assets/services/konsultan-struktur.jpg",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Struktur berspesialisasi dalam desain dan analisis struktur untuk proyek konstruksi. Kami memastikan kekuatan dan stabilitas bangunan sambil mengoptimalkan penggunaan material.
          </p>
        );
      },
    },
    {
      title: "Konsultan Perencanaan",
      src: "/assets/services/konsultan-perencanaan.jpg",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Perencanaan menawarkan layanan perencanaan komprehensif untuk proyek konstruksi dan infrastruktur. Kami membantu klien mengembangkan desain yang efisien dan hemat biaya.
          </p>
        );
      },
    },
    {
      title: "Konsultan Pengawasan",
      src: "/assets/default.jpg",
      ctaText: "Selengkapnya",
      ctaLink: "https://stripe.com",
      content: () => {
        return (
          <p>
            Konsultan Manajemen Konstruksi menyediakan layanan pengawasan dan manajemen proyek. Kami mengawasi proyek konstruksi dari awal hingga selesai, memastikan kualitas dan penyelesaian tepat waktu.
          </p>
        );
      },
    },
  ];
  
