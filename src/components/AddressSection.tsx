import React from 'react';
import { MapPin, Phone, Instagram, Clock, Truck, Globe, Map } from 'lucide-react';

export default function AddressSection() {
  const coverageAreas = [
    { name: 'Bandung Barat (Lokal)', desc: 'Cakupan utama: Padalarang, Batujajar, Ngamprah, Cikalongwetan, Cililin.' },
    { name: 'Bandung Raya & Cimahi', desc: 'Survei lokasi gratis & pengerjaan cepat langsung ke alamat perumahan Anda.' },
    { name: 'Luar Kota (Volume Tinggi)', desc: 'Melayani proyek volume tinggi ke Tasikmalaya, Bekasi, Cirebon, hingga Kuningan.' }
  ];

  return (
    <div className="space-y-12" id="address-section">
      
      {/* Location Details Container */}
      <div className="max-w-4xl mx-auto flex flex-col space-y-6">
        
        {/* Mock Map & Area Coverage */}
        <div className="w-full flex flex-col justify-between space-y-6">
          {/* Visual Map Container */}
          <div className="bg-white border border-soft-gray/30 rounded-3xl p-5 shadow-xs relative overflow-hidden flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-sans">Peta Lokasi Workshop</span>
              <a 
                href="https://maps.google.com/?q=Sinar+Jaya+Gypsum+Padalarang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-deep-blue hover:underline font-semibold flex items-center space-x-1"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>Buka Aplikasi Google Maps</span>
              </a>
            </div>

            {/* Simulated Map Graphic */}
            <div className="bg-cream-beige/15 border border-soft-gray/20 rounded-2xl p-4 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[220px]">
              {/* Decorative Map Grid Lines */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4b6587_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="z-10 flex flex-col items-center">
                <div className="bg-deep-blue text-white p-3.5 rounded-full shadow-lg shadow-deep-blue/20 mb-3 animate-bounce">
                  <MapPin className="h-7 w-7" />
                </div>
                <h4 className="font-display font-extrabold text-gray-900 text-lg leading-tight">SINAR JAYA GYPSUM</h4>
                <p className="text-xs text-gray-500 max-w-sm mt-1.5 font-sans leading-relaxed">
                  Jl. Raya Ciburuy-Padalarang No. 187, Ciburuy, Padalarang, Kabupaten Bandung Barat
                </p>
                
                {/* Map Coordinates detail */}
                <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded-md mt-3 inline-block">
                  Latitude: -6.839841 | Longitude: 107.458925
                </span>

                {/* Direct Google Maps Iframe simulation */}
                <a 
                  href="https://maps.google.com/?q=-6.839841,107.458925" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-deep-blue hover:bg-deep-blue-dark text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-sm"
                >
                  Dapatkan Petunjuk Arah Jalan
                </a>
              </div>
            </div>
          </div>

          {/* Coverage Area Cards */}
          <div className="bg-white border border-soft-gray/30 rounded-3xl p-5 shadow-xs">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-sans flex items-center space-x-2">
              <Truck className="h-4 w-4 text-deep-blue" />
              <span>Jangkauan Area Pemasangan Sinar Jaya Gypsum</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="bg-off-white/60 border border-soft-gray/20 rounded-2xl p-4 flex flex-col justify-between">
                  <div>
                    <h5 className="font-display font-bold text-gray-900 text-sm">{area.name}</h5>
                    <p className="text-xs text-gray-500 mt-1.5 font-sans leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                  <span className="text-[9px] text-green-700 bg-green-50 font-bold px-2 py-0.5 rounded-sm w-fit mt-3 uppercase tracking-wider">
                    Aktif Terlayani
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
