import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-50 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex justify-between items-center">
          <div className="font-black text-2xl tracking-tighter text-blue-700">
            SICUCI.
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-8 text-[11px] font-black uppercase tracking-[0.2em] text-blue-900/60">
              <a href="#services" className="text-blue-700 border-b-2 border-blue-700 pb-1">Layanan</a>
              <a href="#pricing" className="hover:text-blue-700 transition-colors pb-1">Harga</a>
              <a href="#contact" className="hover:text-blue-700 transition-colors pb-1">Kontak</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-100"
            >
              Pesan Sekarang
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
