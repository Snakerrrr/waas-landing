import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  { question: "¿Soy dueño de mi dominio?", answer: "Sí, el dominio es 100% tuyo. Lo registramos a tu nombre y tú tienes el control total. Si decides cancelar, te transferimos todos los accesos sin problema." },
  { question: "¿Qué pasa si cancelo?", answer: "No hay permanencia mínima. Si cancelas, tu web se desactiva al finalizar el período pagado. Te entregamos un respaldo completo y puedes migrar donde quieras." },
  { question: "¿Cuánto tarda en estar lista?", answer: "Con tu contenido listo, 48 a 72 horas. Diseños personalizados pueden tomar hasta 7 días." },
  { question: "¿Los cambios son realmente ilimitados?", answer: "En Pro y Scale, sí. En Starter tienes 3 cambios mensuales incluidos." },
  { question: "¿El hosting es rápido?", answer: "Hosting premium con CDN global. Tu web carga en menos de 2 segundos." },
  { question: "¿Puedo tener tienda online?", answer: "El plan Scale incluye e-commerce completo. También disponible como add-on en Pro." },
  { question: "¿Diseños personalizados?", answer: "Sí. Partimos de plantillas optimizadas y las personalizamos completamente con tu marca." },
  { question: "¿Y el SEO?", answer: "Todas nuestras webs incluyen SEO técnico: velocidad, estructura semántica, meta tags, sitemap y schema markup." },
];

function AccordionItem({ faq, isOpen, onClick, index }: {
  faq: (typeof faqs)[0]; isOpen: boolean; onClick: () => void; index: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setHeight(isOpen ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-surface-800"
    >
      <button onClick={onClick} className="flex w-full items-center justify-between py-6 text-left">
        <span className={`pr-4 text-lg font-semibold transition-colors ${isOpen ? "text-cyan-400" : "text-white"}`}>
          {faq.question}
        </span>
        <Plus className={`h-5 w-5 shrink-0 text-surface-500 transition-transform duration-300 ${isOpen ? "rotate-45 text-cyan-400" : ""}`} />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: height }}>
        <div ref={contentRef} className="pb-6">
          <p className="max-w-2xl leading-relaxed text-surface-400">{faq.answer}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">FAQ</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">
            Preguntas<br />
            <span className="text-cyan-400">Frecuentes.</span>
          </h2>
        </motion.div>

        <div>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i} faq={faq} index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
