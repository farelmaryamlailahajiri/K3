import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function AboutSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar dengan tombol kembali */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-red-600 hover:text-red-800 font-semibold transition duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
          
          <div className="flex items-center space-x-3">
            <img src="/assets/siantartop.png" alt="Siantar Top Logo" className="h-10 w-auto" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Tentang Siantar Top</h1>
          <p className="text-xl">Perjalanan Kami Sejak 1972</p>
        </div>
      </section>

      {/* Konten Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* IMAGE SLIDER */}
    <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="aboutContentSwiper"
        fadeEffect={{ crossFade: true }}
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src="/assets/tentangsiantartop.jpg" 
              alt="Siantar Top Company" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Gedung Kantor Pusat
              </h3>
              <p className="text-sm md:text-base">
                Fasilitas modern untuk operasional terbaik
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src="/assets/goriorio.jpg" 
              alt="Production Facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Area Produksi
              </h3>
              <p className="text-sm md:text-base">
                Teknologi terkini dengan standar internasional
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="relative h-[300px] md:h-[400px]">
            <img 
              src="/assets/dharmabakti.jpg" 
              alt="Quality Control" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Tim Profesional
              </h3>
              <p className="text-sm md:text-base">
                Komitmen pada kualitas dan keselamatan
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
          {/* Sejarah Perusahaan */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Sejarah Perusahaan</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              PT Siantar Top Tbk. didirikan pada tahun 1972 dan telah menjadi salah satu produsen makanan ringan terkemuka di Indonesia. Dengan pengalaman lebih dari 50 tahun, kami terus berinovasi untuk menghadirkan produk berkualitas tinggi.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Berawal dari usaha kecil di Pematang Siantar, Sumatera Utara, kini Siantar Top telah berkembang menjadi perusahaan besar yang produknya tersebar di seluruh Indonesia dan mancanegara.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Visi & Misi</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Visi</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan makanan ringan terdepan yang memberikan nilai terbaik bagi konsumen, karyawan, dan pemegang saham.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">Misi</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Menghasilkan produk berkualitas tinggi dengan standar internasional
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Berinovasi secara berkelanjutan untuk memenuhi kebutuhan pasar
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Memberikan pelayanan terbaik kepada konsumen
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  Menciptakan lingkungan kerja yang kondusif dan produktif
                </li>
              </ul>
            </div>
          </div>

          {/* Nilai-Nilai Perusahaan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Nilai-Nilai Perusahaan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Kualitas</h3>
                <p className="text-gray-600 text-sm">
                  Kami berkomitmen untuk selalu menghasilkan produk dengan standar kualitas tertinggi.
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Inovasi</h3>
                <p className="text-gray-600 text-sm">
                  Terus berinovasi untuk menciptakan produk yang sesuai dengan selera konsumen.
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Integritas</h3>
                <p className="text-gray-600 text-sm">
                  Menjalankan bisnis dengan jujur dan bertanggung jawab.
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <h3 className="text-lg font-semibold text-red-600 mb-2">Kepuasan Pelanggan</h3>
                <p className="text-gray-600 text-sm">
                  Mengutamakan kepuasan pelanggan dalam setiap aspek bisnis kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Siantar Top. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AboutSection;