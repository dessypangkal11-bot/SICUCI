import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "SiCuci Reguler",
      price: "150k",
      unit: "/ bulan",
      duration: "Estimasi 3 Hari Selesai",
      features: ["Sistem Drop & Pick 3 Hari", "Cuci & Kering Higienis", "Antar Jemput Gratis Pangkalpinang", "Jadwal Tetap Mingguan"]
    },
    {
      name: "SiCuci Begepeng",
      price: "250k",
      unit: "/ bulan",
      duration: "Express 12 Jam (Same Day)",
      recommended: true,
      features: ["Selesai Hari Yang Sama", "Lipatan Begepeng Premium", "Express 12 Jam Termasuk", "Antar Jemput Prioritas"]
    },
    {
      name: "SiCuci Sultan",
      price: "450k",
      unit: "/ bulan",
      duration: "Instant Priority",
      features: ["Semua Fitur Begepeng", "Layanan Express 6 Jam", "Semua Jenis Pakaian", "Pick-up Instant & Asuransi"]
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-blue-50 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Bubble Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/50 rounded-full blur-3xl -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6">Investasi Kebersihan</h2>
          <p className="text-4xl lg:text-6xl font-black text-blue-900 tracking-tighter leading-none mb-4">Pilih Paket <br />Yang Paling Sesuai.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-12 bg-white transition-all border border-blue-100 ${plan.recommended ? 'ring-1 ring-blue-700/20 shadow-2xl' : ''}`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-blue-700 text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                  Populer
                </div>
              )}
              
              <div className="mb-12">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6">{plan.name}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-blue-900 tracking-tighter">{plan.price}</span>
                  <span className="text-blue-900/30 font-bold uppercase text-[10px] tracking-widest">{plan.unit}</span>
                </div>
                <p className="text-blue-700 font-bold mt-4 text-sm">{plan.duration}</p>
              </div>
              
              <div className="space-y-6 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
                    <span className="text-blue-900/60 text-sm font-bold uppercase tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-5 font-black text-xs uppercase tracking-[0.2em] transition-all ${plan.recommended ? 'bg-blue-700 text-white shadow-xl shadow-blue-100' : 'border border-blue-100 text-blue-900/40 hover:border-blue-700 hover:text-blue-700'}`}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
