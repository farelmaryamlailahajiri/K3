// src/components/AboutSection.jsx

import React from "react";
import { Container } from "./Layouts";
import { ShieldCheckIcon, Target, Award, Users } from "./Icons";

export default function AboutSection() {
  const companyImage = "/assets/favicon.png"; // Ganti dengan path gambar yang benar

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            <ShieldCheckIcon className="w-4 h-4" />
            Tentang Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Siantar Top & <span className="text-emerald-600">Komitmen K3</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Perusahaan pelopor industri makanan ringan Indonesia dengan standar tertinggi 
            dalam keselamatan dan kesehatan kerja.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Kolom Kiri: Gambar dengan frame */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative">
              <img
                src={companyImage}
                alt="Perusahaan Siantar Top"
                className="rounded-2xl shadow-2xl object-cover w-full h-[400px] lg:h-[450px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border border-gray-200 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Didirikan</p>
                    <p className="text-xl font-bold text-gray-900">1972</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Deskripsi */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Pelopor Industri <span className="text-emerald-600">Makanan Ringan</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-gray-900">PT Siantar Top Tbk.</strong> adalah perusahaan pelopor industri makanan ringan di Indonesia yang telah berdiri sejak 1972. Dengan komitmen tinggi terhadap kualitas dan inovasi, kami menghadirkan produk-produk berkualitas yang digemari oleh seluruh lapisan masyarakat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami memadukan teknologi modern dengan bahan baku pilihan terbaik, menjalani proses produksi dengan kontrol kualitas ketat dan standar keamanan pangan yang tertinggi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">K3 Terintegrasi</p>
                    <p className="text-sm text-gray-600">Standar ISO 45001</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Tim K3 Khusus</p>
                    <p className="text-sm text-gray-600">24/7 Monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi dan Misi */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Visi */}
          <div className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full mb-4">
                <Target className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Visi Perusahaan</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Menjadi Pemimpin Industri
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Menjadi perusahaan makanan dan minuman terdepan di Asia Tenggara yang inovatif, dengan produk berkualitas dan standar keamanan pangan tertinggi, serta lingkungan kerja yang <strong className="text-emerald-600">Zero Accident</strong>.
            </p>
          </div>

          {/* Misi */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Misi Perusahaan</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Komitmen Keselamatan
              </h4>
            </div>
            <ul className="space-y-4">
              {[
                "Menerapkan Sistem Manajemen K3 (SMK3) dan ISO 45001 secara konsisten",
                "Menyediakan fasilitas dan lingkungan kerja yang aman dan sehat",
                "Mengembangkan budaya kerja yang peduli keselamatan dan lingkungan",
                "Melakukan pelatihan dan pembinaan K3 berkelanjutan"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info tambahan */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">
              <span className="font-medium text-emerald-600">Siantar Top</span> berkomitmen 
              untuk terus meningkatkan standar K3 demi kenyamanan dan keselamatan seluruh karyawan serta 
              keberlanjutan operasional perusahaan.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Alternatif versi lebih minimalis:
export function AboutSectionMinimal() {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Tentang Perusahaan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Siantar Top
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pelopor industri makanan ringan Indonesia dengan komitmen tinggi terhadap 
            keselamatan, kualitas, dan inovasi sejak 1972.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={companyImage}
              alt="Perusahaan Siantar Top"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Komitmen <span className="text-emerald-600">K3</span> yang Tak Tergoyahkan
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Sebagai perusahaan yang telah berdiri lebih dari 50 tahun, Siantar Top memahami 
              bahwa keselamatan dan kesehatan kerja bukan hanya kewajiban, tetapi investasi 
              berharga untuk keberlanjutan bisnis dan kesejahteraan karyawan.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Zero Accident Culture",
                  desc: "Budaya kerja bebas kecelakaan di semua lini operasional"
                },
                {
                  title: "Sertifikasi ISO 45001",
                  desc: "Standar internasional untuk sistem manajemen K3"
                },
                {
                  title: "Investasi Fasilitas K3",
                  desc: "Penyediaan APD dan alat keselamatan terbaru"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}