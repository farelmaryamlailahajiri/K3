import './index.css'
import React, { useState } from 'react';

// --- Komponen Icon ---
const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const Zap = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Users = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// --- Container ---
const Container = ({ children, full }) => (
  <div className={full ? "w-full px-0" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
    {children}
  </div>
);

// --- Main App ---
const App = () => {
  const [safetyMessage, setSafetyMessage] = useState("Keselamatan adalah Prioritas Kami.");

  const focusAreas = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Kebijakan Keselamatan",
      description: "Menerapkan standar dan prosedur K3 sesuai regulasi untuk menjamin lingkungan kerja yang aman.",
      color: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Edukasi & Pelatihan",
      description: "Memberikan pelatihan K3 rutin dan komprehensif kepada seluruh karyawan dan mitra kerja.",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Tanggap Darurat",
      description: "Prosedur penanganan cepat dan efektif untuk kebakaran, bencana alam, dan kecelakaan kerja.",
      color: "bg-red-600 hover:bg-red-700" 
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

      {/* HERO SECTION – full width */}
      <section id="home" className="bg-blue-700 text-white py-20 md:py-32 w-full">
        <Container full>
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-emerald-300"/>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Keselamatan Kerja, Kualitas Utama
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
              Komitmen Siantar Top: Menciptakan lingkungan kerja yang aman, sehat, dan produktif bagi setiap insan.
            </p>
            <a href="#pillars" className="inline-block px-8 py-3 bg-emerald-500 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-emerald-400 transition duration-300 transform hover:scale-105">
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
              <div key={index} className={`p-8 rounded-xl shadow-2xl ${area.color} text-white transition duration-500 ease-in-out`}>
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
            
            {/* Mock Stats */}
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

      {/* CTA SECTION */}
      <section className="bg-emerald-500 py-12 w-full">
        <Container full>
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
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-4">Siantar Top</h4>
              <p className="text-sm">
                Divisi Kesehatan & Keselamatan Kerja (K3)<br/>
                Jl. Raya Jati, Sidoarjo, Jawa Timur
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Akses Cepat</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-emerald-400">Beranda</a></li>
                <li><a href="#pillars" className="hover:text-emerald-400">Pilar K3</a></li>
                <li><a href="#commitment" className="hover:text-emerald-400">Komitmen</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">K3 Sumber Daya</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-emerald-400">Prosedur Keamanan</a></li>
                <li><a href="#" className="hover:text-emerald-400">Laporan Insiden</a></li>
                <li><a href="#" className="hover:text-emerald-400">Nomor Darurat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <p className="text-sm">
                Email: k3@siantartop.com<br/>
                Telp Darurat: (031) 123-456
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Siantar Top K3 Division. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default App;
