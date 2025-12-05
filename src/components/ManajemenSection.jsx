// src/components/ManajemenSection.jsx

import React from "react";
import { Container } from "./Layouts";
// Import semua ikon yang dibutuhkan
import { Shield, FileText, HardHat, AlertTriangle, Users, EnvironmentBuilding } from "./Icons"; 

const ManagementItem = ({ title, description, Icon, colorClass, action }) => (
  <div
    onClick={action}
    className="group relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 overflow-hidden"
  >
    {/* Background gradient on hover */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${colorClass.replace('bg-', 'bg-gradient-to-br from-')}`}></div>
    
    {/* Icon with soft background */}
    <div className={`relative z-10 inline-flex p-4 rounded-2xl ${colorClass.replace('600', '100')} mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-8 h-8 ${colorClass.replace('600', '600')}`} />
    </div>
    
    {/* Content */}
    <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
      {title}
    </h3>
    <p className="relative z-10 text-gray-600 leading-relaxed mb-6">
      {description}
    </p>
    
    {/* Hover indicator */}
    <div className="relative z-10 flex items-center text-sm font-medium text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span>Lihat Detail</span>
      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
    
    {/* Corner accent */}
    <div className={`absolute top-0 right-0 w-16 h-16 -translate-y-8 translate-x-8 ${colorClass} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}></div>
  </div>
);

export const ManagementSection = ({ onOpenSMK3, onOpenRisk, onOpenOrgChart, onOpenBlueprint, onOpenAudit }) => (
  <section id="management" className="py-24 bg-gradient-to-b from-white to-gray-50 w-full">
    <Container>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          Sistem & Dokumentasi
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Manajemen <span className="text-emerald-600">K3</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Akses cepat ke dokumen dan prosedur manajemen Keselamatan dan Kesehatan Kerja.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <ManagementItem
          title="Sistem Manajemen K3"
          description="Panduan dan pedoman Sistem Manajemen K3 (SMK3) perusahaan."
          Icon={Shield}
          colorClass="bg-emerald-600"
          action={onOpenSMK3}
        />
        <ManagementItem
          title="Manajemen Risiko"
          description="Matriks identifikasi, penilaian, dan pengendalian risiko."
          Icon={AlertTriangle}
          colorClass="bg-amber-600"
          action={onOpenRisk}
        />
        <ManagementItem
          title="Struktur Organisasi"
          description="Struktur Divisi K3 dan Tim Tanggap Darurat."
          Icon={Users}
          colorClass="bg-blue-600"
          action={onOpenOrgChart}
        />
        <ManagementItem
          title="Denah Perusahaan"
          description="Peta lokasi, jalur evakuasi, dan titik kumpul darurat."
          Icon={EnvironmentBuilding}
          colorClass="bg-rose-600"
          action={onOpenBlueprint}
        />
        <ManagementItem
          title="File Audit K3"
          description="Dokumen hasil audit dan sertifikasi K3 terbaru."
          Icon={FileText}
          colorClass="bg-purple-600"
          action={onOpenAudit}
        />
      </div>
      
      {/* Info section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-emerald-600">Catatan:</span> Semua dokumen mengikuti standar 
            <span className="font-medium"> ISO 45001:2018</span> dan regulasi K3 nasional.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

// Alternatif lebih sederhana dengan card yang konsisten dengan Pilar Section:
export const ManagementSectionSimple = ({ onOpenSMK3, onOpenRisk, onOpenOrgChart, onOpenBlueprint, onOpenAudit }) => {
  const managementItems = [
    {
      title: "Sistem Manajemen K3",
      description: "Panduan dan pedoman SMK3 perusahaan sesuai ISO 45001",
      Icon: Shield,
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
      action: onOpenSMK3,
      gradient: "from-emerald-100 to-emerald-50"
    },
    {
      title: "Manajemen Risiko",
      description: "Matriks HIRADC untuk identifikasi dan kontrol risiko",
      Icon: AlertTriangle,
      color: "bg-amber-100",
      iconColor: "text-amber-600",
      action: onOpenRisk,
      gradient: "from-amber-100 to-amber-50"
    },
    {
      title: "Struktur Organisasi",
      description: "Struktur Divisi K3 dan Tim Tanggap Darurat",
      Icon: Users,
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      action: onOpenOrgChart,
      gradient: "from-blue-100 to-blue-50"
    },
    {
      title: "Denah Perusahaan",
      description: "Jalur evakuasi dan titik kumpul darurat",
      Icon: EnvironmentBuilding,
      color: "bg-rose-100",
      iconColor: "text-rose-600",
      action: onOpenBlueprint,
      gradient: "from-rose-100 to-rose-50"
    },
    {
      title: "File Audit K3",
      description: "Dokumen audit dan sertifikasi K3 terbaru",
      Icon: FileText,
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      action: onOpenAudit,
      gradient: "from-purple-100 to-purple-50"
    },
  ];

  return (
    <section id="management" className="py-24 bg-white w-full">
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
            Manajemen & Dokumentasi
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Sistem <span className="text-emerald-600">K3</span> Terintegrasi
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dokumen dan prosedur yang mendukung implementasi K3 secara efektif di seluruh operasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {managementItems.map((item, index) => (
            <div
              key={index}
              onClick={item.action}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${item.color.replace('100', '500')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.Icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {item.description}
              </p>
              
              {/* Action */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400 group-hover:text-emerald-500 transition-colors duration-300">
                  Klik untuk membuka
                </span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Kepatuhan Standar</h4>
                <p className="text-gray-600">
                  Semua dokumen K3 dikelola sesuai dengan standar ISO 45001:2018 dan regulasi Kementerian Ketenagakerjaan Republik Indonesia. 
                  Update dilakukan secara berkala untuk memastikan kesesuaian dengan perkembangan terbaru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Export default dengan versi yang lebih baik
export default ManagementSection;