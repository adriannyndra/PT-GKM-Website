
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Footer from "@/components/Footer";




export default function Kontak() {
    return (
      <main>
        <ContactBar/>
        <Navbar />
        <HeaderBreadcrumbs currentLocation="Kontak"/>   
        <div className="flex justify-center mt-16 mb-16">

          {/* Content */}
          <div className="w-[1140px] mb-[10%]">

          </div>

        </div>
        <Footer />
      </main>
    );
  }