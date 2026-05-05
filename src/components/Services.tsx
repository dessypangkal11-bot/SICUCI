import { motion } from 'motion/react';

const services = [
  {
    number: "01",
    title: "SiCuci Reguler",
    description: "Diambil hari ini, diantar 3 hari kemudian. Layanan cuci harian yang teliti dan bersih sempurna untuk kebutuhan standar rumah tangga."
  },
  {
    number: "02",
    title: "SiCuci Begepeng",
    description: "Diambil hari ini, diantar hari yang sama! Dilengkapi teknik lipatan hemat ruang dan layanan Express 12 Jam."
  },
  {
    number: "03",
    title: "Sistem Langganan",
    description: "Nikmati kemudahan antar-jemput rutin di area Pangkalpinang. Pakaian bersih otomatis setiap minggu tanpa repot pesan ulang."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 underline decoration-2 underline-offset-8">Layanan Utama</h2>
            <p className="text-4xl lg:text-6xl font-black text-blue-900 tracking-tighter leading-none">Standard Tinggi <br />Untuk Pakaian Anda.</p>
          </div>
          <p className="max-w-md text-blue-900/50 font-medium leading-relaxed">
            Setiap helai pakaian diproses dengan ketelitian maksimal. Kami menggabungkan tradisi kebersihan dengan teknologi modern.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xs font-black bg-blue-700 text-white px-3 py-1.5 rounded-sm">
                  {service.number}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-blue-900 leading-none">
                  {service.title}
                </h3>
              </div>
              <p className="text-blue-900/60 font-medium leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="accent-line group-hover:bg-blue-500 transition-all duration-500 h-[2px]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
