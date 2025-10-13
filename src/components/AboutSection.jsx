import React from "react";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 max-w-6xl mx-auto gap-10">
      {/* Gambar perusahaan */}
      <div className="w-full md:w-1/2">
        <img
          src={companyImage}
          alt="Perusahaan Siantartop"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl font-bold text-blue-700">
          Tentang Perusahaan Siantartop
        </h1>
        <p className="text-lg leading-relaxed">
          <strong>PT Siantartop</strong> adalah perusahaan yang bergerak di
          bidang manufaktur dan distribusi produk-produk plastik berkualitas
          tinggi. Berdiri sejak tahun 1998, kami terus berinovasi untuk
          menghadirkan solusi kemasan yang efisien, ramah lingkungan, dan
          berstandar internasional.
        </p>
        <p className="text-lg leading-relaxed">
          Dengan komitmen terhadap kualitas dan kepuasan pelanggan, Siantartop
          telah menjadi mitra terpercaya bagi berbagai industri, mulai dari
          makanan dan minuman, farmasi, hingga kebutuhan rumah tangga.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
}
