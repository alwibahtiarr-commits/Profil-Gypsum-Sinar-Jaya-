import React, { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data';
import { Product } from '../types';
import { Sparkles, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  const [filter, setFilter] = useState<'semua' | 'minimalis' | 'klasik'>('semua');

  const filteredProducts = products.filter(p => {
    if (filter === 'semua') return true;
    return p.type === filter;
  });

  return (
    <div className="py-12 bg-white rounded-3xl shadow-xs px-6 sm:px-8" id="product-catalog-section">
      {/* Title block */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-display font-extrabold text-3xl text-gray-900 tracking-tight">
          Katalog Profil Gypsum Unggulan
        </h2>
        <p className="mt-3 font-sans text-gray-600">
          Kami menyediakan <strong className="text-deep-blue font-semibold">30+ Motif Klasik</strong> dan <strong className="text-deep-blue font-semibold">20+ Model Minimalis</strong> kekinian. 
          Semua harga tertera sudah termasuk <strong className="text-green-600 font-semibold">Gratis Jasa Pasang</strong> dari tukang ahli kami!
        </p>

        {/* Filter Controls */}
        <div className="flex justify-center space-x-2 mt-8">
          {(['semua', 'minimalis', 'klasik'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 capitalize ${
                filter === type
                  ? 'bg-deep-blue text-white shadow-md'
                  : 'bg-off-white text-gray-600 hover:text-deep-blue hover:bg-cream-beige/40'
              }`}
            >
              {type === 'semua' ? 'Semua Motif' : `${type} Modern`}
            </button>
          ))}
        </div>
      </div>

      {/* Guide details about price difference */}
      <div className="bg-cream-beige/30 border border-cream-beige rounded-2xl p-6 mb-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="font-display font-bold text-lg text-deep-blue-dark flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-deep-blue animate-pulse" />
            <span>Panduan Selisih Harga Sinar Jaya Gypsum</span>
          </h4>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Harga dihitung per meter lari (panjang keliling ruangan) dan sudah mencakup bahan baku premium, ongkos tukang cetak, serta jasa pasang rapi.
          </p>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="h-5 w-5 text-deep-blue mt-0.5 shrink-0" />
            <p className="text-sm text-gray-700">
              <strong className="font-bold">Ukuran 7 cm – 12 cm:</strong> Sangat hemat! Selisih harga antar-ukurannya hanya <strong className="text-deep-blue font-semibold">Rp 2.000 / meter</strong>.
            </p>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 className="h-5 w-5 text-deep-blue mt-0.5 shrink-0" />
            <p className="text-sm text-gray-700">
              <strong className="font-bold">Ukuran 14 cm – 20 cm:</strong> Selisih harga berkisar <strong className="text-deep-blue font-semibold">Rp 24.000</strong> (disesuaikan dengan detail kerumitan ukiran).
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="products-grid">
        {filteredProducts.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col bg-off-white/50 border border-soft-gray/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
          >
            {/* Image Wrap */}
            <div className="relative aspect-video sm:aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white shadow-sm ${
                  product.type === 'minimalis' ? 'bg-deep-blue' : 'bg-amber-600'
                }`}>
                  {product.type}
                </span>
                {product.isBestSeller && (
                  <span className="bg-red-500 text-white px-2.5 py-1 rounded-lg text-[11px] font-extrabold uppercase tracking-wider flex items-center space-x-1 shadow-sm">
                    <Sparkles className="h-3 w-3 animate-spin" />
                    <span>BEST SELLER</span>
                  </span>
                )}
              </div>
              
              {product.code && (
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white px-2.5 py-1 rounded-lg text-xs font-mono">
                  Kode: {product.code}
                </div>
              )}
            </div>

            {/* Content info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-gray-900 group-hover:text-deep-blue transition-colors leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 flex items-center space-x-1 font-sans">
                  <span>Ukuran Lebar:</span>
                  <strong className="font-semibold text-gray-700">{product.sizeInCm} cm</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3 leading-relaxed font-sans">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-soft-gray/20">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500 font-sans">Harga + Jasa Pasang:</span>
                  <span className="text-lg font-extrabold text-deep-blue-dark">
                    Rp {product.pricePerMeter.toLocaleString('id-ID')} <span className="text-xs font-normal text-gray-500">/m</span>
                  </span>
                </div>
                
                {/* Simulated Order Button */}
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full mt-4 flex items-center justify-center space-x-2 bg-cream-beige hover:bg-deep-blue hover:text-white text-deep-blue-dark font-bold py-2.5 rounded-xl transition-all text-sm group-hover:border-transparent border border-deep-blue/10"
                >
                  <Bookmark className="h-4 w-4" />
                  <span>Simulasi & Pesan</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
