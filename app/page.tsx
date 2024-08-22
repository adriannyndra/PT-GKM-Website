import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Clients from "@/components/Clients";
import Services from "@/components/Services";

import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <Hero />
        <Services />
        <Clients/>
      </div>

    </main>
  );
}
