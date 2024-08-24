import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PortfolioCount from "@/components/PortfolioCount";



import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <Hero />
        <Services />
        <PortfolioCount />

        {/* Keunggulan Kami */}
        <div className="flex flex-col items-center justify-center mb-[4rem] overflow-hidden">
          <h1 className="text-3xl uppercase tracking-wider mb-5 font-bold text-gray-700">KEUNGGULAN KAMI</h1>
          <hr  style={{
            width: '100px',
            height: '10px',
            // marginBottom: '50px',
            backgroundColor: '#1D73BE',
            border: 'none', }} />
          <img src="/assets/keunggulan-bg.jpeg" alt="keunggulan" className="rounded-[80px]" />
          {/* <hr  style={{
            width: '100%',
            height: '8px',
            // marginTop: '5px',
            backgroundColor: '#E00113',
            border: 'none', }} /> */}
        </div>

        <Clients/>
        <Footer />
      </div>

    </main>
  );
}
