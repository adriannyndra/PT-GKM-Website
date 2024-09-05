
import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Footer from "@/components/Footer";



export default function Karir() {
    return (
      <main>
        <ContactBar/>
        <Navbar />
        <HeaderBreadcrumbs currentLocation="Karir"/>   
        <div className="flex justify-center mt-16 mb-16">

          {/* Content */}
          <div className="w-[1140px] mb-[10%]">

          </div>

        </div>
        <Footer />
      </main>
    );
  }