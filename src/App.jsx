import React, { useState } from 'react';


// --- Komponen Icon (menggunakan inline SVG) ---
const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const Zap = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);
// -------------------------------------------------------------------------

// --- Komponen Modal Reusable ---

// 1. Modal Tanggap Darurat (Merah - Zap)
const EmergencyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const procedures = [
        { step: 1, title: "Deteksi & Peringatan", detail: "Segera bunyikan alarm darurat dan beri tahu supervisor terdekat." },
        { step: 2, title: "Evakuasi Diri", detail: "Tinggalkan area bahaya dengan tenang menuju titik kumpul terdekat. Jangan gunakan lift." },
        { step: 3, title: "Titik Kumpul", detail: "Laporkan diri kepada koordinator evakuasi di titik kumpul untuk pendataan." },
        { step: 4, title: "Penanganan Medis", detail: "Bagi yang terluka, segera berikan pertolongan pertama sambil menunggu tim medis K3." },
    ];

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start mb-6 border-b pb-3">
                    <h2 className="text-2xl font-bold text-red-600 flex items-center">
                        <Zap className="w-7 h-7 mr-3 text-red-500" />
                        Prosedur Tanggap Darurat
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition duration-150"><X className="w-6 h-6"/></button>
                </div>
                <div className="space-y-6">
                    {procedures.map((p) => (
                        <div key={p.step} className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                            <span className="text-xl font-extrabold text-red-600 mr-4 mt-1">{p.step}.</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">{p.title}</h3>
                                <p className="text-sm text-gray-600">{p.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-4 border-t text-center">
                    <p className="text-sm font-medium text-gray-600 mb-2">Nomor Darurat Internal:</p>
                    <p className="text-2xl font-extrabold text-blue-700">119 (K3 Siantar Top)</p>
                </div>
            </div>
        </div>
    );
};

// 2. Modal Kebijakan Keselamatan (Hijau - Shield)
const PolicyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const policies = [
        { type: "Undang-Undang Pangan", title: "UU No. 18 Tahun 201", detail: "Mengatur mengenai ketersediaan, keterjangkauan, keamanan, mutu, gizi pangan, distribusi, serta tanggung jawab pemerintah dan produsen pangan." },
        { type: "Undang-Undang Kesehatan", title: "UU No. 36 Tahun 2009", detail: "Mengatur standar kesehatan, termasuk ketentuan mengenai keamanan makanan, minuman, serta penggunaan bahan tambahan pangan." },
        { type: "Undang-Undang Perlindungan Konsumen", title: "UU No. 8 Tahun 1999", detail: "Mengatur hak dan kewajiban konsumen serta pelaku usaha, termasuk kewajiban produsen mencantumkan label yang jelas pada produk pangan." },
        { type: "Undang-Undang Perdagangan", title: "UU  No. 7 Tahun 2014", detail: "Mengatur kegiatan distribusi dan perdagangan produk pangan, termasuk aspek impor dan ekspor." },
    ];

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start mb-6 border-b pb-3">
                    <h2 className="text-2xl font-bold text-emerald-600 flex items-center">
                        <Shield className="w-7 h-7 mr-3 text-emerald-500" />
                        Kebijakan & Regulasi K3
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition duration-150"><X className="w-6 h-6"/></button>
                </div>

                <p className="text-lg text-gray-700 mb-6 font-semibold text-center">
                    Hukum Undang-Undang Terkait Perusahaan Makanan
                </p>

                <div className="space-y-4">
                    {policies.map((p, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${p.type === "Perusahaan" ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                {p.type}
                            </span>
                            <h3 className="font-semibold text-gray-800 mt-2">{p.title}</h3>
                            <p className="text-sm text-gray-600">{p.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 3. Modal Edukasi & Pelatihan (Biru - Users)
const EducationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // --- Konten Baru dengan Ide K3 Perusahaan Pangan ---
    const trainings = [
        { 
          type: "Video", 
          title: "Dasar K3: Hygiene dan Sanitasi Pangan", 
          placeholder: "https://placehold.co/400x225/2563EB/FFFFFF?text=Video+K3+Pangan", 
          description: "Tutorial mengenai prosedur mencuci tangan, pemakaian APD di area sensitif, dan sanitasi peralatan untuk mencegah kontaminasi produk.",
          url: "http://www.youtube.com/watch?v=xziOgdo5a_I"
        },
        { 
          type: "Video", 
          title: "Penanganan Darurat: Simulasi Kebakaran", 
          placeholder: "https://placehold.co/400x225/FF6347/FFFFFF?text=Simulasi+Kebakaran+Pabrik", 
          description: "Pelatihan visual mengenai evakuasi, penggunaan APAR, dan prosedur titik kumpul jika terjadi kebakaran di area pabrik.",
          url: "http://www.youtube.com/watch?v=OO5w_GNqx08"
        },
    ];
    // ---------------------------------------------------


    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
                onClick={e => e.stopPropagation()} 
            >
                <div className="flex justify-between items-start mb-6 border-b pb-3">
                    <h2 className="text-2xl font-bold text-blue-600 flex items-center">
                        <Users className="w-7 h-7 mr-3 text-blue-500" />
                        Edukasi & Pelatihan K3
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition duration-150"><X className="w-6 h-6"/></button>
                </div>

                {/* Font dan Center disamakan dengan PolicyModal */}
                <p className="text-lg text-gray-700 mb-8 font-semibold text-center">
                    Akses materi pelatihan interaktif untuk meningkatkan kesadaran dan kompetensi K3.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trainings.map((t, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 overflow-hidden shadow-md">
                            {/* Jika ada URL video, kita bisa membuatnya clickable */}
                            <a href={t.url} target="_blank" rel="noopener noreferrer" className="block">
                              <img src={t.placeholder} alt={t.title} className="w-full h-auto object-cover hover:opacity-75 transition duration-300"/>
                            </a>
                            
                            <div className="p-4">
                                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                                    {t.type}
                                </span>
                                <h3 className="font-semibold text-gray-800 mt-2">{t.title}</h3>
                                <p className="text-sm text-gray-600">{t.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Komponen Container yang mengatur lebar maksimum konten
const Container = ({ children }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
    </div>
);

// Main Application Component
const App = () => {
  const [safetyMessage, setSafetyMessage] = useState("Keselamatan adalah Prioritas Kami.");
  
  // State untuk mengontrol setiap modal
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

  // Data untuk Area Fokus K3
  const focusAreas = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "UU Perusahaan Pangan",
      description: "Peraturan Hukum Undang-undang Perusahaan Pangan (Klik untuk melihat)",
      color: "bg-emerald-600 hover:bg-emerald-700",
      action: () => setIsPolicyModalOpen(true) // Membuka Modal Kebijakan
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Edukasi & Pelatihan",
      description: "Video Edukasi Pelatihan K3. (Klik untuk melihat)",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => setIsEducationModalOpen(true) // Membuka Modal Edukasi
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Tanggap Darurat",
      description: "Prosedur penanganan cepat dan efektif untuk kebakaran, bencana alam, dan kecelakaan kerja. (Klik untuk detail)",
      color: "bg-red-600 hover:bg-red-700",
      action: () => setIsEmergencyModalOpen(true) // Membuka Modal Tanggap Darurat
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter overflow-x-hidden">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-gray-900 shadow-xl w-full"> 
        <Container> 
          <div className="py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-emerald-400">
              K3 <span className="text-white">Siantar Top</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">Beranda</a>
              <a href="#pillars" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">Pilar K3</a>
              <a href="#commitment" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">Komitmen</a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">Kontak</a>
            </nav>
          </div>
        </Container>
      </header>

      {/* HERO SECTION - Diperbarui dengan Styling yang Lebih Rapi dan Berdampak */}
      <section id="home" className="bg-gray-900 text-white py-24 md:py-40 w-full shadow-2xl">
        <Container>
          <div className="text-center">
            {/* Ikon K3 yang lebih besar dan diberi warna aksen mencolok */}
            <Shield className="w-20 h-20 mx-auto mb-8 text-emerald-400 animate-bounce-slow" />
            
            {/* Judul utama: Font sangat tebal (extrabold) dengan ukuran besar dan tracking yang rapat */}
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-snug tracking-tight">
              Keselamatan Kerja, <span className="text-emerald-400">Kualitas Utama</span>
            </h1>
            
            {/* Sub-teks: Font lebih ringan (light) dan warna abu-abu terang untuk kontras yang nyaman */}
            <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto text-gray-300">
              Komitmen Siantar Top: Menciptakan lingkungan kerja yang aman, sehat, dan produktif bagi setiap insan.
            </p>
            
            {/* Call to Action (CTA): Tombol yang lebih besar, berbentuk persegi, dan menggunakan warna primer */}
            <a 
              href="#pillars" 
              className="inline-block px-12 py-4 bg-red-600 text-white font-bold rounded-lg text-xl shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105 ring-4 ring-red-400 ring-opacity-50"
            >
              Jelajahi Pilar K3 Kami
            </a>
          </div>
        </Container>
      </section>

      {/* PILLARS SECTION */}
      <section id="pillars" className="py-20 bg-white w-full">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Tiga Pilar Utama K3
          
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Kami membangun budaya keselamatan yang kuat melalui tiga fokus area inti yang berkelanjutan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                onClick={area.action} 
                className={`p-8 rounded-xl shadow-2xl ${area.color} text-white transition duration-500 ease-in-out cursor-pointer transform hover:scale-[1.02]`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">{area.title}</h3>
                <p className="text-center text-gray-100">{area.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COMMITMENT SECTION */}
      <section id="commitment" className="py-20 bg-blue-50 w-full">
        <Container>
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Komitmen Kami Terhadap Zero Accident
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Siantar Top bertekad mencapai nihil kecelakaan melalui investasi berkelanjutan pada teknologi, prosedur, dan sumber daya manusia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Audit Keselamatan Eksternal berkala.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tim K3 Reaktif dan Proaktif 24/7.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Pendekatan Teknologi untuk pemantauan risiko.</span>
                </li>
              </ul>
            </div>
            
            {/* Mock Statistics Card */}
            <div className="md:w-1/2 p-8 bg-blue-100 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-5xl font-extrabold text-blue-700">365+</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">Hari Kerja Tanpa Kecelakaan Berat</p>
                </div>
                <div>
                  <p className="text-5xl font-extrabold text-blue-700">100%</p>
                  <p className="text-sm font-medium text-gray-600 mt-1">Kepatuhan Terhadap Standar ISO 45001</p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* CALL TO ACTION / Safety Message Update */}
      <section className="bg-emerald-500 py-12 w-full">
        <Container>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Pesan Keselamatan Hari Ini
            </h3>
            <p className="text-xl text-gray-800 font-medium mb-6">{safetyMessage}</p>
            <button 
              onClick={() => setSafetyMessage("Waspada, Peduli, Selamat! Kita Jaga Bersama.")}
              className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
            >
              Pembaruan Pesan
            </button>
          </div>
        </Container>
      </section>


      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10 mt-auto w-full">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-4">Siantar Top</h4>
              <p className="text-sm">
                Divisi Kesehatan & Keselamatan Kerja (K3)
                <br/>
                Jl. Raya Jati, Sidoarjo, Jawa Timur
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Akses Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-emerald-400">Beranda</a></li>
                <li><a href="#pillars" className="hover:text-emerald-400">Pilar K3</a></li>
                <li><a href="#commitment" className="hover:text-emerald-400">Komitmen</a></li>
              </ul>
            </div>

            {/* K3 Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">K3 Sumber Daya</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Prosedur Keamanan</a></li>
                <li><a href="#" className="hover:text-emerald-400">Laporan Insiden</a></li>
                <li><a href="#" className="hover:text-emerald-400">Nomor Darurat</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <p className="text-sm">
                Email: k3@siantartop.com
                <br/>
                Telp Darurat: (031) 123-456
              </p>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Siantar Top K3 Division. All rights reserved.</p>
          </div>
        </Container>
      </footer>

      {/* RENDER SEMUA MODAL */}
      <EmergencyModal isOpen={isEmergencyModalOpen} onClose={() => setIsEmergencyModalOpen(false)} />
      <PolicyModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
      <EducationModal isOpen={isEducationModalOpen} onClose={() => setIsEducationModalOpen(false)} />
    </div>
  );
};

export default App;