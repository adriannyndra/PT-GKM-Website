import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TentangKami() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <Breadcrumbs/>
      </div>

    </main>
  );
}
