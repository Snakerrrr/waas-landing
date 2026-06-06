import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "¿Soy dueño de mi dominio?", answer: "Sí, el dominio es 100% tuyo. Lo registramos a tu nombre y tú tienes el control total. Si cancelas, te transferimos todo." },
  { question: "¿Qué pasa si cancelo?", answer: "No hay permanencia mínima. Tu web se desactiva al finalizar el período pagado. Te entregamos un respaldo completo." },
  { question: "¿Cuánto tarda en estar lista?", answer: "Con tu contenido listo, 48 a 72 horas. Diseños personalizados pueden tomar hasta 7 días." },
  { question: "¿Los cambios son ilimitados?", answer: "En Pro y Scale, sí. En Starter tienes 3 cambios mensuales incluidos." },
  { question: "¿El hosting es rápido?", answer: "Hosting premium con CDN global. Tu web carga en menos de 2 segundos." },
  { question: "¿Puedo tener tienda online?", answer: "El plan Scale incluye e-commerce completo. También disponible como add-on en Pro." },
  { question: "¿Diseños personalizados?", answer: "Sí. Partimos de plantillas optimizadas y las personalizamos completamente con tu marca." },
  { question: "¿Y el SEO?", answer: "Todas nuestras webs incluyen SEO técnico: velocidad, estructura semántica, meta tags, sitemap y schema markup." },
];

function AccordionItem({ faq, isOpen, onClick, index }: { faq: (typeof faqs)[0]; isOpen: boolean; onClick: () => void; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);
  useEffect(() => { if (ref.current) setH(isOpen ? ref.current.scrollHeight : 0); }, [isOpen]);

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }}
      className="border-b border-surface-800/60">
      <button onClick={onClick} className="flex w-full items-center justify-between py-5 text-left">
        <span className={`pr-4 text-base font-semibold transition-colors sm:text-lg ${isOpen ? "text-cyan-400" : "text-white"}`}>{faq.question}</span>
        <Plus className={`h-5 w-5 shrink-0 text-surface-500 transition-transform duration-300 ${isOpen ? "rotate-45 text-cyan-400" : ""}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: h }}>
        <div ref={ref} className="pb-5"><p className="max-w-xl text-sm leading-relaxed text-surface-400">{faq.answer}</p></div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Split layout: title left (sticky), accordion right */}
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mb-10 lg:sticky lg:top-32 lg:mb-0 lg:self-start">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">FAQ</p>
            <h2 className="text-3xl sm:text-4xl">
              <span className="font-light text-surface-300">Preguntas</span><br />
              <span className="font-extrabold text-white">Frecuentes.</span>
            </h2>
            <p className="mt-4 text-sm text-surface-500">Todo lo que necesitas saber antes de empezar.</p>
          </motion.div>

          <div>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} faq={faq} index={i} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
