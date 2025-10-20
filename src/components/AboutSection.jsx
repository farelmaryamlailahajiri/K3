import React from "react";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 max-w-6xl mx-auto gap-12 md:gap-16">
      
      {/* Gambar Perusahaan */}
      <div className="w-full md:w-1/2">
        <img
          src="/assets/company-profile-image.jpg" // DIGANTI: Gunakan path string, pastikan gambar ini ada
          alt="Area Pabrik Siantar Top"
          className="rounded-2xl shadow-2xl object-cover w-full h-96 transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 space-y-5">
        <p className="text-base font-bold text-red-600 uppercase tracking-wide">
          Profil Lengkap Perusahaan
        </p>
        <h1 className="text-4xl font-bold text-slate-800 leading-tight">
          Pelopor Inovasi Makanan Ringan Sejak 1972
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          <strong>PT Siantar Top Tbk.</strong> adalah salah satu pelopor industri
          makanan ringan di Indonesia. Sejak berdiri pada tahun 1972, kami
          terus berinovasi untuk menciptakan cita rasa yang digemari oleh
          semua kalangan, baik di dalam maupun luar negeri.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Dengan komitmen terhadap kualitas terbaik dan didukung teknologi
          modern, Siantar Top telah menjadi mitra terpercaya yang menghadirkan
          kebahagiaan melalui produk-produk berkualitas tinggi.
        </p>
        <a 
          href="https://www.siantartop.co.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg font-bold hover:bg-red-800 transition duration-300 transform hover:scale-105"
        >
          Kunjungi Website Utama
        </a>
      </div>
    </section>
  );
}