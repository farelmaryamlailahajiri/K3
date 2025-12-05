// src/App.jsx

import React, { useState } from "react";
// Import Layouts & Sections
import { Header, Footer } from "./components/Layouts";
import {
  HeroSection,
  PillarsSection,
  ReportViolationCTA,
  CommitmentSection,
  SafetyMessageSection,
  ProfileSection as AboutSectionComponent, // Mengganti ProfileSection dengan alias AboutSectionComponent
  SMK3Modal, RiskManagementModal, OrgChartModal, BlueprintModal, AuditFileModal // Impor Modal Placeholder
} from "./components/Sections";
import { ManagementSection } from "./components/ManajemenSection"; // Impor Management Section
import {
  EmergencyModal,
  EducationModal,
  ReportViolationModal,
  APDModal,
  FirstAidModal,
  UUSelectionModal,
  UUDetailModal,
} from "./components/Modals";

// Import Icons for Pillars data (Used in App's state data)
import { HardHat, FileText, Users, Zap, Plus } from "./components/Icons";

const App = () => {
  // State untuk Menu Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State untuk Modal PILAR K3
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isAPDModalOpen, setIsAPDModalOpen] = useState(false);
  const [isFirstAidModalOpen, setIsFirstAidModalOpen] = useState(false);
  
  // State untuk Modal UU
  const [isUUSelectionModalOpen, setIsUUSelectionModalOpen] = useState(false);
  const [isUUDetailModalOpen, setIsUUDetailModalOpen] = useState(false);
  const [selectedUU, setSelectedUU] = useState(null);
  
  // State untuk Modal MANAJEMEN K3 (BARU)
  const [isSMK3ModalOpen, setIsSMK3ModalOpen] = useState(false);
  const [isRiskModalOpen, setIsRiskModalOpen] = useState(false);
  const [isOrgChartModalOpen, setIsOrgChartModalOpen] = useState(false);
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  // Data untuk Area Fokus K3
  const focusAreas = [
    // ... (data focusAreas tetap sama)
    { icon: <HardHat className="w-8 h-8 text-white" />, title: "Info APD Wajib", description:"Daftar Peralatan Pelindung Diri (APD) dan lokasi wajib penggunaannya.", color: "bg-orange-600 hover:bg-orange-700", action: () => setIsAPDModalOpen(true), },
    { icon: <FileText className="w-8 h-8 text-white" />, title: "UU Perusahaan Pangan", description: "Peraturan Hukum Undang-undang Perusahaan Pangan", color: "bg-emerald-600 hover:bg-emerald-700", action: () => setIsUUSelectionModalOpen(true), },
    { icon: <Users className="w-8 h-8 text-white" />, title: "Edukasi & Pelatihan", description: "Video Edukasi Pelatihan K3", color: "bg-blue-600 hover:bg-blue-700", action: () => setIsEducationModalOpen(true), },
    { icon: <Zap className="w-8 h-8 text-white" />, title: "Tanggap Darurat", description: "Prosedur penanganan cepat untuk kebakaran, bencana alam, dan kecelakaan kerja.", color: "bg-red-600 hover:bg-red-700", action: () => setIsEmergencyModalOpen(true), },
    { icon: <Plus className="w-8 h-8 text-white stroke-[3px]" />, title: "Prosedur P3K", description: "Langkah-langkah Pertolongan Pertama pada Kecelakaan ringan.", color: "bg-purple-600 hover:bg-purple-700", action: () => setIsFirstAidModalOpen(true), },
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-inter overflow-x-hidden">
      {/* HEADER - Navigasi utama */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT SECTION (Menggantikan ProfileSection) */}
        <AboutSectionComponent />

        {/* PILLARS SECTION */}
        <PillarsSection focusAreas={focusAreas} />
        
        {/* MANAGEMENT & DOCUMENTATION SECTION (BARU) */}
        <ManagementSection 
          onOpenSMK3={() => setIsSMK3ModalOpen(true)}
          onOpenRisk={() => setIsRiskModalOpen(true)}
          onOpenOrgChart={() => setIsOrgChartModalOpen(true)}
          onOpenBlueprint={() => setIsBlueprintModalOpen(true)}
          onOpenAudit={() => setIsAuditModalOpen(true)}
        />

        {/* REPORT VIOLATION CTA */}
        <ReportViolationCTA action={() => setIsReportModalOpen(true)} />

        {/* COMMITMENT SECTION */}
        <CommitmentSection />

        {/* SAFETY MESSAGE CALL TO ACTION */}
        <SafetyMessageSection />
      </main>

      {/* FOOTER - Kontak dan Info Perusahaan */}
      <Footer />

      {/* RENDER SEMUA MODAL PILAR K3 */}
      <EmergencyModal isOpen={isEmergencyModalOpen} onClose={() => setIsEmergencyModalOpen(false)} />
      <EducationModal isOpen={isEducationModalOpen} onClose={() => setIsEducationModalOpen(false)} />
      <ReportViolationModal isOpen={isReportModalOpen} onClose={() => setIsReportModalOpen(false)} />
      <APDModal isOpen={isAPDModalOpen} onClose={() => setIsAPDModalOpen(false)} />
      <FirstAidModal isOpen={isFirstAidModalOpen} onClose={() => setIsFirstAidModalOpen(false)} />
      <UUSelectionModal isOpen={isUUSelectionModalOpen} onClose={() => setIsUUSelectionModalOpen(false)} onSelectUU={handleSelectUU} />
      <UUDetailModal isOpen={isUUDetailModalOpen} onClose={() => setIsUUDetailModalOpen(false)} selectedUU={selectedUU} onBack={handleBackToSelection} />

      {/* RENDER SEMUA MODAL MANAJEMEN K3 (PLACEHOLDER) */}
      <SMK3Modal isOpen={isSMK3ModalOpen} onClose={() => setIsSMK3ModalOpen(false)} />
      <RiskManagementModal isOpen={isRiskModalOpen} onClose={() => setIsRiskModalOpen(false)} />
      <OrgChartModal isOpen={isOrgChartModalOpen} onClose={() => setIsOrgChartModalOpen(false)} />
      <BlueprintModal isOpen={isBlueprintModalOpen} onClose={() => setIsBlueprintModalOpen(false)} />
      <AuditFileModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />

    </div>
  );
};

// ===== KOMPONEN APP SEBAGAI ROUTER CONTAINER =====
const App = () => {
  return (
    <>
      <ScrollToTop />  {/* Tambahkan ini */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </>
  );
};

export default App;