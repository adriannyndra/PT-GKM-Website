
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Footer from "@/components/Footer";




export default function TentangKami() {
    return (
      <main>
        <ContactBar/>
        <Navbar />
        <HeaderBreadcrumbs currentLocation="Layanan"/>   
        <div className="flex justify-center mt-16 mb-16">

          {/* Content */}
          <div className="w-[1140px] mb-[10%]">

          </div>

        </div>
        <Footer />
      </main>
    );
  }