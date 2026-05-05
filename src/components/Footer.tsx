export default function Footer() {
  return (
    <footer className="bg-blue-900 border-t border-blue-800 py-24 px-6 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <div className="font-black text-3xl tracking-tighter mb-8 decoration-blue-700 underline underline-offset-8">
              SICUCI.
            </div>
            <p className="text-white/40 font-medium leading-relaxed max-w-xs">
              Membangun standar baru dalam perawatan pakaian. Bersih, Cepat, dan Wangi menjadi prioritas utama.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[.4em] text-blue-400 mb-8">Layanan</h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Cuci & Lipat</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Setrika Uap</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Express 6 Jam</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[.4em] text-blue-400 mb-8">Bantuan</h4>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-white/60">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karir</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[.4em] text-blue-400 mb-8">Media Sosial</h4>
            <div className="flex gap-4">
              {['IG', 'FB', 'WA'].map(social => (
                <div key={social} className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center font-black text-xs hover:bg-white hover:text-blue-900 transition-all cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-widest text-white/20">
            © 2026 SICUCI CO. All rights reserved.
          </p>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/20">
            Terjaga dengan ❤️ oleh SICUCI
          </div>
        </div>
      </div>
    </footer>
  );
}
