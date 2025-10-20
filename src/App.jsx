import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

// --- Komponen Icon (menggunakan inline SVG) ---
const CheckCircle = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="M22 4L12 14.01l-3-3" />
  </svg>
);

const Zap = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Shield = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const X = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18" />
    <path d="M6 6L18 18" />
  </svg>
);

const EnvironmentBuilding = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18V9l-9-6-9 6Z" />
    <path d="M12 10c-2 0-4 2-4 4c0 3 4 6 4 6s4-3 4-6c0-2-2-4-4-4Z" />
  </svg>
);

const ShieldCheckIcon = (props) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none"
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" 
    />
  </svg>
);

const InfoIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// --- ICON BARU UNTUK LAPORAN ---
const AlertTriangle = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const Upload = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// --- ICON BARU UNTUK APD ---
const HardHat = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21a10 10 0 0 0 10-10V7a2 2 0 0 0-2-2h-1.5a.5.5 0 0 1-.5-.5v-1a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5H4a2 2 0 0 0-2 2v4a10 10 0 0 0 10 10z" />
  </svg>
);

// --- ICON BARU UNTUK DOKUMEN ---
const FileText = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

// --- ICON BARU UNTUK HAMBURGER ---
const Menu = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// --- ICON BARU UNTUK P3K (PLUS) ---
const Plus = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

// -------------------------------------------------------------------------

// --- Komponen Modal Reusable ---

// 1. Modal Tanggap Darurat (Merah - Zap)
const EmergencyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const procedures = [
    {
      step: 1,
      title: "Deteksi & Peringatan",
      detail:
        "Segera bunyikan alarm darurat dan beri tahu supervisor terdekat.",
    },
    {
      step: 2,
      title: "Evakuasi Diri",
      detail:
        "Tinggalkan area bahaya dengan tenang menuju titik kumpul terdekat. Jangan gunakan lift.",
    },
    {
      step: 3,
      title: "Titik Kumpul",
      detail:
        "Laporkan diri kepada koordinator evakuasi di titik kumpul untuk pendataan.",
    },
    {
      step: 4,
      title: "Penanganan Medis",
      detail:
        "Bagi yang terluka, segera berikan pertolongan pertama sambil menunggu tim medis K3.",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Zap className="w-7 h-7 mr-3 text-red-500" />
            Prosedur Tanggap Darurat
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          {procedures.map((p) => (
            <div
              key={p.step}
              className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500"
            >
              <span className="text-xl font-bold text-red-600 mr-4 mt-1">
                {p.step}.
              </span>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t text-center bg-gray-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-600 mb-2">
            Nomor Darurat Internal:
          </p>
          <p className="text-2xl font-bold text-red-600">
            119 (K3 Siantar Top)
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Modal Kebijakan Keselamatan (Hijau - Shield)
const PolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const policies = [
    {
      type: "Undang-Undang Pangan",
      title: "UU No. 18 Tahun 201",
      detail:
        "Mengatur mengenai ketersediaan, keterjangkauan, keamanan, mutu, gizi pangan, distribusi, serta tanggung jawab pemerintah dan produsen pangan.",
    },
    {
      type: "Undang-Undang Kesehatan",
      title: "UU No. 36 Tahun 2009",
      detail:
        "Mengatur standar kesehatan, termasuk ketentuan mengenai keamanan makanan, minuman, serta penggunaan bahan tambahan pangan.",
    },
    {
      type: "Undang-Undang Perlindungan Konsumen",
      title: "UU No. 8 Tahun 1999",
      detail:
        "Mengatur hak dan kewajiban konsumen serta pelaku usaha, termasuk kewajiban produsen mencantumkan label yang jelas pada produk pangan.",
    },
    {
      type: "Undang-Undang Perdagangan",
      title: "UU  No. 7 Tahun 2014",
      detail:
        "Mengatur kegiatan distribusi dan perdagangan produk pangan, termasuk aspek impor dan ekspor.",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Shield className="w-7 h-7 mr-3 text-emerald-500" />
            Kebijakan & Regulasi K3
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-6 font-medium text-center">
          Hukum Undang-Undang Terkait Perusahaan Makanan
        </p>

        <div className="space-y-4">
          {policies.map((p, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gray-50 border border-gray-200 hover:border-emerald-300 transition duration-200"
            >
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${p.type === "Perusahaan" ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"}`}
              >
                {p.type}
              </span>
              <h3 className="font-semibold text-gray-800 mt-2 mb-1">
                {p.title}
              </h3>
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

  const trainings = [
    {
      type: "Video",
      title: " Sistem Manajemen Keamanan Pangan",
      placeholder:
        "https://placehold.co/400x225/2563EB/FFFFFF?text=Video+K3+Pangan",
      description:
        "Konsep dasar food safety (keamanan pangan), termasuk definisi sistem manajemen keamanan pangan dan peran pentingnya dalam menjaga makanan agar aman dikonsumsi.",
      url: "https://youtu.be/DXx_72UNr38",
    },
    {
      type: "Video",
      title: "Implementasi Sistem Manajemen Keamanan Pangan ISO 22000:2018",
      placeholder:
        "https://placehold.co/400x225/FF6347/FFFFFF?text=Simulasi+Kebakaran+Pabrik",
      description:
        "Cara menerapkan standar ISO 22000:2018 di organisasi / perusahaan pangan. Penjelasan mencakup bagaimana ISO 22000 membantu organisasi mengurangi risiko pangan (food-safety risk), serta bagaimana standar ini mencakup risiko pada tingkat operasional & organisasi.",
      url: "https://youtu.be/8_-Q9RBuNgA",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Users className="w-7 h-7 mr-3 text-blue-500" />
            Edukasi & Pelatihan K3
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8 font-medium text-center">
          Akses materi pelatihan interaktif untuk meningkatkan kesadaran dan
          kompetensi K3.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trainings.map((t, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <a
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={t.placeholder}
                  alt={t.title}
                  className="w-full h-48 object-cover hover:opacity-90 transition duration-300"
                />
              </a>

              <div className="p-5">
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                  {t.type}
                </span>
                <h3 className="font-semibold text-gray-800 mt-2 mb-2 text-lg">
                  {t.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. Modal Lapor Pelanggaran K3 (Kuning - AlertTriangle)
const ReportViolationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    reporterName: "",
    violationType: "",
    description: "",
    photoFile: null,
  });
  const [submitStatus, setSubmitStatus] = useState("");

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, photoFile: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.violationType ||
      !formData.description ||
      !formData.photoFile
    ) {
      setSubmitStatus(
        "Harap isi Jenis Pelanggaran, Deskripsi, dan Unggah Foto."
      );
      return;
    }

    console.log("Data Pelanggaran Dikirim:", formData);

    setSubmitStatus("Laporan berhasil dikirim! Akan segera ditindaklanjuti.");

    setTimeout(() => {
      setFormData({
        reporterName: "",
        violationType: "",
        description: "",
        photoFile: null,
      });
      setSubmitStatus("");
      onClose();
    }, 3000);
  };

  const violationOptions = [
    "Pilih Jenis Pelanggaran...",
    "Penggunaan APD Tidak Sesuai",
    "Tindakan Tidak Aman",
    "Kondisi Peralatan Berbahaya",
    "Jalur Evakuasi Terhalang",
    "Pelanggaran Prosedur Sanitasi Pangan",
    "Lainnya",
  ];

  const isFormValid =
    formData.violationType && formData.description && formData.photoFile;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <AlertTriangle className="w-7 h-7 mr-3 text-yellow-500" />
            Lapor Pelanggaran K3 (Anonim)
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitStatus && (
          <div
            className={`p-3 mb-4 rounded-lg text-sm font-medium ${submitStatus.includes("berhasil") ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}
          >
            {submitStatus}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="reporterName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nama Pelapor (Opsional)
            </label>
            <input
              type="text"
              id="reporterName"
              name="reporterName"
              value={formData.reporterName}
              onChange={handleInputChange}
              placeholder="Nama atau Inisial (Rahasia)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
            />
          </div>

          <div>
            <label
              htmlFor="violationType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Jenis Pelanggaran <span className="text-red-500">*</span>
            </label>
            <select
              id="violationType"
              name="violationType"
              value={formData.violationType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150 bg-white"
            >
              {violationOptions.map((option) => (
                <option
                  key={option}
                  value={option === violationOptions[0] ? "" : option}
                  disabled={option === violationOptions[0]}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Deskripsi Detail Pelanggaran{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Jelaskan apa, di mana, dan kapan pelanggaran terjadi. (Contoh: Karyawan X melepas helm di Area Produksi Lantai 3 pukul 14:00)"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="photoFile"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Unggah Foto Bukti (Maks. 5MB){" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-yellow-400 transition duration-150 cursor-pointer bg-gray-50">
              <label
                htmlFor="photoFileInput"
                className="text-center cursor-pointer"
              >
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <div className="text-sm text-gray-600 mt-2">
                  <span className="font-medium text-yellow-600 hover:text-yellow-500">
                    {formData.photoFile
                      ? formData.photoFile.name
                      : "Pilih file"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  PNG, JPG, JPEG hingga 5MB
                </p>
              </label>
              <input
                id="photoFileInput"
                name="photoFile"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                required
                onChange={handleFileChange}
                className="sr-only"
              />
            </div>
            {formData.photoFile && (
              <p className="text-xs mt-2 text-gray-500">
                File terpilih: **{formData.photoFile.name}**
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition duration-150"
          >
            Kirim Laporan
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Laporan Anda adalah kontribusi penting bagi keselamatan. Kerahasiaan
          identitas akan **dijamin**.
        </p>
      </div>
    </div>
  );
};

// 5. Modal Informasi APD (Oranye - HardHat)
const APDModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const apdLocations = [
    {
      area: "Area Produksi Pangan Sensitif",
      description:
        "Area yang bersentuhan langsung dengan bahan baku/produk, memerlukan standar hygiene pangan tertinggi.",
      color: "bg-orange-50 border-orange-500",
      apdList: [
        "Hairnet (Penutup Kepala)",
        "Masker (Penutup Mulut dan Hidung)",
        "Sarung Tangan Steril (Food Grade)",
        "Seragam Putih/Hijau Bersih",
        "Sepatu Safety Non-Slip",
      ],
    },
    {
      area: "Area Gudang & Loading Dock",
      description:
        "Area mobilisasi barang dan risiko benturan, kejutan listrik, atau jatuhan benda berat.",
      color: "bg-blue-50 border-blue-500",
      apdList: [
        "Helm Proyek (Hard Hat)",
        "Rompi Reflektif (High Visibility Vest)",
        "Sepatu Safety dengan Pelindung Baja",
        "Sarung Tangan Kerja (Untuk Handling Barang)",
      ],
    },
    {
      area: "Area Mesin Berat & Bengkel",
      description:
        "Area dengan kebisingan tinggi, percikan, dan potensi cedera mekanik/panas.",
      color: "bg-red-50 border-red-500",
      apdList: [
        "Earplug / Earmuff (Perlindungan Pendengaran)",
        "Kacamata Safety (Pelindung Mata)",
        "Sepatu Safety dengan Pelindung Baja",
        "Sarung Tangan Khusus (Anti-gesek/panas)",
      ],
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <HardHat className="w-7 h-7 mr-3 text-orange-500" />
            Peralatan Pelindung Diri (APD) Wajib
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8 font-medium text-center">
          Pastikan Anda menggunakan APD yang sesuai sebelum memasuki area kerja
          tertentu.
        </p>

        <div className="space-y-6">
          {apdLocations.map((loc, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border-l-4 ${loc.color} shadow-lg transition duration-200 hover:shadow-xl`}
            >
              <h3 className="font-bold text-xl text-gray-800 flex items-center mb-3">
                <span className="text-orange-600 mr-2">
                  <HardHat className="w-5 h-5" />
                </span>
                {loc.area}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{loc.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                {loc.apdList.map((apd, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm font-medium text-gray-700 bg-white p-3 rounded-lg border border-gray-200"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                    {apd}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t text-center bg-gray-50 rounded-lg p-4">
          <p className="text-sm font-medium text-gray-600">
            APD dapat diambil di pos kontrol masing-masing area atau di Pusat
            Logistik K3.
          </p>
        </div>
      </div>
    </div>
  );
};

// 6. Modal Pilihan UU (Halaman Pilihan)
const UUSelectionModal = ({ isOpen, onClose, onSelectUU }) => {
  if (!isOpen) return null;

  const uuList = [
    {
      id: 1,
      title: "Undang-Undang Republik Indonesia No. 18 Tahun 2012",
      subtitle: "Tentang Pangan",
      description:
        "Mengatur mengenai ketersediaan, keterjangkauan, keamanan, mutu, gizi pangan, distribusi, serta tanggung jawab pemerintah dan produsen pangan.",
      color: "bg-emerald-500 hover:bg-emerald-600",
      pdfFile: "/UU Nomor 18 Tahun 2012.pdf",
    },
    {
      id: 2,
      title: "Undang-Undang Nomor 3 Tahun 2014",
      subtitle: "Tentang Perindustrian",
      description:
        "Mengatur pembangunan industri nasional yang berkelanjutan dan berwawasan lingkungan serta meningkatkan daya saing industri nasional.",
      color: "bg-blue-500 hover:bg-blue-600",
      pdfFile: "/UU Nomor 03 Tahun 2014.pdf",
    },
    {
      id: 3,
      title: "Undang-Undang Nomor 8 Tahun 1999",
      subtitle: "Tentang Perlindungan Konsumen",
      description:
        "Mengatur hak dan kewajiban konsumen serta pelaku usaha, termasuk kewajiban produsen mencantumkan label yang jelas pada produk pangan.",
      color: "bg-purple-500 hover:bg-purple-600",
      pdfFile: "/UU Nomor 8 Tahun 1999.pdf",
    },
    {
      id: 4,
      title: "Undang-Undang Nomor 36 Tahun 2009",
      subtitle: "Tentang Kesehatan",
      description:
        "Mengatur standar kesehatan, termasuk ketentuan mengenai keamanan makanan, minuman, serta penggunaan bahan tambahan pangan.",
      color: "bg-red-500 hover:bg-red-600",
      pdfFile: "/UU Nomor 36 Tahun 2009.pdf",
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <FileText className="w-7 h-7 mr-3 text-emerald-500" />
            Pilih Undang-Undang Perusahaan Pangan
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8 font-medium text-center">
          Pilih salah satu Undang-Undang di bawah ini untuk melihat detail dan
          dokumen lengkapnya.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uuList.map((uu) => (
            <div
              key={uu.id}
              onClick={() => onSelectUU(uu)}
              className={`p-6 rounded-xl ${uu.color} text-white transition duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-xl`}
            >
              <div className="flex items-start mb-4">
                <FileText className="w-8 h-8 mr-3 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">{uu.title}</h3>
                  <p className="text-sm font-medium text-white/90">
                    {uu.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                {uu.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  Klik untuk detail
                </span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  PDF Available
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
            Informasi
          </h4>
          <p className="text-sm text-gray-600">
            Semua Undang-Undang ini wajib dipatuhi oleh perusahaan dalam
            menjalankan kegiatan usaha di bidang pangan.
          </p>
        </div>
      </div>
    </div>
  );
};

// 7. Modal Detail UU (Detail masing-masing UU)
const UUDetailModal = ({ isOpen, onClose, selectedUU, onBack }) => {
  if (!isOpen || !selectedUU) return null;

  // Data ringkasan untuk masing-masing UU
  const uuSummaries = {
    1: [
      {
        bab: "BAB I",
        title: "Ketentuan Umum",
        description:
          "Berisi definisi istilah-istilah penting seperti Pangan, Kedaulatan Pangan, Kemandirian Pangan, Ketahanan Pangan, Keamanan Pangan, dan lainnya.",
      },
      {
        bab: "BAB II",
        title: "Asas, Tujuan, dan Lingkup Pengaturan",
        description:
          "Menetapkan asas kedaulatan, kemandirian, ketahanan, keamanan, manfaat, pemerataan, berkelanjutan, dan keadilan dalam penyelenggaraan pangan.",
      },
      {
        bab: "BAB IV",
        title: "Ketersediaan Pangan",
        description:
          "Mengatur tentang produksi pangan dalam negeri, cadangan pangan nasional, ekspor dan impor pangan, serta penganekaragaman pangan.",
      },
      {
        bab: "BAB VII",
        title: "Keamanan Pangan",
        description:
          "Mengatur standar keamanan pangan, sanitasi pangan, bahan tambahan pangan, pangan produk rekayasa genetik, kemasan pangan, dan jaminan keamanan pangan.",
      },
      {
        bab: "BAB XV",
        title: "Ketentuan Pidana",
        description:
          "Memuat sanksi pidana bagi pelaku usaha yang melanggar ketentuan undang-undang, termasuk penjara dan denda.",
      },
    ],
    2: [
      {
        bab: "BAB I",
        title: "Ketentuan Umum",
        description:
          "Berisi definisi industri, perindustrian, industri strategis, dan istilah-istilah penting lainnya.",
      },
      {
        bab: "BAB III",
        title: "Pembangunan Industri",
        description:
          "Mengatur tentang rencana induk pembangunan industri, standardisasi, dan pengembangan sumber daya industri.",
      },
      {
        bab: "BAB V",
        title: "Kawasan Industri",
        description:
          "Mengatur tentang pembentukan, pengelolaan, dan pengembangan kawasan industri.",
      },
      {
        bab: "BAB VII",
        title: "Pemberdayaan Industri",
        description:
          "Mengatur tentang kemudahan, insentif, dan fasilitas untuk pengembangan industri.",
      },
    ],
    3: [
      {
        bab: "BAB III",
        title: "Hak dan Kewajiban Konsumen",
        description:
          "Mengatur hak untuk mendapatkan kenyamanan, keamanan, dan keselamatan dalam mengonsumsi barang dan/atau jasa.",
      },
      {
        bab: "BAB IV",
        title: "Hak dan Kewajiban Pelaku Usaha",
        description:
          "Mengatur kewajiban pelaku usaha untuk beritikad baik dalam melakukan kegiatan usahanya.",
      },
      {
        bab: "BAB V",
        title: "Ketentuan Pidana",
        description:
          "Memuat sanksi pidana bagi pelaku usaha yang melanggar ketentuan undang-undang.",
      },
    ],
    4: [
      {
        bab: "BAB V",
        title: "Sumber Daya di Bidang Kesehatan",
        description:
          "Mengatur tentang tenaga kesehatan, fasilitas pelayanan kesehatan, dan perbekalan kesehatan.",
      },
      {
        bab: "BAB VIII",
        title: "Gizi",
        description:
          "Mengatur tentang perbaikan gizi masyarakat dan keamanan pangan.",
      },
      {
        bab: "BAB XIII",
        title: "Ketentuan Pidana",
        description:
          "Memuat sanksi pidana bagi pelaku yang melanggar ketentuan undang-undang kesehatan.",
      },
    ],
  };

  const summary = uuSummaries[selectedUU.id] || [];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <div className="flex items-center">
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-150"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <FileText className="w-7 h-7 mr-3 text-emerald-500" />
                {selectedUU.title}
              </h2>
              <p className="text-lg text-gray-600">{selectedUU.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-700 font-medium mb-4 leading-relaxed">
            {selectedUU.description}
          </p>

          <div className="flex justify-center mb-6">
            <a
              href={selectedUU.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 shadow-md"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Buka PDF Lengkap
            </a>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Ringkasan Isi Penting:
          </h3>

          <div className="space-y-4">
            {summary.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg border-l-4 border-emerald-500"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {item.bab} - {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
            Informasi Penting
          </h4>
          <p className="text-sm text-yellow-700">
            Undang-Undang ini wajib dipatuhi oleh semua pelaku usaha dalam
            menjalankan kegiatan usahanya. Pelanggaran terhadap ketentuan
            undang-undang dapat dikenai sanksi administratif dan/atau pidana.
          </p>
        </div>
      </div>
    </div>
  );
};

// 8. Modal P3K / First Aid (Merah/Putih - Plus)
const FirstAidModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const firstAidSteps = [
    {
      type: "Luka Sayat",
      action: "Bersihkan luka dengan air mengalir. Keringkan, oleskan antiseptik, lalu tutup dengan plester steril.",
      iconColor: "text-blue-500",
      videoUrl: "https://youtube.com/shorts/vcrRSVJscVk?si=VDXNbbTAY4DAGcFg",
      detailedSteps: [
        "Cuci tangan dengan sabun dan air mengalir sebelum menangani luka",
        "Bersihkan luka dengan air mengalir selama 5-10 menit",
        "Gunakan sabun antiseptik untuk membersihkan area sekitar luka",
        "Keringkan dengan kain steril dengan menepuk-nepuk (jangan digosok)",
        "Oleskan salep antiseptik seperti povidone-iodine",
        "Tutup luka dengan plester steril atau perban",
        "Ganti perban setiap hari atau jika basah/kotor"
      ],
      precautions: [
        "Jangan gunakan alkohol langsung pada luka terbuka",
        "Jika luka dalam atau berdarah banyak, segera cari bantuan medis",
        "Perhatikan tanda-tanda infeksi: kemerahan, bengkak, nanah"
      ]
    },
    {
      type: "Luka Bakar Ringan",
      action: "Dinginkan area luka dengan air mengalir (bukan es) selama 10-15 menit. Tutup longgar dengan kain steril. Jangan pecahkan gelembung.",
      iconColor: "text-red-500",
      videoUrl: "https://youtu.be/1ZRWfJJkxWs?si=o_fS5IvYxcSuOYCG",
      detailedSteps: [
        "Segera dinginkan luka dengan air mengalir suhu ruangan selama 10-15 menit",
        "Jangan gunakan es, mentega, atau odol pada luka bakar",
        "Lepaskan perhiasan atau pakaian ketat di sekitar area luka",
        "Tutup luka dengan kain steril atau perban longgar",
        "Jangan pecahkan gelembung/lepuh yang terbentuk",
        "Berikan obat pereda nyeri jika diperlukan",
        "Pantau tanda-tanda syok: pucat, lemas, berkeringat"
      ],
      precautions: [
        "Luka bakar derajat 2 dan 3 memerlukan penanganan medis segera",
        "Jangan mengoleskan pasta gigi, mentega, atau minyak",
        "Jika luka bakar mengenai wajah, tangan, atau alat kelamin, segera ke dokter"
      ]
    },
    {
      type: "Keseleo/Tersandung",
      action: "Lakukan prosedur RICE (Rest, Ice, Compression, Elevation). Istirahatkan, kompres es, balut, dan angkat kaki lebih tinggi.",
      iconColor: "text-orange-500",
      videoUrl: "https://youtu.be/8ITlpKUPB54?si=6UexE0RLNLNWTm0Y",
      detailedSteps: [
        "REST: Istirahatkan bagian yang cedera, hindari beban berat",
        "ICE: Kompres dengan es yang dibungkus kain selama 15-20 menit setiap 2-3 jam",
        "COMPRESSION: Balut dengan perban elastis (jangan terlalu ketat)",
        "ELEVATION: Angkat bagian yang cedera lebih tinggi dari jantung",
        "Gunakan tongkat penyangga jika cedera pada kaki",
        "Berikan obat anti-inflamasi jika diperlukan",
        "Lakukan peregangan ringan setelah 48 jam"
      ],
      precautions: [
        "Jangan memberikan pijatan pada area yang bengkak",
        "Jika tidak membaik dalam 2-3 hari, konsultasi ke dokter",
        "Hindari aktivitas berat sampai benar-benar pulih"
      ]
    },
    {
      type: "Mata Kena Debu/Kimia",
      action: "Segera bilas mata dengan air mengalir minimal 15-20 menit. JANGAN digosok. Segera cari bantuan medis K3 setelah dibilas.",
      iconColor: "text-yellow-500",
      videoUrl: "https://youtube.com/shorts/7aPzxeAdAVQ?si=f7zIq6vUIJCuRHHi",
      detailedSteps: [
        "Cuci tangan sebelum menangani mata",
        "Miringkan kepala ke sisi mata yang terkena",
        "Bilas mata dengan air mengalir bersih selama 15-20 menit",
        "Gunakan gelas bilas mata atau air mengalir dari keran",
        "Jangan menggosok mata yang terkena",
        "Jika memakai lensa kontak, lepaskan setelah pembilasan",
        "Tutup mata dengan kain steril longgar"
      ],
      precautions: [
        "Untuk bahan kimia, bilas minimal 20-30 menit",
        "Jangan menggunakan obat tetes mata tanpa resep dokter",
        "Segera cari bantuan medis untuk bahan kimia korosif"
      ]
    }
  ];

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Plus className="w-7 h-7 mr-3 text-red-500 stroke-[3px]" />
            Prosedur Pertolongan Pertama (P3K)
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-lg text-gray-700 mb-8 font-medium text-center">
          Tindakan cepat dan tepat sangat penting dalam <strong>menyelamatkan nyawa dan meminimalkan cedera</strong>.
        </p>

        <div className="space-y-4">
          {firstAidSteps.map((item, index) => (
            <FirstAidItem key={index} item={item} />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t text-center bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-sm font-medium text-red-800 mb-2 flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 text-red-600" />
            Setelah P3K, segera hubungi <strong>Tim Medis K3</strong> untuk penanganan lebih lanjut!
          </p>
          <p className="text-3xl font-bold text-red-700">119</p>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk setiap item P3K dengan modal detail
const FirstAidItem = ({ item }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsDetailOpen(true)}
        className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 cursor-pointer transition duration-200 hover:bg-red-100 hover:border-red-600"
      >
        <h3 className="font-bold text-lg text-gray-800 flex items-center mb-2">
          <AlertTriangle className={`w-5 h-5 mr-2 ${item.iconColor}`} />
          {item.type}
        </h3>
        <p className="text-sm text-gray-600 pl-7 leading-relaxed">
          {item.action}
        </p>
        <div className="flex justify-between items-center mt-3 pl-7">
          <span className="text-xs text-red-600 font-medium">Klik untuk detail lengkap</span>
          <span className="text-xs bg-red-200 text-red-700 px-2 py-1 rounded-full">Video & Panduan</span>
        </div>
      </div>

      {/* Modal Detail untuk setiap jenis luka */}
      {isDetailOpen && (
        <FirstAidDetailModal 
          item={item} 
          onClose={() => setIsDetailOpen(false)} 
        />
      )}
    </>
  );
};

// Modal Detail untuk setiap jenis P3K
const FirstAidDetailModal = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-[1100] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6 border-b pb-4">
          <div className="flex items-center">
            <AlertTriangle className={`w-7 h-7 mr-3 ${item.iconColor}`} />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{item.type}</h2>
              <p className="text-gray-600">{item.action}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition duration-150"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Video Tutorial Penanganan
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 aspect-video flex items-center justify-center">
              <a
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-gray-600 hover:text-red-600 transition duration-200"
              >
                <svg className="w-16 h-16 mx-auto mb-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="font-medium">Tonton Video Tutorial</p>
                <p className="text-sm">(Buka di YouTube)</p>
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Video menunjukkan demonstrasi penanganan yang benar
            </p>
          </div>

          {/* Detailed Steps Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
              Langkah-langkah Detail
            </h3>
            <div className="space-y-3">
              {item.detailedSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Precautions Section */}
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
            Hal yang Harus Dihindari
          </h3>
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <ul className="space-y-2">
              {item.precautions.map((precaution, index) => (
                <li key={index} className="flex items-start text-sm text-yellow-800">
                  <X className="w-4 h-4 mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
                  {precaution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
          <h4 className="font-semibold text-red-800 mb-2 flex items-center justify-center">
            <Zap className="w-5 h-5 mr-2 text-red-600" />
            Dalam Keadaan Darurat, Segera Hubungi:
          </h4>
          <p className="text-2xl font-bold text-red-700 text-center">119 (Tim Medis K3)</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

// Komponen Container yang mengatur lebar maksimum konten
const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

// Main Application Component
const App = () => {
  // State untuk menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk mengontrol setiap modal
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isAPDModalOpen, setIsAPDModalOpen] = useState(false);
  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);

  // State baru untuk modal UU
  const [isUUSelectionModalOpen, setIsUUSelectionModalOpen] = useState(false);
  const [isUUDetailModalOpen, setIsUUDetailModalOpen] = useState(false);
  const [selectedUU, setSelectedUU] = useState(null);

  // Data untuk Area Fokus K3
  const focusAreas = [
    {
      icon: <HardHat className="w-8 h-8 text-white" />,
      title: "Info APD Wajib",
      description:
        "Daftar Peralatan Pelindung Diri (APD) dan lokasi wajib penggunaannya.",
      color: "bg-orange-600 hover:bg-orange-700",
      action: () => setIsAPDModalOpen(true),
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "UU Perusahaan Pangan",
      description: "Peraturan Hukum Undang-undang Perusahaan Pangan",
      color: "bg-emerald-600 hover:bg-emerald-700",
      action: () => setIsUUSelectionModalOpen(true),
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Edukasi & Pelatihan",
      description: "Video Edukasi Pelatihan K3",
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => setIsEducationModalOpen(true),
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Tanggap Darurat",
      description:
        "Prosedur penanganan cepat untuk kebakaran, bencana alam, dan kecelakaan kerja.",
      color: "bg-red-600 hover:bg-red-700",
      action: () => setIsEmergencyModalOpen(true),
    },
    {
      icon: <Plus className="w-8 h-8 text-white stroke-[3px]" />,
      title: "Prosedur P3K",
      description:
        "Langkah-langkah Pertolongan Pertama pada Kecelakaan ringan.",
      color: "bg-purple-600 hover:bg-purple-700",
      action: () => setIsFirstAidModalOpen(true),
    },
  ];

  // Handler untuk memilih UU
  const handleSelectUU = (uu) => {
    setSelectedUU(uu);
    setIsUUSelectionModalOpen(false);
    setIsUUDetailModalOpen(true);
  };

  // Handler untuk kembali ke pilihan UU
  const handleBackToSelection = () => {
    setIsUUDetailModalOpen(false);
    setIsUUSelectionModalOpen(true);
  };

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

    // Pastikan pesan baru berbeda dengan pesan sekarang
    do {
      const randomIndex = Math.floor(Math.random() * safetyMessages.length);
      newMessage = safetyMessages[randomIndex];
    } while (newMessage === currentMessage);

    setSafetyMessage(newMessage);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white shadow-lg w-full border-b border-gray-200">
        <Container>
          <div className="py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              <a
                href="https://www.siantartop.co.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <img
                  src="assets/siantartop.png"
                  alt="Siantar Top Logo"
                  className="h-12 w-auto"
                />
                <div className="hidden md:block border-l border-gray-300 h-8"></div>
                <span className="hidden md:block text-sm font-normal text-gray-600">
                  Divisi K3
                </span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Beranda
              </a>
              <a
                href="#pillars"
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Pilar K3
              </a>
              <a
                href="#report"
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Lapor K3
              </a>
              <a
                href="#commitment"
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Komitmen
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Kontak
              </a>
            </nav>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          <div
            className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 mt-2 w-full bg-white shadow-xl border-b border-gray-200`}
          >
            <div className="flex flex-col space-y-0 py-4">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Beranda
              </a>
              <a
                href="#pillars"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Pilar K3
              </a>
              <a
                href="#report"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Lapor K3
              </a>
              <a
                href="#commitment"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Komitmen
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition duration-300 font-medium"
              >
                Kontak
              </a>
            </div>
          </div>
        </Container>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="bg-gray-900 text-white w-full">
        <div>
          <Swiper
            modules={[Navigation, EffectFade, Autoplay]}
            effect="fade"
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
            fadeEffect={{ crossFade: true }}
          >
            {/* SLIDE 1 */}
            <SwiperSlide>
              <div
                className="text-center py-24 md:py-40 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: "url('/assets/tentangsiantartop.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10">
                  <Shield className="w-20 h-20 mx-auto mb-8 text-emerald-400" />
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Keselamatan Kerja,{" "}
                    <span className="text-emerald-400">Kualitas Utama</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                    Komitmen Siantar Top: Menciptakan lingkungan kerja yang
                    aman, sehat, dan produktif bagi setiap insan.
                  </p>
                  <a
                    href="#pillars"
                    className="inline-block px-10 py-4 bg-red-600 text-white font-bold rounded-lg text-lg shadow-xl hover:bg-red-700 transition duration-300 transform hover:scale-105"
                  >
                    Jelajahi Pilar K3 Kami
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              <div
                className="text-center py-24 md:py-40 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/assets/goriorio.jpg')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10">
                  <EnvironmentBuilding className="w-20 h-20 mx-auto mb-8 text-yellow-400" />
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Lingkungan Aman,{" "}
                    <span className="text-yellow-400">
                      Produktivitas Maksimal
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                    Dengan penerapan sistem K3 yang terstandar, kami memastikan
                    setiap langkah kerja penuh kehati-hatian dan tanggung jawab.
                  </p>
                  <a
                    href="#report"
                    className="inline-block px-10 py-4 bg-yellow-500 text-gray-900 font-bold rounded-lg text-lg shadow-xl hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
                  >
                    Laporkan Kondisi Berbahaya
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 3 */}
            <SwiperSlide>
              <div
                className="text-center py-24 md:py-40 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: "url('/assets/dharmabakti.jpg')" }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="relative z-10">
                  <Users className="w-20 h-20 mx-auto mb-8 text-blue-400" />
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Bersama Membangun{" "}
                    <span className="text-blue-400">Budaya Keselamatan</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                    Partisipasi aktif seluruh karyawan menjadi fondasi utama
                    dalam menciptakan lingkungan kerja yang selamat dan
                    berkualitas.
                  </p>
                  <a
                    href="#contact"
                    className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-lg text-lg shadow-xl hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                  >
                    Hubungi Tim K3
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* PROFILE SIANTAR TOP */}    
      <section id="profile" className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-16 p-8">
      
            {/* Kolom Gambar */}
            <div className="flex-shrink-0">
              <img 
                src="/assets/favicon.png" 
                alt="Gedung Perusahaan Siantar Top"
                className="shadow-2xl w-80 h-auto object-cover rounded-xl transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Kolom Teks */}
            <div>
              <p className="text-sm font-bold text-red-600 mb-2">TENTANG KAMI</p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Inovasi Rasa, Kualitas Terjaga Sejak 1972
              </h2>
              <p className="text-gray-600 mb-4">
                PT Siantar Top Tbk. adalah pelopor industri makanan ringan di Indonesia yang berkomitmen untuk menghadirkan produk berkualitas tinggi bagi konsumen. Sejak berdiri, kami terus berinovasi untuk menciptakan cita rasa yang digemari oleh semua kalangan.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan memadukan teknologi modern dan bahan baku pilihan, kami memastikan setiap produk yang sampai ke tangan Anda telah melalui proses kontrol kualitas yang ketat, demi kepuasan dan kepercayaan pelanggan.
              </p>
              <a href="#profil" className="inline-block bg-red-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-800 transition duration-300">
                Profil Lebih Lengkap
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* PILLARS SECTION */}
      <section id="pillars" className="py-20 bg-white w-full">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Lima Pilar Utama K3
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kami membangun budaya keselamatan yang kuat melalui lima fokus
              area inti yang berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                onClick={area.action}
                className={`p-6 rounded-xl shadow-lg ${area.color} text-white transition duration-300 ease-in-out cursor-pointer transform hover:scale-[1.03] hover:shadow-xl flex flex-col items-center text-center h-full`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    {area.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-gray-100 leading-relaxed flex-grow">
                  {area.description}
                </p>
                <div className="mt-4 text-xs bg-white/20 px-2 py-1 rounded-full">
                  Klik untuk detail
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEW REPORT VIOLATION SECTION */}
      <section
        id="report"
        className="py-12 bg-yellow-50 w-full border-y border-yellow-200"
      >
        <Container>
          <div className="text-center p-6 rounded-xl border-2 border-yellow-300 bg-white shadow-md max-w-4xl mx-auto">
            <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              LAPOR PELANGGARAN K3 (Jalur Anonim)
            </h3>
            <p className="text-gray-600 mb-4 max-w-2xl mx-auto text-sm leading-relaxed">
              Jadilah mata dan telinga kami. Laporkan segera setiap tindakan
              atau kondisi yang berpotensi menyebabkan bahaya. Identitas Anda
              dijamin <strong>RAHASIA</strong>.
            </p>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg text-base shadow-md hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Kirim Laporan Sekarang
            </button>
          </div>
        </Container>
      </section>

      {/* COMMITMENT SECTION */}
      <section id="commitment" className="py-20 bg-gray-50 w-full">
        <Container>
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Komitmen Kami Terhadap Zero Accident
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Siantar Top bertekad mencapai nihil kecelakaan melalui investasi
                berkelanjutan pada teknologi, prosedur, dan sumber daya manusia.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Audit Keselamatan Eksternal berkala.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Tim K3 Reaktif dan Proaktif 24/7.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Pendekatan Teknologi untuk pemantauan risiko.
                  </span>
                </li>
              </ul>
            </div>

            {/* Statistics Card */}
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div className="p-4">
                    <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                      365+
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Hari Kerja Tanpa Kecelakaan Berat
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                      100%
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      Kepatuhan Terhadap Standar ISO 45001
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="text-sm text-emerald-700 text-center">
                    <strong>Target 2024:</strong> Zero Accident di semua area
                    produksi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CALL TO ACTION / Safety Message Update */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-20 md:py-24 w-full">
        <Container>
          {/* Card Container with Glassmorphism Effect */}
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-3 gap-8 items-center">

              {/* Kolom Ikon */}
              <div className="md:col-span-1 flex justify-center">
                <ShieldCheckIcon className="w-28 h-28 md:w-36 md:h-36 text-white opacity-90" />
              </div>

              {/* Kolom Teks & Tombol */}
              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-2xl md:text-2xl font-extrabold mb-3">
                  Pesan Keselamatan Hari Ini
                </h3>
                  <div className="flex items-center gap-3 bg-black/20 p-4 rounded-lg mb-6 transition-opacity duration-300 min-h-[60px]">
                    <InfoIcon className="w-6 h-6 text-emerald-200 flex-shrink-0" />
                      <p className="text-xl text-emerald-100 font-medium">
                        {safetyMessage}
                      </p>
                  </div>
                <button 
                  onClick={getRandomMessage}
                  className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-lg shadow-md hover:bg-emerald-100 transition-transform duration-200 transform hover:scale-105 text-lg"
                >
                  Dapatkan Pesan Baru
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-gray-800 text-gray-300 py-12 mt-auto w-full"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <img
                src="assets/siantartop.png"
                alt="Siantar Top Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed mb-4">
                Divisi Kesehatan & Keselamatan Kerja (K3)
                <br />
                Jl. Raya Jati, Sidoarjo, Jawa Timur
                <br />
                Komitmen terhadap keselamatan dan kesehatan kerja adalah
                prioritas utama kami.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Akses Cepat
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#home"
                    className="hover:text-emerald-400 transition duration-200"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#pillars"
                    className="hover:text-emerald-400 transition duration-200"
                  >
                    Pilar K3
                  </a>
                </li>
                <li>
                  <a
                    href="#report"
                    className="hover:text-emerald-400 transition duration-200"
                  >
                    Lapor K3
                  </a>
                </li>
                <li>
                  <a
                    href="#commitment"
                    className="hover:text-emerald-400 transition duration-200"
                  >
                    Komitmen
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Hubungi Kami
              </h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  k3@siantartop.com
                </p>
                <p className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (031) 123-456
                </p>
                <p className="flex items-center text-red-300 font-medium mt-4">
                  <Zap className="w-4 h-4 mr-2" />
                  Darurat: 119
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Siantar Top - Divisi K3. All
              rights reserved.
            </p>
          </div>
        </Container>
      </footer>

      {/* RENDER SEMUA MODAL */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
      />
      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
      <ReportViolationModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
      <APDModal
        isOpen={isAPDModalOpen}
        onClose={() => setIsAPDModalOpen(false)}
      />
      <FirstAidModal
        isOpen={isFirstAidModalOpen}
        onClose={() => setIsFirstAidModalOpen(false)}
      />

      {/* Modal UU */}
      <UUSelectionModal
        isOpen={isUUSelectionModalOpen}
        onClose={() => setIsUUSelectionModalOpen(false)}
        onSelectUU={handleSelectUU}
      />
      <UUDetailModal
        isOpen={isUUDetailModalOpen}
        onClose={() => setIsUUDetailModalOpen(false)}
        selectedUU={selectedUU}
        onBack={handleBackToSelection}
      />
    </div>
  );
};

export default App;
