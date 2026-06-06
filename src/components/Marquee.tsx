const items = [
  "Restaurantes",
  "E-Commerce",
  "Servicios Profesionales",
  "Salud & Clínicas",
  "Fitness & Gimnasios",
  "Inmobiliarias",
  "Educación",
  "Tecnología",
  "Consultoría",
  "Belleza & Spa",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-surface-800/50 bg-black py-6">
      <div className="animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-2xl font-bold tracking-wide text-surface-700 sm:text-3xl md:text-4xl"
          >
            {item}
            <span className="ml-8 text-cyan-500/30">///</span>
          </span>
        ))}
      </div>
    </section>
  );
}
