import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <Hero />
      </div>

    </main>
  );
}
