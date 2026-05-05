import { Phone, MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8">Hubungi Kami</h2>
            <p className="text-4xl lg:text-7xl font-black text-blue-900 tracking-tighter leading-none mb-12">Siap Jemput <br />Pakaian Anda.</p>
            
            <div className="space-y-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Telepon / WhatsApp</span>
                <span className="text-2xl font-black text-blue-900 tracking-tight">+62 812-3456-7890</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Lokasi Workshop</span>
                <span className="text-2xl font-black text-blue-900 tracking-tight">Beluluk, Pangkalpinang</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-12 lg:p-16">
            <h3 className="text-2xl font-black text-blue-900 mb-12 uppercase tracking-tight">Formulir Pesanan</h3>
            <form className="space-y-8">
              <div className="border-b border-blue-200 pb-2">
                <label className="block text-[10px] font-black text-blue-400 mb-2 uppercase tracking-widest">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-transparent outline-none font-bold text-blue-900 placeholder:text-blue-200"
                />
              </div>
              <div className="border-b border-blue-200 pb-2">
                <label className="block text-[10px] font-black text-blue-400 mb-2 uppercase tracking-widest">Alamat Lengkap</label>
                <textarea 
                  rows={2}
                  placeholder="Tuliskan alamat penjemputan"
                  className="w-full bg-transparent outline-none font-bold text-blue-900 placeholder:text-blue-200 resize-none"
                />
              </div>
              <button className="w-full py-6 bg-blue-700 text-white font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 mt-4">
                Kirim Pesanan
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
