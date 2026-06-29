import { Product, SOPStep, Testimonial, PortfolioItem } from './types';

export const products: Product[] = [
  {
    id: 'mkn-piano',
    name: 'List Gypsum Piano Minimalis',
    type: 'minimalis',
    sizeInCm: 13,
    pricePerMeter: 24000,
    isBestSeller: true,
    code: 'Mkn-piano',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    description: 'Lis profil dengan pola garis vertikal bertingkat mirip tuts piano. Sangat diminati pasangan muda yang menyukai gaya hunian modern scandinavian dan minimalis bersih.'
  },
  {
    id: 'kiki-8',
    name: 'List Gypsum Minimalis Polos Kiki',
    type: 'minimalis',
    sizeInCm: 8,
    pricePerMeter: 13000,
    isBestSeller: true,
    code: 'POLOS-KIKI-8',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    description: 'Profil gypsum polos berukuran sedang yang memberikan kesan rapi, tegas, dan lapang pada atap rumah dengan plafon rendah.'
  },
  {
    id: 'classic-floral-16',
    name: 'List Gypsum Klasik Ukiran Mawar',
    type: 'klasik',
    sizeInCm: 16,
    pricePerMeter: 38000,
    isBestSeller: false,
    code: 'CLS-FLR-16',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80',
    description: 'Ukiran kelopak mawar klasik legendaris yang mewah dan megah. Sangat cocok untuk ruang tamu utama dengan plafon tinggi agar terlihat mewah dan bernilai seni tinggi.'
  },
  {
    id: 'l-100-a',
    name: 'List Gypsum Klasik L-100 A',
    type: 'klasik',
    sizeInCm: 13,
    pricePerMeter: 28000,
    isBestSeller: true,
    code: 'L-100-A',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    description: 'Kombinasi lis klasik bergelombang dengan ornamen relief yang presisi. Menghadirkan keseimbangan estetika mewah tapi tidak berlebihan.'
  },
  {
    id: 'minimalis-step-10',
    name: 'List Gypsum Minimalis Trap 3-Step',
    type: 'minimalis',
    sizeInCm: 10,
    pricePerMeter: 18000,
    isBestSeller: true,
    code: 'TRP-3-10',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
    description: 'Lis profil minimalis dengan 3 trap siku-siku bertingkat. Sangat mudah dibersihkan dan memberikan aksen modern yang kuat.'
  },
  {
    id: 'classic-bead-7',
    name: 'List Gypsum Klasik Manik Cantik',
    type: 'klasik',
    sizeInCm: 7,
    pricePerMeter: 12000,
    isBestSeller: false,
    code: 'CLS-BD-7',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    description: 'Profil gypsum klasik berukuran kecil dengan deretan ukiran manik-manik melingkar yang anggun. Cocok untuk kamar tidur anak atau ruangan santai.'
  },
  {
    id: 'minimalis-shadow-14',
    name: 'List Gypsum Shadowline Flat',
    type: 'minimalis',
    sizeInCm: 14,
    pricePerMeter: 26000,
    isBestSeller: false,
    code: 'SHD-FLT-14',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80',
    description: 'Molding flat lebar dengan efek bayangan (shadowline) minimalis di bagian tepi. Menciptakan ilusi atap melayang (floating ceiling) yang kekinian.'
  },
  {
    id: 'classic-roman-20',
    name: 'List Gypsum Klasik Roman Megah',
    type: 'klasik',
    sizeInCm: 20,
    pricePerMeter: 48000,
    isBestSeller: true,
    code: 'CLS-ROM-20',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',
    description: 'Ukiran pilar Romawi megah berdiameter lebar 20 cm. Dirancang khusus untuk ruang aula atau rumah bergaya Klasik Eropa yang megah.'
  }
];

export const sopSteps: SOPStep[] = [
  {
    number: 1,
    title: 'Konsultasi Gratis',
    description: 'Diskusi santai mengenai harga, pilihan motif favorit yang sesuai dengan tipe rumah Anda, dan hitung estimasi awal kebutuhan meteran.',
    badge: 'Santai & Ramah'
  },
  {
    number: 2,
    title: 'Survei Akurat & Presisi',
    description: 'Tim ahli kami akan datang langsung ke rumah Anda untuk melakukan pengukuran ulang plafon secara presisi (Tanpa Biaya / Gratis Biaya Ukur).',
    badge: '100% Gratis'
  },
  {
    number: 3,
    title: 'DP 50% Sebagai Tanda Jadi',
    description: 'Pembayaran uang muka (down payment) sebesar 50% untuk mulai memproses pencetakan custom atau persiapan material pengerjaan.',
    badge: 'Aman & Transparan'
  },
  {
    number: 4,
    title: 'Pemasangan & Pelunasan',
    description: 'Jika produk ready, besok bisa langsung pasang. Sisa pembayaran 50% baru Anda lunasi setelah pengerjaan terpasang rapi dan Anda puas!',
    badge: 'Bayar Setelah Selesai'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Bagas & Dinda',
    role: 'Pasangan Muda Baru Menikah',
    location: 'Perumahan Baru, Padalarang',
    comment: 'Sangat puas dengan motif minimalis tuts piano dari Sinar Jaya Gypsum! Ruang tamu kami jadi terasa jauh lebih tinggi dan mewah. Pemasangannya super cepat, rapi, dan harganya sangat bersahabat untuk kami yang baru saja mencicil rumah.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Ibu Citra Amalia',
    role: 'Ibu Rumah Tangga / Kreator Konten',
    location: 'Kopo, Bandung',
    comment: 'Pekerjanya sangat sopan dan profesional. Mereka menjaga kebersihan selama pengerjaan, tidak ada gypsum berserakan. Yang paling saya suka adalah sistem pembayaran akhir dilunasi setelah terpasang dengan rapi. Garansinya 2 bulan bikin tenang!',
    rating: 5
  },
  {
    id: 't3',
    name: 'Pak Rian & Keluarga',
    role: 'Pemilik Rumah Baru',
    location: 'Cimahi, Bandung Barat',
    comment: 'Awalnya bingung pilih ukuran untuk plafon 3 meter. Setelah konsultasi gratis, disarankan pakai ukuran 10 cm minimalis trap agar tidak sumpek. Hasilnya presisi banget, sudut-sudutnya mulus rapi. Sangat direkomendasikan untuk keluarga muda!',
    rating: 5
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Ruang Tamu Scandinavian Minimalis',
    description: 'Pemasangan Lis Gypsum Piano 13cm dengan kombinasi indirect warm lighting untuk kesan hangat keluarga muda.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    type: 'Minimalis'
  },
  {
    id: 'p2',
    title: 'Kamar Tidur Utama Modern Cozy',
    description: 'Lis Gypsum Polos Kiki 8cm memberikan aksen tegas di sekeliling plafon, membuat kamar tidur terasa tenang dan lapang.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    type: 'Minimalis'
  },
  {
    id: 'p3',
    title: 'Ruang Makan Klasik Eropa Modern',
    description: 'Lis Ukiran L-100 A dengan paduan lampu gantung kristal menciptakan suasana makan malam yang mewah dan elegan.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80',
    type: 'Klasik'
  },
  {
    id: 'p4',
    title: 'Ruang Keluarga Klasik Mewah',
    description: 'Desain plafon megah dengan Lis Gypsum Roman 20cm ditambah pengerjaan ornamen sudut yang sangat rapi dan presisi.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    type: 'Klasik'
  }
];
