const industries = ["Restaurantes", "E-Commerce", "Servicios", "Salud", "Fitness", "Inmobiliarias", "Educación", "Tecnología", "Consultoría", "Belleza"];
const keywords = ["Rápido", "Moderno", "Ilimitado", "Profesional", "Seguro", "Optimizado", "Escalable", "Confiable", "Premium", "Inteligente"];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-surface-800/30 bg-black py-5">
      {/* First row -- industries, left to right */}
      <div className="animate-marquee mb-3 flex whitespace-nowrap">
        {[...industries, ...industries].map((item, i) => (
          <span key={`a${i}`} className="mx-6 text-2xl font-bold tracking-wide text-surface-700 sm:text-3xl">
            {item}
            <span className="ml-6 text-cyan-500/20">///</span>
          </span>
        ))}
      </div>
      {/* Second row -- keywords, right to left, different opacity */}
      <div className="animate-marquee-reverse flex whitespace-nowrap opacity-50">
        {[...keywords, ...keywords].map((item, i) => (
          <span key={`b${i}`} className="mx-6 text-lg font-medium tracking-widest text-surface-800 uppercase sm:text-xl">
            {item}
            <span className="ml-6 text-blue-500/15">--</span>
          </span>
        ))}
      </div>
    </section>
  );
}
