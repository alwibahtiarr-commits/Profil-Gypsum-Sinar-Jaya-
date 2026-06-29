import React, { useState, useEffect } from 'react';
import { products } from '../data';
import { Product } from '../types';
import { Calculator as CalcIcon, Percent, BadgeAlert, CheckCircle, MessageCircle, HelpCircle, X } from 'lucide-react';

interface CalculatorProps {
  initialSelectedProduct?: Product | null;
  onClose?: () => void;
}

export default function Calculator({ initialSelectedProduct, onClose }: CalculatorProps) {
  const [selectedProductId, setSelectedProductId] = useState<string>('');
  const [roomLength, setRoomLength] = useState<number>(4);
  const [roomWidth, setRoomWidth] = useState<number>(3);
  const [customMeters, setCustomMeters] = useState<number>(0);
  const [calculationMode, setCalculationMode] = useState<'perimeter' | 'linear'>('perimeter');
  const [clientName, setClientName] = useState<string>('');
  const [clientAddress, setClientAddress] = useState<string>('');

  // Set initial product if provided
  useEffect(() => {
    if (initialSelectedProduct) {
      setSelectedProductId(initialSelectedProduct.id);
    } else if (products.length > 0 && !selectedProductId) {
      setSelectedProductId(products[0].id);
    }
  }, [initialSelectedProduct]);

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];

  // Calculate parameters
  const perimeter = (roomLength * 2) + (roomWidth * 2);
  const totalMeters = calculationMode === 'perimeter' ? perimeter : customMeters;
  
  // Calculate discount rate
  let discountPercent = 0;
  if (totalMeters >= 100) {
    discountPercent = 6;
  } else if (totalMeters >= 60) {
    discountPercent = 4;
  } else if (totalMeters >= 30) {
    discountPercent = 2;
  }

  // Calculate cost
  const rawCost = totalMeters * (selectedProduct?.pricePerMeter || 0);
  const discountAmount = rawCost * (discountPercent / 100);
  const finalCost = rawCost - discountAmount;
  const downPayment = finalCost * 0.5;
  const finalPayment = finalCost * 0.5;

  // Generate WhatsApp Message Link
  const handleWhatsAppOrder = () => {
    const formattedPrice = (price: number) => `Rp ${Math.round(price).toLocaleString('id-ID')}`;
    
    const message = `Halo Sinar Jaya Gypsum! Saya ingin berkonsultasi dan memesan pemasangan profil gypsum untuk rumah saya.

*Detail Pelanggan:*
- Nama: ${clientName || 'Pelanggan'}
- Alamat/Lokasi: ${clientAddress || '-'}

*Detail Pemesanan:*
- Motif Pilihan: ${selectedProduct?.name} (${selectedProduct?.code || '-'})
- Lebar Profil: ${selectedProduct?.sizeInCm} cm
- Tipe/Gaya: ${selectedProduct?.type === 'minimalis' ? 'Minimalis Modern' : 'Klasik'}
- Mode Hitung: ${calculationMode === 'perimeter' ? `Perimeter Ruangan (${roomLength}m x ${roomWidth}m)` : `Panjang Kustom`}
- Total Kebutuhan: ${totalMeters} meter lari

*Estimasi Rincian Biaya:*
- Harga Permeter: ${formattedPrice(selectedProduct?.pricePerMeter || 0)}/meter (Sudah Termasuk Jasa Pasang)
- Subtotal: ${formattedPrice(rawCost)}
- Diskon Pembelian Banyak: ${discountPercent}% (-${formattedPrice(discountAmount)})
- *Total Akhir:* *${formattedPrice(finalCost)}*
- *DP 50% (Tanda Jadi):* *${formattedPrice(downPayment)}*
- *Pelunasan 50% (Setelah Pasang Rapi):* *${formattedPrice(finalPayment)}*

Apakah bisa dijadwalkan untuk survei pengukuran presisi ke lokasi saya? Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281322025360?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl border border-soft-gray/30 p-6 sm:p-8 shadow-xl max-w-4xl mx-auto" id="estimator-calculator">
      <div className="flex justify-between items-center pb-4 border-b border-soft-gray/20 mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-deep-blue text-white p-2.5 rounded-xl shadow-xs">
            <CalcIcon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl text-gray-900 leading-tight">
              Kalkulator Estimasi Biaya Pemesanan
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-0.5">
              Simulasi budget transparan khusus keluarga muda.
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-off-white rounded-xl transition-all"
            title="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Input Fields */}
        <div className="lg:col-span-7 space-y-5">
          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Nama Anda</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Contoh: Bagas"
                className="w-full bg-off-white border border-soft-gray/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Alamat / Area Rumah</label>
              <input
                type="text"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                placeholder="Contoh: Kopo, Bandung"
                className="w-full bg-off-white border border-soft-gray/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans"
              />
            </div>
          </div>

          {/* Product Select */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Pilih Motif Gypsum</label>
            <select
              value={selectedProductId}
              onChange={(e) => setSelectedProductId(e.target.value)}
              className="w-full bg-off-white border border-soft-gray/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans font-medium"
            >
              {products.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.sizeInCm} cm) - Rp {p.pricePerMeter.toLocaleString('id-ID')}/m
                </option>
              ))}
            </select>
          </div>

          {/* Calculation Mode Toggle */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">Metode Perhitungan</label>
            <div className="grid grid-cols-2 gap-2 bg-off-white p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setCalculationMode('perimeter')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  calculationMode === 'perimeter'
                    ? 'bg-white text-deep-blue shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Ukuran Kamar (Keliling)
              </button>
              <button
                type="button"
                onClick={() => setCalculationMode('linear')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                  calculationMode === 'linear'
                    ? 'bg-white text-deep-blue shadow-xs'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                Meter Lari Langsung
              </button>
            </div>
          </div>

          {/* Size inputs based on mode */}
          {calculationMode === 'perimeter' ? (
            <div className="grid grid-cols-2 gap-4 bg-cream-beige/10 border border-cream-beige/25 rounded-2xl p-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Panjang Ruangan (Meter)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.5"
                    value={roomLength}
                    onChange={(e) => setRoomLength(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-soft-gray/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400 text-xs">M</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Lebar Ruangan (Meter)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    step="0.5"
                    value={roomWidth}
                    onChange={(e) => setRoomWidth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white border border-soft-gray/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans"
                  />
                  <span className="absolute right-3 top-2.5 text-gray-400 text-xs">M</span>
                </div>
              </div>
              <p className="col-span-2 text-[11px] text-gray-500 font-sans leading-normal">
                *Rumus Keliling: (Panjang x 2) + (Lebar x 2) = <strong className="text-gray-800">{perimeter} meter lari</strong>. Ini adalah panjang keliling atap yang akan dipasang list.
              </p>
            </div>
          ) : (
            <div className="bg-cream-beige/10 border border-cream-beige/25 rounded-2xl p-4">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Total Kebutuhan (Meter Lari)</label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  min="1"
                  max="5000"
                  value={customMeters}
                  onChange={(e) => setCustomMeters(parseInt(e.target.value) || 0)}
                  className="w-full bg-white border border-soft-gray/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-deep-blue/20 focus:border-deep-blue font-sans font-bold text-deep-blue"
                />
                <span className="absolute right-3 top-2.5 text-gray-400 text-xs">Meter</span>
              </div>
              <p className="text-[11px] text-gray-500 font-sans mt-2 leading-normal">
                *Masukkan perkiraan total panjang keliling seluruh ruangan rumah Anda yang ingin dipasangkan list gypsum.
              </p>
            </div>
          )}

          {/* Volume Scale discount notice */}
          <div className="bg-deep-blue/5 border border-deep-blue/10 rounded-2xl p-4 flex items-start space-x-3">
            <Percent className="h-5 w-5 text-deep-blue shrink-0 mt-0.5" />
            <div className="text-xs text-gray-600 leading-normal font-sans">
              <span className="font-bold text-deep-blue-dark">Diskon Skala Pemasangan:</span>
              <ul className="list-disc pl-4 mt-1 space-y-1 text-gray-500">
                <li>30 meter ke atas: <strong className="text-deep-blue-dark">Diskon 2%</strong></li>
                <li>60 meter ke atas: <strong className="text-deep-blue-dark">Diskon 4%</strong></li>
                <li>100 meter ke atas: <strong className="text-deep-blue-dark">Diskon 6%</strong> (Hemat Ekstra!)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Price Summary Card */}
        <div className="lg:col-span-5 bg-off-white/80 border border-soft-gray/30 rounded-2xl p-5 flex flex-col justify-between" id="calculator-summary">
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 font-sans">Rincian Estimasi Biaya</h4>
            
            {/* Selected product preview info */}
            <div className="bg-white border border-soft-gray/20 rounded-xl p-3 mb-4 flex items-center space-x-3">
              <img
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                className="w-12 h-12 rounded-lg object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="overflow-hidden">
                <span className="block text-xs text-gray-400 font-sans font-medium uppercase tracking-wider">Motif Pilihan</span>
                <span className="block text-sm font-bold text-gray-800 truncate leading-tight mt-0.5">{selectedProduct?.name}</span>
                <span className="text-[11px] font-mono text-deep-blue bg-deep-blue/5 px-1.5 py-0.5 rounded-sm inline-block mt-1">Kode: {selectedProduct?.code}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-sm font-sans">
              <div className="flex justify-between text-gray-600">
                <span>Panjang Pemasangan:</span>
                <span className="font-semibold text-gray-900">{totalMeters} m</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tarif Per Meter (Pasang):</span>
                <span className="font-semibold text-gray-900">Rp {(selectedProduct?.pricePerMeter || 0).toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Subtotal Jasa + Bahan:</span>
                <span className="font-semibold text-gray-900">Rp {rawCost.toLocaleString('id-ID')}</span>
              </div>
              
              {discountPercent > 0 && (
                <div className="flex justify-between text-green-600 bg-green-50 px-2.5 py-1.5 rounded-lg text-xs font-semibold">
                  <span className="flex items-center space-x-1">
                    <span>Diskon Skala ({discountPercent}%)</span>
                  </span>
                  <span>- Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}

              <div className="pt-3 border-t border-soft-gray/20 flex justify-between text-gray-800 items-baseline">
                <span className="font-semibold">Total Biaya:</span>
                <span className="text-xl font-extrabold text-deep-blue-dark">Rp {finalCost.toLocaleString('id-ID')}</span>
              </div>

              {/* DP Terms details */}
              <div className="bg-white/75 border border-soft-gray/20 rounded-xl p-3 mt-4 space-y-2 text-xs text-gray-600">
                <div className="flex justify-between items-center text-gray-700">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-deep-blue" />
                    <span className="font-semibold">DP 50% (Tanda Jadi):</span>
                  </span>
                  <span className="font-bold text-gray-900">Rp {downPayment.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-gray-700">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="font-semibold">Pelunasan (Selesai Pasang):</span>
                  </span>
                  <span className="font-bold text-gray-900">Rp {finalPayment.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-soft-gray/20">
            {totalMeters <= 0 ? (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl p-3 text-center flex items-center justify-center space-x-1.5 font-sans">
                <BadgeAlert className="h-4 w-4 shrink-0" />
                <span>Masukkan panjang pemasangan terlebih dahulu</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 text-sm uppercase tracking-wider hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>
            )}

            <div className="mt-3 text-[10px] text-gray-400 text-center flex items-center justify-center space-x-1 font-sans">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span>SOP Sinar Jaya Gypsum: Aman, Cepat, dan Transparan</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
