import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white px-6 lg:px-12">
      {/* Background decoration */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 -m-4 bg-[url('/src/assets/images/laundry_hero_image_1777100848576.png')] bg-cover bg-center rounded-3xl opacity-20 blur-sm -z-10" />
            <h1 className="brand-huge text-blue-700 select-none">
              SICUCI
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-16">
            <div className="w-24 h-[2px] bg-blue-700 hidden md:block mb-6"></div>
            <div className="flex flex-col gap-4">
              <p className="text-3xl lg:text-5xl font-light text-blue-900 max-w-2xl leading-tight">
                Kebersihan yang Berkilau, <br />
                <span className="font-serif italic font-bold text-blue-600 block md:inline mt-2 md:mt-0">Tanpa Kompromi.</span>
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] bg-blue-50 text-blue-700 px-3 py-1 font-black uppercase tracking-widest border border-blue-100">Area Pangkalpinang</span>
                <span className="text-[10px] bg-blue-900 text-white px-3 py-1 font-black uppercase tracking-widest">Berlokasi di Beluluk</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <motion.button
              whileHover={{ x: 10 }}
              className="bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-200"
            >
              Lihat Layanan
            </motion.button>
            <button className="px-12 py-5 rounded-full border border-blue-100 font-black text-xs uppercase tracking-[0.3em] text-blue-900/40 hover:bg-blue-50 hover:text-blue-700 transition-all">
              Hubungi Kami
            </button>
          </div>
        </motion.div>
        
        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-blue-50 pt-12">
          {[
            { label: 'Pelanggan', value: '10K+' },
            { label: 'Kecepatan', value: '24 Jam' },
            { label: 'Rating', value: '4.9/5' },
            { label: 'Area', value: 'Jabodetabek' }
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
