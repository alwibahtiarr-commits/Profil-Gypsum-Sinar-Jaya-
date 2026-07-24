import React from 'react';
import { motion } from 'motion/react';
import { sopSteps, testimonials } from '../data';
import { ShieldCheck, Flame, Users, CalendarCheck, Smile, Star, ArrowRight, BookOpen } from 'lucide-react';

export default function ProfileSection() {
  return (
    <div className="space-y-16" id="profile-section">
      
      {/* Brand Origin Story */}
      <div className="py-4">
        <div className="space-y-5">
          
          <h2 className="font-display font-extrabold text-3xl text-gray-900 tracking-tight leading-snug">
            Perjuangan Bpk. Ilyas Mendekorasi Rumah Bangsa Sejak 2005
          </h2>
          
          <div className="space-y-4 text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
            <p>
              Didirikan oleh <strong className="text-gray-900 font-semibold">Bpk. Ilyas</strong>, seorang perantau tangguh asal Singaparna, Tasikmalaya yang merantau ke Bandung pada tahun 1998. Sebelum berkecimpung di industri gypsum, beliau sempat bekerja di sebuah pabrik cokelat namun terkena pemutusan kontrak kerja.
            </p>
            <p>
              Alih-alih menyerah, Bpk. Ilyas mengambil peluang baru sebagai pekerja kasar proyek gypsum. Dari sanalah beliau belajar teknik pemasangan secara mandiri, pengolahan material plaster, hingga pengerjaan detail interior langsung di lapangan. 
            </p>
            <p>
              Dengan ketekunan yang tinggi serta berbekal latar belakang keluarga yang berpengalaman di dunia proyek pembangunan sekolah dan jembatan, Bpk. Ilyas memberanikan diri merintis usaha mandiri. Hingga akhirnya resmi meluncurkan <strong className="text-deep-blue font-bold">Sinar Jaya Gypsum pada tahun 2005</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div id="visi-misi" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi */}
        <div className="flex flex-col justify-start space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-deep-blue/80 font-sans">Visi Sinar Jaya Gypsum</span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl mt-2 mb-2 text-gray-900">Penyedia Solusi Ruangan Estetis & Fungsional</h3>
          </div>
          <div className="space-y-4 text-base sm:text-lg font-sans text-gray-600 leading-relaxed">
            <p>
              Menjadi andalan penyedia solusi ruangan yang estetis dan fungsional melalui integrasi material gypsum berkualitas tinggi.
            </p>
            <p>
              Menjadi pelopor solusi interior gypsum yang mengutamakan kualitas, estetika, dan ketepatan dalam pengerjaan.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="py-4">
          <span className="text-xs font-bold uppercase tracking-widest text-deep-blue/80 font-sans">Misi Sinar Jaya Gypsum</span>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900 mt-2 mb-6">Prinsip Kerja & Jaminan Kami</h3>
          
          <ul className="space-y-4 text-sm sm:text-base text-gray-600 font-sans">
            <li>
              <span>Menggunakan bahan yang berkualitas anti abal-abal.</span>
            </li>
            <li>
              <span>Pengerjaan detail dan rapi karena ditangani sama tim yang ahlinya.</span>
            </li>
            <li>
              <span>Memberikan hasil pengerjaan yang rapi, presisi, dan tahan lama.</span>
            </li>
            <li>
              <span>Mengutamakan kerapihan, keamanan, dan kepuasan pelanggan.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Garansi Section */}
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-bold font-sans uppercase">Jaminan Garansi Tanpa Khawatir</span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-rose-950 mt-1">Kami Cover Penuh Risiko Pemasangan</h3>
            <p className="text-sm text-rose-800 max-w-2xl font-sans">
              Kami berkomitmen memberikan ketenangan hati untuk seluruh pelanggan keluarga muda dengan jaminan kualitas berlapis.
            </p>
          </div>
          <div className="shrink-0 max-w-xs space-y-3 font-sans">
            <div className="text-xs">
              <p className="text-gray-700">
                <strong className="font-bold text-gray-900">Selama Pengerjaan:</strong> Jika ada barang patah/kurang bahan saat dipasang, semuanya tanggung jawab kami sepenuhnya.
              </p>
            </div>
            <div className="text-xs">
              <p className="text-gray-700">
                <strong className="font-bold text-gray-900">Pasca-Pasang (2 Bulan):</strong> Ada kesalahan pasang/cacat bahan? Kami ganti & perbaiki gratis selama 2 bulan setelah selesai.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SOP Pelayanan Section */}
      <div>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Langkah Mudah Memesan (SOP Pelayanan Kami)
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-sans">
            Kami menjamin proses pemesanan yang transparan, amanah, dan tanpa ribet untuk Anda sekeluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sopSteps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl border border-soft-gray/30 p-5 shadow-xs relative flex flex-col justify-between">
              <div>
                <div className="absolute top-4 right-4 bg-cream-beige/50 text-deep-blue text-xs font-extrabold px-2 py-0.5 rounded-full font-mono">
                  SOP-0{step.number}
                </div>
                
                <span className="text-3xl font-extrabold font-display text-deep-blue-light">
                  0{step.number}
                </span>
                
                <h4 className="font-display font-bold text-gray-900 text-lg mt-3">
                  {step.title}
                </h4>
                
                <p className="text-xs text-gray-600 mt-2 font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.badge && (
                <div className="mt-4 pt-3 border-t border-soft-gray/20">
                  <span className="bg-deep-blue/5 text-deep-blue px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {step.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>



    </div>
  );
}
