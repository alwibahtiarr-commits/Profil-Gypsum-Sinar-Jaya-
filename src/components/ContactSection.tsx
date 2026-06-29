import React from 'react';
import { Phone, Instagram, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const faqItems = [
    {
      q: 'Berapa biaya survei pengukuran ke rumah?',
      a: 'Sesuai dengan SOP Sinar Jaya Gypsum, biaya survei dan pengukuran ulang ke lokasi rumah Anda adalah 100% GRATIS alias bebas biaya sepeser pun. Tim kami akan datang membawakan contoh motif fisik agar Anda bisa mencocokkan langsung dengan cat dinding.'
    },
    {
      q: 'Apakah harga list gypsum sudah termasuk upah pasang?',
      a: 'Ya! Seluruh daftar harga produk di Sinar Jaya Gypsum sudah TERMASUK biaya bahan baku premium, ongkos pembuatan cetakan, serta upah jasa pemasangan rapi oleh tim profesional kami. Tidak ada biaya tersembunyi.'
    },
    {
      q: 'Bagaimana sistem pembayarannya?',
      a: 'Kami menggunakan sistem DP 50% di awal sebagai tanda jadi dimulainya proses produksi/pencetakan gypsum. Sisa pembayaran pelunasan 50% baru Anda bayarkan SETELAH pengerjaan selesai terpasang dengan rapi dan Anda puas dengan hasilnya!'
    },
    {
      q: 'Apakah ada jaminan garansi?',
      a: 'Tentu saja! Kami memberikan dua lapis garansi: Garansi penuh selama masa pengerjaan jika ada barang patah/rusak saat dipasang, serta Garansi Pasca-Pasang selama 2 Bulan untuk menjamin kerapihan dan kualitas bahan dari kerusakan alami.'
    }
  ];

  return (
    <div className="space-y-16" id="contact-section">
      
      {/* Centered Connection Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-soft-gray/30 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-sm space-y-6">
          <div>
            <span className="text-xs font-bold text-deep-blue uppercase tracking-widest font-sans">Koneksi Cepat & Langsung</span>
            <h3 className="font-display font-extrabold text-2xl text-gray-900 mt-1 mb-3 leading-tight">Hubungi Kami Secara Instan</h3>
            
            <p className="text-sm text-gray-600 font-sans leading-relaxed mb-6">
              Silakan hubungi Bpk. Ilyas langsung melalui WhatsApp atau ikuti kami di Instagram untuk konsultasi kilat, survei gratis, atau informasi penawaran menarik lainnya.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
              <a 
                href="https://wa.me/6281322025360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-off-white border border-soft-gray/20 rounded-2xl hover:shadow-md transition-all group"
              >
                <div className="bg-[#25D366] text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-xs">
                  <Phone className="h-5 w-5 fill-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Nomor WhatsApp</span>
                  <span className="block font-bold text-gray-800 text-sm mt-0.5">0813-2202-5360</span>
                </div>
              </a>

              <a 
                href="https://instagram.com/gypsum_sinarjaya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-off-white border border-soft-gray/20 rounded-2xl hover:shadow-md transition-all group"
              >
                <div className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-xs">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 font-medium">Official Instagram</span>
                  <span className="block font-bold text-gray-800 text-sm mt-0.5">@gypsum_sinarjaya</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-off-white/50 border border-soft-gray/20 rounded-2xl p-4 flex items-start space-x-3">
            <ShieldCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-600 leading-normal font-sans">
              <span className="font-bold text-gray-900">Privasi Anda Terjamin</span>
              <p className="text-gray-500 mt-0.5">Sinar Jaya Gypsum berkomitmen menjaga kerahasiaan nomor HP dan data alamat rumah Anda. Tidak ada spam / pembagian data.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
