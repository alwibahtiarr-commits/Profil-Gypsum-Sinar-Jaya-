import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Heart, Shield } from 'lucide-react';

// Import image assets
import heroAlamat from '../assets/images/hero_alamat_1782395322982.jpg';
import heroBeranda from '../assets/images/beranda.jpg';
import heroKontak from '../assets/images/kontak.webp';
import heroProduk from '../assets/images/hero_produk_1782395278842.jpg';
import heroProfil from '../assets/images/profil1.webp';

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
      image: heroBeranda,
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
    <section className="relative overflow-hidden bg-transparent pb-4 md:pb-6" id="main-hero">
      <div className="w-full">
        <div className="flex flex-col items-center">
                    {/* Hero Banner Image */}
          <div className="w-full relative" id="hero-image-container">
            <motion.div
              key={`${activeTab}-image`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-none shadow-xl border-b border-soft-gray/20 aspect-[16/10] sm:aspect-[16/9] md:aspect-[16/8.5] lg:aspect-[16/8] w-full bg-gray-100"
            >
              <img
                src={currentHero.image}
                alt={currentHero.title}
                className="object-cover w-full h-full brightness-135 contrast-[95%] saturate-[105%] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Red gradient overlay covering less height for a subtle effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-600/60 via-red-600/20 to-transparent pointer-events-none" />

              {/* Overlaid Headline and Subtitle inside the photo at the bottom */}
              <div className="absolute inset-0 flex flex-col justify-end pb-6 sm:pb-8 md:pb-12 lg:pb-14 pointer-events-none" id="hero-text-content">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto flex flex-col space-y-2 md:space-y-3">
                  <motion.h1 
                    key={`${activeTab}-title`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-white leading-tight drop-shadow-md max-w-4xl"
                  >
                    {currentHero.title}
                  </motion.h1>
                  <motion.p 
                    key={`${activeTab}-sub`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-sans text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 leading-relaxed max-w-3xl drop-shadow-sm"
                  >
                    {currentHero.sub}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
