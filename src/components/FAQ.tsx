import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const faqs = [
  {
    question: "¿Soy dueño de mi dominio?",
    answer:
      "Sí, el dominio es 100% tuyo. Lo registramos a tu nombre y tú tienes el control total. Si decides cancelar, te transferimos todos los accesos sin problema.",
  },
  {
    question: "¿Qué pasa si cancelo mi suscripción?",
    answer:
      "No hay permanencia mínima. Si cancelas, tu web se desactiva al finalizar el período pagado. Te entregamos un respaldo completo de tu contenido y puedes migrar donde quieras. Sin letras pequeñas.",
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi web?",
    answer:
      "Una vez que elijas tu diseño y nos envíes el contenido (textos, imágenes, logo), tu web está lista en 48 a 72 horas. Diseños completamente personalizados pueden tomar hasta 7 días.",
  },
  {
    question: "¿Los cambios son realmente ilimitados?",
    answer:
      "En los planes Pro y Scale, sí. Puedes solicitar cambios de texto, imágenes, secciones o estructura cuando lo necesites. En el plan Starter tienes hasta 3 cambios mensuales incluidos.",
  },
  {
    question: "¿El hosting está incluido? ¿Es rápido?",
    answer:
      "Sí, incluimos hosting premium con servidores optimizados y CDN global. Tu web carga en menos de 2 segundos, lo que mejora tanto la experiencia del usuario como tu posicionamiento en Google.",
  },
  {
    question: "¿Puedo tener una tienda online?",
    answer:
      "¡Absolutamente! Nuestro plan Scale incluye e-commerce completo con catálogo de productos, carrito de compras, pasarela de pagos y gestión de pedidos. También podemos integrarlo en el plan Pro como add-on.",
  },
  {
    question: "¿Ofrecen diseños 100% personalizados?",
    answer:
      "Sí. Aunque partimos de plantillas optimizadas para acelerar la entrega, cada diseño se personaliza completamente con tu marca, colores, tipografías y contenido. El resultado es una web única para tu negocio.",
  },
  {
    question: "¿Qué pasa con el SEO de mi web?",
    answer:
      "Todas nuestras webs se construyen con las mejores prácticas de SEO técnico: velocidad optimizada, estructura semántica, meta tags, sitemap, schema markup y compatibilidad con Google Search Console.",
  },
];

function AccordionItem({ faq, isOpen, onClick, index, sectionVisible }: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onClick: () => void;
  index: number;
  sectionVisible: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-500 ${
        isOpen
          ? "border-primary-200 bg-primary-50/50 dark:border-primary-500/30 dark:bg-primary-500/5"
          : "border-surface-200 bg-white dark:border-surface-800 dark:bg-surface-900"
      } ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      style={{ transitionDelay: `${index * 75}ms` }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-6 py-5 text-left"
      >
        <span className="pr-4 font-semibold text-surface-900 dark:text-white">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-surface-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef} className="px-6 pb-5">
          <p className="leading-relaxed text-surface-600 dark:text-surface-400">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="faq" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl dark:text-white">
            Preguntas <span className="text-primary-500">Frecuentes</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
              sectionVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
