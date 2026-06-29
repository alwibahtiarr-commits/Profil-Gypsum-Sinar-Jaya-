import React from 'react';
import { ShieldCheck, MessageCircle, Menu, X, Landmark, Compass, Sparkles, MapPin, BadgePercent } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenCalculator: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenCalculator }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: 'beranda', label: 'Beranda', icon: Compass },
    { id: 'profil', label: 'Profil', icon: ShieldCheck },
    { id: 'produk', label: 'Produk', icon: Sparkles },
    { id: 'kontak', label: 'Kontak', icon: MessageCircle },
    { id: 'alamat', label: 'Lokasi & Alamat', icon: MapPin },
  ];

  return (
    <header className="sticky top-0 z-50 bg-off-white/95 backdrop-blur-md border-b border-soft-gray/30 transition-all duration-300 shadow-sm" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => { setActiveTab('beranda'); setIsOpen(false); }}
            id="brand-logo"
          >
            <div className="bg-[#F4EADA] p-1.5 rounded-xl shadow-sm border border-[#E9DFCE] group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="h-8 w-8 select-none" 
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
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-deep-blue uppercase">Sinar Jaya Gypsum</span>
              <span className="text-[10px] font-sans text-gray-500 font-medium uppercase tracking-widest leading-none">Sejak 2005</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    // Scroll to top of window smoothly
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  id={`nav-btn-${item.id}`}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-deep-blue text-white shadow-md shadow-deep-blue/20'
                      : 'text-gray-600 hover:text-deep-blue hover:bg-cream-beige/30'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>



          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2" id="mobile-nav-toggle">
            <button
              onClick={onOpenCalculator}
              className="bg-cream-beige text-deep-blue-dark p-2 rounded-xl border border-deep-blue/10"
              title="Hitung Estimasi"
            >
              <BadgePercent className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-deep-blue p-2 rounded-xl hover:bg-cream-beige/20 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-off-white border-b border-soft-gray/30 px-4 pt-2 pb-6 space-y-2 shadow-inner transition-all duration-300" id="mobile-menu">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl font-medium text-base transition-all ${
                  isActive
                    ? 'bg-deep-blue text-white shadow-md'
                    : 'text-gray-600 hover:text-deep-blue hover:bg-cream-beige/30'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-4 flex flex-col space-y-3 px-2 border-t border-soft-gray/30">
            <button
              onClick={() => {
                onOpenCalculator();
                setIsOpen(false);
              }}
              className="flex items-center justify-center space-x-2 bg-cream-beige text-deep-blue-dark py-3 rounded-xl font-bold text-sm shadow-sm border border-deep-blue/10"
            >
              <BadgePercent className="h-4 w-4" />
              <span>Hitung Estimasi Harga</span>
            </button>
            <a
              href="https://wa.me/6281322025360?text=Halo%20Sinar%20Jaya%20Gypsum,%20saya%20ingin%20konsultasi%20mengenai%20pemasangan%20profil%20gypsum%20untuk%20rumah%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Konsultasi WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
