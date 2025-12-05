// src/components/Layouts.jsx

import React from "react";
// Pastikan Zap diimpor untuk digunakan di Footer
import { X, Menu, Zap, EnvironmentBuilding } from "./Icons"; 


// Komponen Container yang mengatur lebar maksimum konten
export const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);

// HEADER Component
export const Header = ({ isMenuOpen, setIsMenuOpen }) => (
  <header className="sticky top-0 z-50 bg-white shadow-lg w-full border-b border-gray-200">
    <Container>
      <div className="py-4 flex justify-between items-center">
        {/* Logo dan Title */}
        <div className="text-2xl font-bold text-gray-800">
          <a
            href="#home"
            className="flex items-center space-x-3"
          >
            <img
              src="assets/siantartop.png"
              alt="Siantar Top Logo"
              className="h-12 w-auto"
            />
            <div className="hidden md:block border-l border-gray-300 h-8"></div>
            <span className="hidden md:block text-base font-semibold text-gray-800">
              K3 Division
            </span>
          </a>
        </div>
        
        {/* Navigasi Desktop - Diperluas untuk fitur baru */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {/* Mengganti Beranda dengan home, Pilar K3 dengan pillars, dll. */}
          <a href="#home" className="text-gray-700 hover:text-emerald-600 transition">Beranda</a>
          <a href="#about" className="text-gray-700 hover:text-emerald-600 transition">Tentang Kami</a>
          <a href="#pillars" className="text-gray-700 hover:text-emerald-600 transition">Pilar K3</a>
          <a href="#manajemen" className="text-gray-700 hover:text-emerald-600 transition">Manajemen</a>
          <a href="#report" className="text-gray-700 hover:text-emerald-600 transition">Lapor K3</a>
          <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Kontak</a>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (<X className="w-6 h-6" />) : (<Menu className="w-6 h-6" />)}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown - Diperluas */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 w-full bg-white shadow-xl border-b border-gray-200`}
      >
        {["home", "about", "pillars", "manajemen", "report", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsMenuOpen(false)}
            className="px-6 py-3 block text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition font-medium"
          >
            {id === "home" ? "Beranda" : id === "about" ? "Tentang Kami" : id === "pillars" ? "Pilar K3" : id === "manajemen" ? "Manajemen" : id === "report" ? "Lapor K3" : "Kontak"}
          </a>
        ))}
      </div>
    </Container>
  </header>
);

// FOOTER Component
export const Footer = () => (
  <footer id="contact" className="bg-gray-800 text-gray-300 py-12 mt-auto w-full">
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
            Komitmen terhadap keselamatan dan kesehatan kerja adalah prioritas utama kami.
          </p>
        </div>
        {/* Quick Links (Diperluas) */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Akses Cepat</h4>
          <ul className="space-y-2 text-sm">
            {["home", "about", "pillars", "manajemen", "report"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-emerald-400 transition duration-200"
                >
                  {id === "home" ? "Beranda" : id === "about" ? "Tentang Kami" : id === "pillars" ? "Pilar K3" : id === "manajemen" ? "Manajemen K3" : "Lapor K3"}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">...</svg>
              k3@siantartop.com
            </p>
            <p className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">...</svg>
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
          &copy; {new Date().getFullYear()} Siantar Top - Divisi K3. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
);