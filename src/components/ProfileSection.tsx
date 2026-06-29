import React from 'react';
import { motion } from 'motion/react';
import { sopSteps, testimonials } from '../data';
import { ShieldCheck, Flame, Users, CalendarCheck, Smile, Star, ArrowRight, BookOpen } from 'lucide-react';

export default function ProfileSection() {
  return (
    <div className="space-y-16" id="profile-section">
      
      {/* Brand Origin Story */}
      <div className="bg-white rounded-3xl border border-soft-gray/30 p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center space-x-2 bg-cream-beige/50 border border-deep-blue/10 px-3 py-1 rounded-full text-xs font-semibold text-deep-blue-dark">
            <BookOpen className="h-4 w-4" />
            <span>Kisah Sukses UMKM Sinar Jaya Gypsum</span>
          </div>
          
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

        {/* Story Illustration Grid */}
        <div className="lg:col-span-5 bg-off-white rounded-2xl border border-soft-gray/20 p-6 flex flex-col justify-center space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-deep-blue text-white p-3 rounded-xl shadow-xs">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-950">Tim Terlatih</h4>
              <p className="text-xs text-gray-500 font-sans">Semua ditangani tenaga ahli berpengalaman proyek besar.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-deep-blue text-white p-3 rounded-xl shadow-xs">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-950">Bahan Premium Anti Abal-Abal</h4>
              <p className="text-xs text-gray-500 font-sans">Menggunakan cor semen plaster kualitas super, kokoh & kuat.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-deep-blue text-white p-3 rounded-xl shadow-xs">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-gray-950">Bergaransi Penuh</h4>
              <p className="text-xs text-gray-500 font-sans">Garansi pengerjaan selesai rapi & pasca-pemasangan 2 bulan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div id="visi-misi" className="scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visi */}
        <div className="bg-deep-blue text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-start space-y-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cream-beige/80 font-sans">Visi Sinar Jaya Gypsum</span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl mt-2 mb-2">Penyedia Solusi Ruangan Estetis & Fungsional</h3>
          </div>
          <div className="space-y-4 text-base sm:text-lg font-sans text-cream-beige/90 leading-relaxed">
            <p className="border-l-2 border-cream-beige pl-4">
              Menjadi andalan penyedia solusi ruangan yang estetis dan fungsional melalui integrasi material gypsum berkualitas tinggi.
            </p>
            <p className="border-l-2 border-cream-beige pl-4">
              Menjadi pelopor solusi interior gypsum yang mengutamakan kualitas, estetika, dan ketepatan dalam pengerjaan.
            </p>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-white rounded-3xl border border-soft-gray/30 p-6 sm:p-8 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-deep-blue/80 font-sans">Misi Sinar Jaya Gypsum</span>
          <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900 mt-2 mb-6">Prinsip Kerja & Jaminan Kami</h3>
          
          <ul className="space-y-4 text-sm sm:text-base text-gray-600 font-sans">
            <li className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-700 p-1 rounded-full shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>Menggunakan bahan yang berkualitas anti abal-abal.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-700 p-1 rounded-full shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>Pengerjaan detail dan rapi karena ditangani sama tim yang ahlinya.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-700 p-1 rounded-full shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span>Memberikan hasil pengerjaan yang rapi, presisi, dan tahan lama.</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-700 p-1 rounded-full shrink-0 mt-0.5">
                <ShieldCheck className="h-4 w-4" />
              </div>
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
          <div className="bg-white/80 backdrop-blur-xs border border-rose-200 rounded-2xl p-4 shrink-0 shadow-xs max-w-xs space-y-3 font-sans">
            <div className="flex items-start space-x-2 text-xs">
              <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
              <p className="text-gray-700">
                <strong className="font-bold text-gray-900">Selama Pengerjaan:</strong> Jika ada barang patah/kurang bahan saat dipasang, semuanya tanggung jawab kami sepenuhnya.
              </p>
            </div>
            <div className="flex items-start space-x-2 text-xs">
              <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
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

      {/* Testimonials */}
      <div className="bg-off-white/40 border border-soft-gray/20 rounded-3xl p-6 sm:p-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-gray-900">
            Kesan Hangat Keluarga Muda
          </h3>
          <p className="mt-2 text-sm text-gray-500 font-sans">
            Cerita kepuasan pelanggan yang mempercayakan dekorasi atap rumahnya pada Sinar Jaya Gypsum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div key={test.id} className="bg-white border border-soft-gray/20 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 font-sans leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-soft-gray/20 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-gray-900">{test.name}</h4>
                  <p className="text-[10px] text-gray-500 font-sans font-semibold leading-none mt-0.5">{test.role}</p>
                </div>
                {test.location && (
                  <span className="text-[9px] text-deep-blue font-bold font-sans uppercase tracking-widest bg-deep-blue/5 px-2 py-0.5 rounded-sm">
                    {test.location.split(',')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
