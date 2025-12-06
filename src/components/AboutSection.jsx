// src/components/AboutSection.jsx

import React from "react";
import { Container } from "./Layouts";
import { ShieldCheckIcon, Target, Award, Users, FileText, Calendar, CheckCircle } from "./Icons";

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

        {/* KEBIJAKAN K3 dan RENCANA TINDAK K3 */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* KEBIJAKAN K3 */}
          <div className="group relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full mb-4">
                <ShieldCheckIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Kebijakan K3</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Komitmen Manajemen Terhadap K3
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              PT. Siantar Top berkomitmen untuk menciptakan lingkungan kerja yang aman dan sehat bagi seluruh karyawan, kontraktor, pengunjung, dan masyarakat sekitar.
            </p>
            <ul className="space-y-4">
              {[
                "Memenuhi semua peraturan perundangan K3 yang berlaku",
                "Mencegah kecelakaan kerja dan penyakit akibat kerja",
                "Menyediakan sumber daya yang memadai untuk implementasi K3",
                "Melibatkan seluruh karyawan dalam program K3",
                "Melakukan tinjauan berkala dan perbaikan berkelanjutan",
                "Komunikasi terbuka tentang aspek K3 kepada semua pihak"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Disahkan oleh:</strong> Direktur Utama PT. Siantar Top<br />
                <strong>Tanggal:</strong> 1 Januari 2024
              </p>
            </div>
          </div>

          {/* RENCANA TINDAK K3 */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full mb-4">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Rencana Tindak K3 2024</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Program & Target K3
              </h4>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Peningkatan Budaya K3",
                  activities: [
                    "Pelatihan K3 untuk 100% karyawan",
                    "Kampanye Zero Accident",
                    "Reward system untuk pencapaian K3"
                  ],
                  timeline: "Q1-Q4 2024"
                },
                {
                  title: "Infrastruktur K3",
                  activities: [
                    "Upgrade sistem deteksi kebakaran",
                    "Pemeliharaan rutin alat pelindung diri",
                    "Renovasi fasilitas P3K"
                  ],
                  timeline: "Q2-Q3 2024"
                },
                {
                  title: "Audit & Sertifikasi",
                  activities: [
                    "Audit internal triwulanan",
                    "Sertifikasi ulang ISO 45001",
                    "Benchmark dengan industri sejenis"
                  ],
                  timeline: "Q3-Q4 2024"
                },
                {
                  title: "Pengukuran Kinerja",
                  activities: [
                    "Target zero fatality accident",
                    "Pengurangan near-miss 30%",
                    "Peningkatan skor audit 10%"
                  ],
                  timeline: "Setiap bulan"
                }
              ].map((program, index) => (
                <div key={index} className="border-l-2 border-blue-300 pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-gray-900">{program.title}</h5>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {program.timeline}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {program.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-gray-500"><strong>Indikator Kinerja:</strong></p>
                  <p className="text-gray-700">Zero Accident, 100% Compliance, Zero Fatality</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500"><strong>Dokumen:</strong> REN-K3-2024/ST</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CAPAIAN K3 */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Capaian K3 PT. Siantar Top</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl border border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">0</div>
                  <div className="text-sm text-gray-600">Fatality (2023)</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">2,500+</div>
                  <div className="text-sm text-gray-600">Karyawan Terlatih</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-emerald-100">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Penghargaan K3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info tambahan */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">
              <span className="font-medium text-emerald-600">PT. Siantar Top</span> berkomitmen 
              untuk terus meningkatkan standar K3 demi kenyamanan dan keselamatan seluruh karyawan serta 
              keberlanjutan operasional perusahaan.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                ISO 45001:2018 Certified
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                Zero Accident Program
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                K3 Integrated System
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                Continuous Improvement
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Versi minimalis yang sudah diperbarui
export function AboutSectionMinimal() {
  const companyImage = "/assets/favicon.png";

  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            Tentang Perusahaan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            PT. Siantar Top
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
              Sebagai perusahaan yang telah berdiri lebih dari 50 tahun, PT. Siantar Top memahami 
              bahwa keselamatan dan kesehatan kerja bukan hanya kewajiban, tetapi investasi 
              berharga untuk keberlanjutan bisnis dan kesejahteraan karyawan.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Kebijakan K3 Terstruktur",
                  desc: "Dokumen kebijakan K3 yang disahkan oleh Direktur Utama"
                },
                {
                  title: "Rencana Tindak K3 Tahunan",
                  desc: "Program terukur dengan timeline dan indikator kinerja"
                },
                {
                  title: "Zero Accident Culture",
                  desc: "Budaya kerja bebas kecelakaan di semua lini operasional"
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

        {/* Ringkasan Kebijakan & Rencana */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" />
                Kebijakan K3
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Komitmen manajemen puncak
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Pemenuhan regulasi K3
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                  Perbaikan berkelanjutan
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Rencana Tindak 2024
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Target zero accident
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Pelatihan 100% karyawan
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  Sertifikasi ISO 45001
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}