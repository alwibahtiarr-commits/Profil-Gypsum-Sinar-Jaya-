/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Calculator from './components/Calculator';
import ProfileSection from './components/ProfileSection';
import AddressSection from './components/AddressSection';
import ContactSection from './components/ContactSection';
import { Product } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  PhoneCall, 
  MapPin, 
  Clock, 
  BadgeCheck, 
  Heart, 
  Briefcase,
  ChevronRight,
  Calculator as CalcIcon,
  X
} from 'lucide-react';
import { portfolioItems } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [selectedProductForCalc, setSelectedProductForCalc] = useState<Product | null>(null);

  // Trigger calculator modal with pre-selected product
  const handleSelectProduct = (product: Product) => {
    setSelectedProductForCalc(product);
    setIsCalculatorOpen(true);
  };

  const handleOpenCalculatorWithDefault = () => {
    setSelectedProductForCalc(null);
    setIsCalculatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col font-sans text-gray-800" id="app-root">
      


      {/* Persistent Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenCalculator={handleOpenCalculatorWithDefault}
      />

      {/* Dynamic Visual Hero Section (Each page has its own initial image banner) */}
      <Hero 
        activeTab={activeTab} 
        onOpenCalculator={handleOpenCalculatorWithDefault}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Beranda Page Content */}
            {activeTab === 'beranda' && (
              <div className="space-y-16" id="beranda-content">
                {/* 3 Core Highlights/Selling Points for Young Families */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white border border-soft-gray/30 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3">
                    <div className="bg-cream-beige/50 text-deep-blue p-3.5 rounded-full">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900">Garansi Penuh 2 Bulan</h3>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      Kami menanggung penuh garansi kualitas selama pengerjaan berlangsung hingga 2 bulan penuh pasca-pemasangan selesai.
                    </p>
                  </div>

                  <div className="bg-white border border-soft-gray/30 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3">
                    <div className="bg-cream-beige/50 text-deep-blue p-3.5 rounded-full animate-pulse">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900">Hasil Rapi & Presisi</h3>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      Plafon rumah modern rapi tanpa cacat. Sangat teliti dalam memproses cetakan dan memoles sambungan agar terlihat menyatu sempurna.
                    </p>
                  </div>

                  <div className="bg-white border border-soft-gray/30 rounded-2xl p-6 shadow-xs flex flex-col items-center text-center space-y-3">
                    <div className="bg-cream-beige/50 text-deep-blue p-3.5 rounded-full">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-gray-900">Konsultasi & Survei Gratis</h3>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      Layanan konsultasi motif, pengukuran, dan perhitungan estimasi budget 100% gratis ke rumah Anda tanpa biaya komitmen.
                    </p>
                  </div>
                </div>



                {/* Portfolio Showcase Section */}
                <div className="bg-white rounded-3xl border border-soft-gray/30 p-6 sm:p-8 space-y-8">
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="font-display font-extrabold text-2xl text-gray-900">Hasil Pemasangan Nyata Kami</h3>
                    <p className="text-sm text-gray-500 font-sans mt-1">Kami menghadirkan bukti bukan janji. Berikut adalah dokumentasi pengerjaan interior riil kami.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioItems.map((item) => (
                      <div key={item.id} className="relative overflow-hidden rounded-2xl border border-soft-gray/20 bg-off-white/50 flex flex-col">
                        <div className="aspect-video relative overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-3 left-3 bg-deep-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                            {item.type}
                          </span>
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-display font-bold text-gray-900 text-sm leading-snug">{item.title}</h4>
                            <p className="text-xs text-gray-500 font-sans mt-1.5 leading-relaxed">{item.description}</p>
                          </div>
                          <span className="text-[10px] text-deep-blue font-bold tracking-wider uppercase mt-4 block">Pengerjaan 100% Mulus</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            )}

            {/* Profil Page Content */}
            {activeTab === 'profil' && <ProfileSection />}

            {/* Produk Page Content */}
            {activeTab === 'produk' && (
              <ProductCatalog onSelectProduct={handleSelectProduct} />
            )}

            {/* Kontak Page Content */}
            {activeTab === 'kontak' && <ContactSection />}

            {/* Alamat/Lokasi Page Content */}
            {activeTab === 'alamat' && <AddressSection />}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Interactive Calculator Modal/Dialog */}
      <AnimatePresence>
        {isCalculatorOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto" id="calc-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setIsCalculatorOpen(false)}
            />
            
            {/* Modal Box */}
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                className="relative w-full max-w-4xl z-55"
              >
                <Calculator 
                  initialSelectedProduct={selectedProductForCalc} 
                  onClose={() => setIsCalculatorOpen(false)}
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Section */}
      <footer className="bg-[#1C2836] text-gray-400 pt-16 pb-8 border-t border-gray-800" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Footer Brand Info */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="bg-[#F4EADA] p-1.5 rounded-xl border border-[#E9DFCE] flex items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="h-6 w-6 select-none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* S */}
                    <path 
                      d="M 31,18 C 21,18 13,23 9,33 L 21,37 C 23,31 26,28 31,28 C 35,28 38,30 38,34 C 38,38 35,40 28,43 C 17,47 11,52 11,63 C 11,73 19,79 30,79 C 40,79 47,74 50,64 L 38,60 C 36,64 34,67 30,67 C 26,67 23,65 23,62 C 23,58 26,56 33,53 C 44,49 50,44 50,34 C 50,24 42,18 31,18 Z" 
                      fill="#2151B0" 
                      transform="translate(59, 0) scale(-1, 1)"
                    />
                    {/* j body */}
                    <path 
                      d="M 68,32 H 82 V 70 C 82,82 77,88 64,88 C 57,88 51,85 51,79 L 51,75 H 63 C 63,77 65,78 67,78 C 69,78 70,76 70,70 V 32 Z" 
                      fill="#2151B0" 
                    />
                    {/* red square dot */}
                    <rect 
                      x="68" 
                      y="12" 
                      width="14" 
                      height="14" 
                      fill="#D2232A" 
                    />
                  </svg>
                </div>
                <span className="font-display font-extrabold text-lg tracking-tight uppercase">Sinar Jaya Gypsum</span>
              </div>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Penyedia jasa pemasangan, cetak custom, dan suplai list profil gypsum berkualitas premium di Kabupaten Bandung Barat. Terpercaya melayani ratusan hunian keluarga muda sejak tahun 2005.
              </p>
              <div className="flex items-center space-x-2 text-xs text-cream-beige font-sans">
                <BadgeCheck className="h-4 w-4 text-green-500" />
                <span>Legalitas Terdaftar (RT/RW & Warga Setempat)</span>
              </div>
            </div>

            {/* Opening Hours Info */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-white font-display font-semibold text-sm">Jam Pelayanan</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-deep-blue-light" />
                  <span>Senin – Sabtu: 08:00 – 17:00 WIB</span>
                </li>
                <li className="flex items-center space-x-2 text-green-500">
                  <MessageCircle className="h-4 w-4" />
                  <span>WA Online Chat: 24 Jam Non-Stop</span>
                </li>
              </ul>
            </div>

            {/* Contact Info Footer Column */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-white font-display font-semibold text-sm">Hubungi Langsung</h4>
              <ul className="space-y-2 text-xs font-sans">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-deep-blue-light mt-0.5" />
                  <span className="leading-relaxed text-gray-400">Jl. Raya Ciburuy-Padalarang No. 187, Bandung Barat</span>
                </li>
                <li>
                  <a href="https://wa.me/6281322025360" className="text-cream-beige hover:underline block font-semibold">
                    WA: 0813-2202-5360
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/gypsum_sinarjaya" className="text-cream-beige hover:underline block">
                    IG: @gypsum_sinarjaya
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright Area */}
          <div className="pt-8 border-t border-gray-800 text-center text-[11px] text-gray-500 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© 2026 Sinar Jaya Gypsum. Muhamad Alwi Bahtiar_51923059</p>
            <p className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
              <span>for Young Families in Indonesia</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
