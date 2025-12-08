// src/components/Sections.jsx

import React, { useState } from "react";
// Import Swiper & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import Custom Components/Layouts
import { Container } from "./Layouts";
import AboutSection from "./AboutSection";
// src/components/Sections.jsx
import ManagementSection from "./ManajemenSection";
import { Shield, EnvironmentBuilding, Users, HardHat, FileText, Zap, Plus, AlertTriangle, CheckCircle, ShieldCheckIcon, InfoIcon } from "./Icons";

// -----------------------------------------------------------
// A. MAIN CONTENT SECTIONS
// -----------------------------------------------------------

// HERO SECTION (Carousel) - Cleaner Design
export const HeroSection = () => (
  <section id="home" className="relative w-full overflow-hidden">
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      effect="fade"
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      className="w-full"
      fadeEffect={{ crossFade: true }}
    >
      {/* SLIDE 1 */}
      <SwiperSlide>
        <div className="relative h-[90vh] min-h-[600px] flex items-center">
          {/* Background dengan overlay gradient */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/tentangsiantartop.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>
          
          <Container>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Keselamatan & Kesehatan Kerja</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Keselamatan Kerja,
                <span className="block text-emerald-400 mt-3">Kualitas Utama</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
                Komitmen kami menciptakan lingkungan kerja yang aman, sehat, dan produktif bagi setiap insan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pillars" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                  Jelajahi Pilar K3
                </a>
                <a href="#about" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Tentang Kami
                </a>
              </div>
            </div>
          </Container>
        </div>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide>
        <div className="relative h-[90vh] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/goriorio.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>
          
          <Container>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
                <EnvironmentBuilding className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Lingkungan Kerja</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Lingkungan Aman,
                <span className="block text-amber-400 mt-3">Produktivitas Optimal</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
                Sistem K3 terstandar memastikan setiap langkah kerja penuh kehati-hatian dan tanggung jawab.
              </p>
              
              <a href="#report" className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 text-gray-900 font-semibold rounded-xl hover:bg-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25">
                Laporkan Kondisi Berbahaya
              </a>
            </div>
          </Container>
        </div>
      </SwiperSlide>

      {/* SLIDE 3 */}
      <SwiperSlide>
        <div className="relative h-[90vh] min-h-[600px] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/dharmabakti.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>
          
          <Container>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
                <Users className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">Budaya Keselamatan</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Bersama Membangun
                <span className="block text-blue-400 mt-3">Budaya Keselamatan</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
                Partisipasi aktif seluruh karyawan sebagai fondasi lingkungan kerja yang selamat dan berkualitas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Hubungi Tim K3
                </a>
                <a href="#management" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                  Lihat Struktur K3
                </a>
              </div>
            </div>
          </Container>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
);

// ABOUT SECTION
export const ProfileSection = AboutSection;

// PILLARS SECTION - Clean Grid Design
export const PillarsSection = ({ focusAreas }) => (
  <section id="pillars" className="py-24 bg-gradient-to-b from-white to-gray-50 w-full">
    <Container>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
          Lima Pilar Utama
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Pilar Keselamatan <span className="text-emerald-600">K3</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Fondasi budaya keselamatan yang kuat melalui lima fokus area inti berkelanjutan.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {focusAreas.map((area, index) => (
          <div
            key={index}
            onClick={area.action}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 overflow-hidden"
          >
            {/* Gradient Background Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${area.color.replace('bg-', 'bg-gradient-to-br from-')}`}></div>
            
            {/* Icon */}
            <div className={`relative z-10 inline-flex p-4 rounded-2xl ${area.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <div className="w-8 h-8">
                {area.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              {area.title}
            </h3>
            <p className="relative z-10 text-gray-600 leading-relaxed mb-6">
              {area.description}
            </p>
            
            {/* Hover Indicator */}
            <div className="relative z-10 flex items-center text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Selengkapnya</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// MANAJEMEN SECTION - Updated with soft colors
export const ManajemenSection = ({ managementData }) => (
  <section id="manajemen" className="py-24 bg-white w-full">
    <Container>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          Struktur & Dokumen
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Manajemen <span className="text-emerald-600">K3</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Sistem dan struktur yang mendukung implementasi K3 secara efektif di seluruh operasi.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managementData.map((item, index) => (
          <div
            key={index}
            onClick={item.action}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
          >
            {/* Soft Background */}
            <div className={`absolute inset-0 rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 ${getSoftColor(index)}`}></div>
            
            {/* Icon Container */}
            <div className={`relative z-10 inline-flex p-4 rounded-2xl ${getSoftIconBg(index)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <div className={`w-8 h-8 ${getIconColor(index)}`}>
                {item.icon}
              </div>
            </div>
            
            {/* Content */}
            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
              {item.title}
            </h3>
            <p className="relative z-10 text-gray-600 leading-relaxed mb-6">
              {item.description}
            </p>
            
            {/* Hover Indicator */}
            <div className="relative z-10 flex items-center text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span>Buka</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

// Helper functions for soft colors
const getSoftColor = (index) => {
  const colors = [
    'bg-emerald-100',
    'bg-blue-100',
    'bg-amber-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-cyan-100'
  ];
  return colors[index % colors.length];
};

const getSoftIconBg = (index) => {
  const colors = [
    'bg-emerald-100',
    'bg-blue-100',
    'bg-amber-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-cyan-100'
  ];
  return colors[index % colors.length];
};

const getIconColor = (index) => {
  const colors = [
    'text-emerald-600',
    'text-blue-600',
    'text-amber-600',
    'text-purple-600',
    'text-pink-600',
    'text-cyan-600'
  ];
  return colors[index % colors.length];
};

// ManagementSection Component
export const ManagementSectionComponent = ({ managementData }) => (
  <ManajemenSection managementData={managementData} />
);

// REPORT VIOLATION SECTION - Clean CTA Design
export const ReportViolationCTA = ({ action }) => (
  <section id="report" className="py-16 w-full">
    <Container>
      {/* Perubahan di sini: Mengganti gradient menjadi kuning soft */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-50 to-amber-100 p-8 md:p-12 border border-yellow-200">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            // Mengganti warna pattern menjadi abu-abu muda agar cocok dengan background kuning
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Menyesuaikan warna background badge agar lebih serasi */}
          <div className="inline-flex items-center gap-2 bg-yellow-300/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-yellow-400">
            {/* Mengganti warna icon menjadi kuning gelap/cokelat */}
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            {/* Mengganti warna teks badge */}
            <span className="text-sm font-semibold text-amber-700">Layanan Anonim</span>
          </div>
          
          {/* Mengganti warna heading menjadi kuning gelap/hitam */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Laporkan Pelanggaran K3
          </h3>
          {/* Mengganti warna paragraf menjadi kuning gelap/abu-abu */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Jadilah mata dan telinga kami. Laporkan segera kondisi berbahaya dengan identitas dijamin <strong>RAHASIA</strong>.
          </p>
          
          {/* Warna button tetap putih/abu-abu terang agar kontras */}
          <button
            onClick={action}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl"
          >
            <AlertTriangle className="w-6 h-6" />
            <span>Kirim Laporan Sekarang</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          {/* Mengganti warna teks kecil */}
          <p className="mt-6 text-sm text-gray-500">
            Respon cepat 24 jam • Terjamin kerahasiaan • Proses transparan
          </p>
        </div>
      </div>
    </Container>
  </section>
);

// COMMITMENT SECTION - Clean Statistics Design
export const CommitmentSection = () => (
  <section id="commitment" className="py-24 bg-gradient-to-b from-gray-50 to-white w-full">
    <Container>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
            Komitmen Kami
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Menuju <span className="text-emerald-600">Zero Accident</span> di Setiap Operasi
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Siantar Top bertekad mencapai nihil kecelakaan melalui investasi berkelanjutan pada teknologi, prosedur, dan pengembangan sumber daya manusia.
          </p>
          
          <ul className="space-y-6">
            {[
              "Audit Keselamatan Eksternal berkala",
              "Tim K3 Reaktif dan Proaktif 24/7",
              "Pendekatan Teknologi untuk pemantauan risiko",
              "Pelatihan K3 berkelanjutan untuk semua level",
              "Sistem pelaporan insiden yang transparan"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Statistics Card */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-3">365+</div>
              <p className="text-sm font-medium text-gray-600">
                Hari Kerja Tanpa Kecelakaan Berat
              </p>
              <div className="mt-4 h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-emerald-600 mb-3">100%</div>
              <p className="text-sm font-medium text-gray-600">
                Kepatuhan Standar ISO 45001
              </p>
              <div className="mt-4 h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium opacity-90">Target 2025</p>
                <p className="text-xl font-bold">Zero Accident di Semua Area Produksi</p>
              </div>
            </div>
            <div className="h-2 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// SAFETY MESSAGE SECTION - Clean Interactive Design
export const SafetyMessageSection = () => {
  const safetyMessages = [
    "Keselamatan adalah tanggung jawab bersama. Mari kita jaga satu sama lain!",
    "Waspada, Peduli, Selamat! Kita Jaga Bersama.",
    "Gunakan APD dengan benar, lindungi diri Anda setiap saat!",
    "Kecelakaan dapat dicegah dengan kehati-hatian dan disiplin.",
    "Keselamatan kerja bukan pilihan, tapi keharusan!",
    "Periksa peralatan sebelum bekerja. Pastikan semuanya aman!",
    "Laporkan kondisi berbahaya segera. Keselamatan adalah prioritas!",
    "Bekerja dengan aman hari ini, pulang dengan selamat untuk keluarga.",
    "Ingat! Tidak ada pekerjaan yang lebih penting dari keselamatan Anda.",
    "Budaya K3 dimulai dari Anda. Jadilah teladan keselamatan!",
  ];

  const [safetyMessage, setSafetyMessage] = useState(safetyMessages[0]);

  const getRandomMessage = () => {
    const currentMessage = safetyMessage;
    let newMessage;
    do {
      const randomIndex = Math.floor(Math.random() * safetyMessages.length);
      newMessage = safetyMessages[randomIndex];
    } while (newMessage === currentMessage);
    setSafetyMessage(newMessage);
  };

  return (
    <section className="py-24 w-full bg-gradient-to-br from-emerald-50 to-teal-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold mb-4">
              <InfoIcon className="w-4 h-4" />
              Pesan Harian
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pesan Keselamatan <span className="text-emerald-600">Hari Ini</span>
            </h3>
            <p className="text-gray-600">Inspirasi untuk bekerja dengan lebih aman</p>
          </div>
          
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-emerald-100">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <ShieldCheckIcon className="w-12 h-12 text-emerald-500 bg-white p-2 rounded-full border border-emerald-100" />
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-emerald-600">Update terbaru</span>
              </div>
              
              <div className="relative">
                <svg className="absolute left-0 top-0 w-8 h-8 text-emerald-100 transform -translate-x-2 -translate-y-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5z" />
                </svg>
                <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed px-4">
                  "{safetyMessage}"
                </p>
                <svg className="absolute right-0 bottom-0 w-8 h-8 text-emerald-100 transform translate-x-2 translate-y-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16 29C9.373 29 4 23.627 4 17S9.373 5 16 5s12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10S21.523 7 16 7 6 11.477 6 17s4.477 10 10 10z" />
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={getRandomMessage}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Pesan Keselamatan Lainnya
              </button>
              
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-emerald-200 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Bagikan Pesan
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// -----------------------------------------------------------
// B. CLEAN MODALS for Future Management Features
// -----------------------------------------------------------

// Clean Modal Component
const BaseModal = ({ isOpen, onClose, title, children, maxWidth = "max-w-xl" }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative bg-white rounded-2xl shadow-2xl w-full ${maxWidth} animate-fadeIn`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">{children}</div>
        
        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// SMK3 Modal
const smk3Docs = [
  { label: "Prosedur K3", href: "/pdf/prosedur-k3.pdf" },
  { label: "Instruksi Kerja", href: "/pdf/instruksi-kerja-k3.pdf" },
  { label: "Formulir Insiden", href: "/pdf/formulir-insiden-k3.pdf" },
  // Sertifikasi: belum ada PDF → biarkan tanpa href
  { label: "Sertifikasi", href: null },
];

export const SMK3Modal = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="Dokumen SMK3 (ISO 45001)">
    <div className="space-y-4">
      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
        <p className="text-emerald-700">
          Placeholder untuk menampilkan dokumen panduan Sistem Manajemen K3 (SMK3).
          Akan terisi di pengembangan selanjutnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {smk3Docs.map((doc, idx) => {
          const CardContent = (
            <div className="p-4 border border-gray-200 rounded-xl hover:border-emerald-300 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-900">{doc.label}</span>
              </div>
              {doc.href && (
                <p className="mt-2 text-sm text-emerald-700">
                  Klik untuk membuka dokumen PDF.
                </p>
              )}
              {!doc.href && (
                <p className="mt-2 text-sm text-gray-500">
                  Dokumen sertifikasi akan ditambahkan kemudian.
                </p>
              )}
            </div>
          );

          // Jika ada href → bungkus dengan <a>, kalau tidak cukup <div> biasa
          return doc.href ? (
            <a
              key={idx}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {CardContent}
            </a>
          ) : (
            <div key={idx}>{CardContent}</div>
          );
        })}
      </div>
    </div>
  </BaseModal>
);


// Risk Management Modal
export const RiskManagementModal = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="Manajemen Risiko (HIRADC)">
    <div className="space-y-4">
      <p className="text-gray-600">
        Placeholder untuk menampilkan matriks HIRADC (Hazard Identification, Risk Assessment, and Determining Controls).
        Akan terisi di pengembangan selanjutnya.
      </p>
      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
        <h4 className="font-semibold text-gray-900 mb-2">Komponen HIRADC:</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>Identifikasi Bahaya</li>
          <li>Penilaian Risiko</li>
          <li>Penentuan Kontrol</li>
          <li>Monitoring dan Review</li>
        </ul>
      </div>
    </div>
  </BaseModal>
);


// -----------------------------------------------------------
// C. ORGANIZATIONAL CHART MODAL - Clean Diagram Design
// -----------------------------------------------------------
// Ubah ukuran min-w, max-w, dan min-h, serta padding di OrgCard
const OrgCard = ({ title, type = "default" }) => {
  const styles = {
    default: "bg-white border-gray-300 text-gray-800",
    secondary: "bg-gray-50 border-gray-200 text-gray-600",
  };

  return (
    <div className={`
      relative z-10 px-2 py-2 rounded-lg border-2 text-center
      flex items-center justify-center w-[160px] h-[60px]
      shadow-sm hover:shadow-md transition-all duration-300 
      text-[11px] leading-tight font-semibold select-none
      ${styles[type] || styles.default}
    `}>
      {title}
    </div>
  );
};

// Garis Vertikal Standar
const VLine = ({ height = "h-6" }) => (
  <div className={`w-0.5 bg-gray-400 mx-auto ${height}`}></div>
);

export const OrgChartModal = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Struktur Organisasi K3" maxWidth="max-w-4xl">
      <div className="w-full overflow-x-auto overflow-y-auto max-h-[65vh] p-4 bg-gray-50 rounded-xl border border-gray-100 custom-scrollbar">
        
        {/* Wrapper Utama */}
        <div className="min-w-[600px] flex flex-col items-center py-2 pb-8 origin-top scale-95">
          
          {/* LEVEL 1: Dewan Komisaris */}
          <div className="flex flex-col items-center">
            <OrgCard title="Dewan Komisaris"/>
            <VLine height="h-6" />
          </div>

          {/* LEVEL 2: 3 Direksi */}
          {/* Container relative untuk garis penghubung */}
          <div className="relative flex justify-center gap-6 pt-4">
             {/* Garis Horizontal Penghubung Utama (Top) */}
             <div className="absolute top-0 left-[80px] right-[80px] h-0.5 bg-gray-400"></div>
             {/* Konektor Vertikal dari Level 1 (Top Center) */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>

             {/* Item Kiri */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Direktur Operasional" />
             </div>

             {/* Item Tengah */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Direktur Utama PT. Siantar Top" />
                <VLine height="h-8" />
             </div>

             {/* Item Kanan */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Manajer P2K3" />
                <VLine height="h-8" />
             </div>
          </div>

          {/* LEVEL 3: Manajer K3 & Sekretaris */}
          <div className="flex justify-center gap-6 w-full -mt-2 relative">
             {/* Placeholder Kiri agar Manajer K3 tetap di tengah (bawah Dirut) */}
             <div className="w-[160px]"></div>

             {/* Tengah: Manajer K3 */}
             <div className="flex flex-col items-center relative">
                <OrgCard title="Manajer K3" />
                <VLine height="h-8" />
                
                {/* Garis Horizontal ke Kanan (Sekretaris) */}
                {/* Posisi: Start dari tengah box Manajer K3, panjang sampai tengah box Sekretaris */}
                <div className="absolute top-[30px] left-1/2 w-[calc(100%+24px)] h-0.5 bg-gray-400 -z-10"></div>
             </div>

             {/* Kanan: Sekretaris */}
             <div className="flex flex-col items-center">
                <OrgCard title="Sekretaris P2K3" />
             </div>
          </div>

          {/* LEVEL 4: 3 Koordinator */}
          <div className="relative flex justify-center gap-6 pt-4">
             {/* GARIS PENGHUBUNG ATAS (Bracket Naik ke Manajer K3) */}
             {/* Garis horizontal melintasi 3 koordinator */}
             <div className="absolute top-0 left-[80px] right-[80px] h-0.5 bg-gray-400"></div>
             {/* Garis vertikal naik ke Manajer K3 */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>

             {/* Koord 1 */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Koordinator Operasi & Teknisi K3" />
                <div className="h-6 w-0.5 bg-gray-400"></div>
             </div>

             {/* Koord 2 */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Koordinator Kepatuhan & Admin K3" />
                <div className="h-6 w-0.5 bg-gray-400"></div>
             </div>

             {/* Koord 3 */}
             <div className="flex flex-col items-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-gray-400"></div>
                <OrgCard title="Koordinator Kesehatan & Pelatihan K3" />
                <div className="h-6 w-0.5 bg-gray-400"></div>
             </div>

             {/* GARIS PENGHUBUNG BAWAH (Bracket Turun ke Supervisor) */}
             <div className="absolute bottom-0 left-[80px] right-[80px] h-0.5 bg-gray-400"></div>
          </div>

          {/* LEVEL 5: Supervisor */}
          <div className="flex flex-col items-center">
             <div className="h-6 w-0.5 bg-gray-400"></div>
             <OrgCard title="Supervisor Departemen Lini" />
             <VLine height="h-6" />
          </div>

          {/* LEVEL 6: Karyawan */}
          <div className="flex flex-col items-center">
             <OrgCard title="Karyawan Lini Depan" type="secondary" />
          </div>

        </div>
      </div>
      <p className="text-center text-sm text-gray-500">Geser ke kiri/kanan untuk melihat seluruh struktur organisasi.</p>
    </BaseModal>
  );
};



// Blueprint Modal
export const BlueprintModal = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="Denah Perusahaan & Evakuasi" maxWidth="max-w-4xl">
    <div className="space-y-4">
      <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          {["APAR", "Titik Kumpul", "Jalur Evakuasi", "P3K", "Exit", "Assembly Point"].map((item, idx) => (
            <div key={idx} className="p-3 bg-white rounded-lg">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-500 text-center">
        Placeholder untuk menempatkan Denah Perusahaan yang menunjukkan lokasi APAR, titik kumpul, dan jalur evakuasi.
      </p>
    </div>
  </BaseModal>
);

// Audit File Modal
export const AuditFileModal = ({ isOpen, onClose }) => (
  <BaseModal isOpen={isOpen} onClose={onClose} title="File Audit & Sertifikasi K3">
    <div className="space-y-4">
      <p className="text-gray-600">
        Placeholder untuk menampilkan dokumen K3 terbaru.
      </p>
      <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Dokumen Tersedia:</h4>
            <p className="text-sm text-gray-600">Lampiran Hasil Audit K3</p>
          </div>
        </div>
        <div className="space-y-2">
          <a 
            href="/pdf/Lampiran Hasil Audit K3 2025.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="font-medium text-gray-900 block">Lampiran Hasil Audit K3</span>
                <span className="text-xs text-gray-500">PDF • 2.4 MB</span>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Lihat PDF →
            </button>
          </a>
        </div>
      </div>
    </div>
  </BaseModal>
);

// Add CSS animation for modals
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);