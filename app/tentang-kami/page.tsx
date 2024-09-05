import Navbar from "@/components/Navbar";
import ContactBar from "@/components/ContactBar";
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs";
import Footer from "@/components/Footer";

export default function TentangKami() {
  return (
    <main>

      <div>
        <ContactBar/>
        <Navbar />
        <HeaderBreadcrumbs currentLocation="Tentang Kami"/>        
        <div className="flex justify-center mt-16 mb-16">

          {/* Content */}
          <div className="w-[1140px] mb-[10%]">

            {/* Tentang Kami */}
            <div className="flex">
              {/* Text */}
              <div className="w-[50%] pr-10">
                <div className="border-l-4 border-mainRed pl-4">
                  <span className="text-sm text-[#70757a] font-medium">PT. GRAHASINDO KARYA MANDIRI</span>
                  <h1 className="text-4xl font-bold text-mainDarkBlue  mt-2">TENTANG KAMI</h1>             
                </div>

                <p className="italic font-semibold text-2xl mt-4">
                    "Menjadi yang terpercaya dan terdepan di Indonesia"
                  </p>

                <p className="mt-4 text-sm leading-relaxed">
                  <b>PT. GRAHASINDO KARYA MANDIRI</b> berkembang dengan dukungan tenaga ahli yang terkemuka dan berkualitas. Kami telah berhasil melaksanakan berbagai proyek, baik yang terintegrasi maupun yang terdiri dari berbagai disiplin ilmu, selalu menunjukkan kesediaan untuk berkolaborasi dalam tugas-tugas profesional, baik dari pihak pemerintah maupun swasta lainnya.
                </p>
                <p className="mt-4 text-sm leading-relaxed">
                  Kami mengkhususkan diri dalam jasa Konsultasi Teknik dan Manajemen. Mereka menawarkan bantuan dan layanan dalam berbagai kegiatan yang berkaitan dengan Perencanaan Umum, Studi Kelayakan, Perencanaan Teknik, Amdal, Pengawasan Teknik, serta Jasa Penilaian Perawatan dan Kelayakan Bangunan.
                </p>
              </div>
              {/* Image */}
              <div className="w-[50%] flex justify-center">
                <img src="/assets/about-us/about-us.png" alt="About Us" className="h-auto w-full rounded-lg" />
              </div>
            </div>

            {/* Visi & Misi */}
            <div className="flex justify-center">
            <hr  style={{
              width: '800px',
              height: '10px',
              marginTop: '190px',
              backgroundColor: '#0C2D4C', // Main Dark Blue
              // backgroundColor: '#1D73BE', // Main Light Blue
              border: 'none', }} />
            </div>

            <div className="flex justify-center">
              <img src="/assets/about-us/visi-misi.png" alt="visi-misi" className="mt-[90px] w-[1000px]" />
            </div>

          </div>


        </div>
      <Footer />

      </div>

    </main>
  );
}
