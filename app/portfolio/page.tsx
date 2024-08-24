import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";




import Image from "next/image";

export default function Home() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <HeaderBreadcrumbs currentLocation="Portfolio"/>        
        <div className="flex justify-center mt-16 mb-16">

            {/* Content */}
            <div className="w-[1140px] mb-[10%]">

            </div>

        </div>
        <Footer />
      </div>

    </main>
  );
}
