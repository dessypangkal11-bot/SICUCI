import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [
  '/src/assets/images/laundry_hero_image_1777100848576.png',
  '/src/assets/images/laundry_bubbles_bg_1777964539963.png',
  '/src/assets/images/laundry_fresh_clothes_1777964558812.png',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white px-6 lg:px-12">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[currentImage]}')` }}
          />
        </AnimatePresence>
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "110%", 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: "-10%", 
              opacity: [0, 0.4, 0.4, 0],
              x: (Math.random() * 100 + (Math.sin(i) * 10)) + "%"
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute w-12 h-12 rounded-full border border-blue-200/50 bg-gradient-to-br from-white/40 to-blue-100/20 backdrop-blur-[1px]"
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-8 group">
            <h1 className="brand-huge text-blue-700 select-none relative z-10">
              SICUCI
            </h1>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-4 -right-12 w-24 h-24 rounded-full bg-blue-100/30 blur-2xl -z-0" 
            />
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
              whileHover={{ x: 10, backgroundColor: "#1e3a8a" }}
              className="bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-200 transition-colors"
            >
              Lihat Layanan
            </motion.button>
            <button className="px-12 py-5 rounded-full border border-blue-100 font-black text-xs uppercase tracking-[0.3em] text-blue-900/40 hover:bg-blue-50 hover:text-blue-700 transition-all">
              Hubungi Kami
            </button>
          </div>
        </motion.div>
        
        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-blue-50 pt-12 relative overflow-hidden group">
          {[
            { label: 'Pelanggan', value: '10K+' },
            { label: 'Kecepatan', value: '24 Jam' },
            { label: 'Rating', value: '4.9/5' },
            { label: 'Area', value: 'Pangkalpinang' }
          ].map((stat, i) => (
            <div key={i} className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-blue-900">{stat.value}</p>
            </div>
          ))}
          {/* Subtle background glow for stats */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>
      </div>
    </section>
  );
}
