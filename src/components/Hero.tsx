import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, Shield } from 'lucide-react';

// Import image assets
import heroAlamat from '../assets/images/hero_alamat_1782395322982.jpg';
import heroKontak from '../assets/images/hero_kontak_1782395299905.jpg';
import heroProduk from '../assets/images/hero_produk_1782395278842.jpg';
import heroProfil from '../assets/images/hero_profil_1782395261182.jpg';
import pekerjaOriginal from '../assets/images/pekerja_original_full_1782397441850.jpg';

interface HeroProps {
  activeTab: string;
  onOpenCalculator: () => void;
}

export default function Hero({ activeTab, onOpenCalculator }: HeroProps) {
  // Map active tab to hero data
  const heroData: Record<string, {
    title: string;
    sub: string;
    image: string;
    badge: string;
    badgeIcon: React.ElementType;
    ctaLabel?: string;
  }> = {
    beranda: {
      title: 'Wujudkan Ruangan Impian Anda Bersama Ahlinya.',
      sub: 'Spesialis pemasangan dan pengerjaan gypsum interior di Bandung Barat sejak 2005. Menghadirkan plafon rapi, kokoh, dan presisi yang dirancang khusus untuk kenyamanan keluarga muda.',
      image: pekerjaOriginal,
      badge: 'Solusi Profil Gypsum Keluarga',
      badgeIcon: Heart,
      ctaLabel: 'Mulai Konsultasi Gratis'
    },
    profil: {
      title: 'Dedikasi Penuh Untuk Hasil Rapih, Kokoh, Presisi.',
      sub: 'Berbekal ketekunan, kejujuran, dan pengalaman lebih dari 18 tahun, pendiri kami, Bpk. Ilyas merintis Sinar Jaya Gypsum dari bawah demi menciptakan karya interior bermutu tinggi.',
      image: heroProfil,
      badge: 'Perjalanan & Visi Misi Kami',
      badgeIcon: Shield,
    },
    produk: {
      title: 'Apaan Ini Mulus Banget Kaya Istri Gue.',
      sub: 'Koleksi lengkap 30+ motif klasik legendaris dan 20+ model minimalis kekinian. Diuji dengan standar kerapihan tinggi yang cocok dengan tren dekorasi rumah modern saat ini.',
      image: heroProduk,
      badge: 'Katalog Motif & Selisih Harga Hemat',
      badgeIcon: Sparkles,
      ctaLabel: 'Hitung Simulasi Harga'
    },
    kontak: {
      title: 'Mulai Rencana Anda, Konsultasikan Gratis Hari Ini.',
      sub: 'Hubungi Sinar Jaya Gypsum. Kami memberikan layanan SOP transparan tanpa ribet mulai dari konsultasi motif, survei lokasi gratis, hingga garansi pasca-pasang selama 2 bulan penuh.',
      image: heroKontak,
      badge: 'Hubungi Kami & SOP Pelayanan',
      badgeIcon: Calendar,
    },
    alamat: {
      title: 'Workshop Kami Selalu Terbuka Untuk Anda.',
      sub: 'Jl. Raya Ciburuy-Padalarang No. 187, Kabupaten Bandung Barat. Berada tepat di tepi jalan provinsi yang strategis dan sangat mudah ditemukan. Kami juga menjangkau pemasangan luar kota.',
      image: heroAlamat,
      badge: 'Lokasi Strategis & Area Layanan',
      badgeIcon: Shield,
    },
  };

  const currentHero = heroData[activeTab] || heroData.beranda;
  const BadgeIcon = currentHero.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-beige/25 to-off-white pb-12 pt-6 md:py-16" id="main-hero">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
                    {/* Hero Banner Image */}
          <div className="w-full relative" id="hero-image-container">
            <motion.div
              key={`${activeTab}-image`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[16/9] w-full bg-gray-100"
            >
              <img
                src={currentHero.image}
                alt={currentHero.title}
                className="object-cover w-full h-full brightness-165 contrast-[85%] saturate-[105%] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Blue gradient overlay covering exactly half of the photo for beautiful depth and text contrast */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-deep-blue-dark/95 via-deep-blue/50 to-transparent pointer-events-none" />

              {/* Overlaid Headline and Subtitle inside the photo (smaller size) */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end space-y-1.5 sm:space-y-2" id="hero-text-content">
                <motion.h1 
                  key={`${activeTab}-title`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display font-extrabold text-base sm:text-xl md:text-2xl lg:text-3xl tracking-tight text-white leading-tight drop-shadow-md"
                >
                  {currentHero.title}
                </motion.h1>
                <motion.p 
                  key={`${activeTab}-sub`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-sans text-[10px] sm:text-xs md:text-sm text-white/90 leading-relaxed max-w-2xl drop-shadow-sm"
                >
                  {currentHero.sub}
                </motion.p>
              </div>
            </motion.div>
            
            {/* Visual Decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cream-beige/50 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-deep-blue/10 rounded-full blur-xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
