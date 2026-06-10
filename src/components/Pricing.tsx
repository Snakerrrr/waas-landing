import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Plan {
  name: string;
  monthly: number;
  annual: number;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  stripeMonthly: string;
  stripeAnnual: string;
}

const SL = {
  sm: "#configure-stripe-starter-monthly", sa: "#configure-stripe-starter-annual",
  pm: "#configure-stripe-pro-monthly", pa: "#configure-stripe-pro-annual",
  scm: "#configure-stripe-scale-monthly", sca: "#configure-stripe-scale-annual",
};

const plans: Plan[] = [
  { name: "Starter", monthly: 99, annual: 79, description: "Ideal para negocios que inician su presencia digital.", features: ["1–5 páginas", "Hosting premium", "SSL incluido", "Dominio personalizado", "100% responsive", "3 cambios/mes", "Soporte email", "Backups semanales"], cta: "Empezar con Starter", popular: false, stripeMonthly: SL.sm, stripeAnnual: SL.sa },
  { name: "Pro", monthly: 199, annual: 159, description: "Para negocios en crecimiento que necesitan más.", features: ["Hasta 10 páginas", "Todo de Starter +", "Cambios ilimitados", "Blog integrado", "Formularios avanzados", "SEO completo", "Soporte prioritario", "Backups diarios", "Analytics", "WhatsApp + CRM"], cta: "Empezar con Pro", popular: true, stripeMonthly: SL.pm, stripeAnnual: SL.pa },
  { name: "Scale", monthly: 349, annual: 279, description: "Para empresas que escalan sin límites.", features: ["Páginas ilimitadas", "Todo de Pro +", "E-commerce", "Pasarela de pagos", "Reservas / citas", "Multi-idioma", "Soporte dedicado", "Backups en tiempo real", "CDN premium", "Consultoría CRO", "A/B Testing"], cta: "Empezar con Scale", popular: false, stripeMonthly: SL.scm, stripeAnnual: SL.sca },
];

function AnimatedPrice({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    prevRef.current = value;
    if (from === to) return;

    const duration = 500;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (to - from) * ease));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  return <span>${display}</span>;
}

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="precios" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Precios" lightText="Simple y" boldText="transparente." className="mb-4" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 max-w-md text-base text-surface-400"
        >
          Elige el plan que se adapte a tu negocio. Sin contratos. Cancela cuando quieras.
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12 flex items-center justify-center gap-3"
        >
          <span className={`text-sm font-medium transition-colors ${isMonthly ? "text-white" : "text-surface-500"}`}>Mensual</span>
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`relative h-6 w-11 rounded-full transition-colors ${!isMonthly ? "bg-cyan-500" : "bg-surface-700"}`}
          >
            <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-surface-950 shadow transition-transform ${!isMonthly ? "translate-x-5" : ""}`} />
          </button>
          <span className={`text-sm font-medium transition-colors ${!isMonthly ? "text-white" : "text-surface-500"}`}>Anual</span>
          <AnimatePresence>
            {!isMonthly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs font-bold text-cyan-400 ring-1 ring-cyan-500/20"
              >
                -20%
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = isMonthly ? plan.monthly : plan.annual;
            const link = isMonthly ? plan.stripeMonthly : plan.stripeAnnual;

            return (
              <motion.div
                key={plan.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{
                  y: plan.popular ? -16 : 0,
                  opacity: 1,
                  scale: plan.popular ? 1 : 0.96,
                  x: i === 0 ? 12 : i === 2 ? -12 : 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.3,
                }}
                className={`relative flex flex-col rounded-2xl border p-6 text-center ${
                  plan.popular
                    ? "z-10 border-cyan-500/30 glass shadow-xl shadow-cyan-500/5"
                    : "z-0 glass border-white/[0.06]"
                } ${!plan.popular ? "mt-0 sm:mt-4" : ""}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 flex items-center gap-1 rounded-bl-xl rounded-tr-2xl bg-cyan-500 px-3 py-1">
                    <Star className="h-3.5 w-3.5 fill-current text-black" />
                    <span className="text-xs font-bold text-black">Popular</span>
                  </div>
                )}

                {/* Plan name */}
                <p className="text-sm font-semibold text-surface-400">{plan.name}</p>

                {/* Price */}
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold tracking-tight text-white tabular-nums">
                    <AnimatedPrice value={price} />
                  </span>
                  <span className="text-sm font-medium text-surface-500">/ mes</span>
                </div>

                <p className="mt-1 text-xs text-surface-600">
                  {isMonthly ? "facturado mensual" : "facturado anual"}
                </p>

                {/* Features */}
                <ul className="mt-6 flex flex-col gap-2.5 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm text-surface-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-5 border-white/5" />

                {/* CTA */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                      : "border border-white/10 text-white hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <p className="mt-4 text-[11px] leading-relaxed text-surface-600">{plan.description}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-surface-600">
          14 días de garantía. Si no estás contento, te devolvemos tu dinero.
        </p>
      </div>
    </section>
  );
}
