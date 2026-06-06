import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Plan { name: string; monthly: number; annual: number; description: string; features: string[]; cta: string; popular: boolean; stripeMonthly: string; stripeAnnual: string; }

const SL = { sm: "#configure-stripe-starter-monthly", sa: "#configure-stripe-starter-annual", pm: "#configure-stripe-pro-monthly", pa: "#configure-stripe-pro-annual", scm: "#configure-stripe-scale-monthly", sca: "#configure-stripe-scale-annual" };

const plans: Plan[] = [
  { name: "Starter", monthly: 99, annual: 79, description: "Ideal para negocios que inician.", features: ["1–5 páginas", "Hosting premium", "SSL incluido", "Dominio personalizado", "100% responsive", "3 cambios/mes", "Soporte email", "Backups semanales"], cta: "Empezar", popular: false, stripeMonthly: SL.sm, stripeAnnual: SL.sa },
  { name: "Pro", monthly: 199, annual: 159, description: "Para negocios en crecimiento.", features: ["Hasta 10 páginas", "Todo de Starter +", "Cambios ilimitados", "Blog integrado", "Formularios avanzados", "SEO completo", "Soporte prioritario", "Backups diarios", "Analytics", "WhatsApp + CRM"], cta: "Empezar", popular: true, stripeMonthly: SL.pm, stripeAnnual: SL.pa },
  { name: "Scale", monthly: 349, annual: 279, description: "Para empresas que escalan.", features: ["Páginas ilimitadas", "Todo de Pro +", "E-commerce", "Pasarela de pagos", "Reservas / citas", "Multi-idioma", "Soporte dedicado", "Backups en tiempo real", "CDN premium", "Consultoría CRO", "A/B Testing"], cta: "Empezar", popular: false, stripeMonthly: SL.scm, stripeAnnual: SL.sca },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Precios" lightText="Un plan para cada" boldText="etapa de tu negocio." className="mb-4" />
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 max-w-md text-base text-surface-400">Sin contratos. Sin costos ocultos. Cancela cuando quieras.</motion.p>

        {/* Toggle */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-12 flex items-center gap-4">
          <span className={`text-sm font-medium ${!annual ? "text-white" : "text-surface-500"}`}>Mensual</span>
          <button onClick={() => setAnnual(!annual)} className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-cyan-500" : "bg-surface-700"}`}>
            <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-black transition-transform ${annual ? "translate-x-5" : ""}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-white" : "text-surface-500"}`}>Anual</span>
          {annual && <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400 ring-1 ring-cyan-500/20">-20%</span>}
        </motion.div>

        {/* Cards with overlap */}
        <div className="relative grid items-center gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const link = annual ? plan.stripeAnnual : plan.stripeMonthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? "z-10 glass border-cyan-500/20 shadow-xl shadow-cyan-500/5 glow-pulse lg:-translate-y-4 lg:scale-[1.03]"
                    : "glass opacity-[0.97] hover:border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-6">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold text-black">
                      <Sparkles className="h-3 w-3" /> Más Popular
                    </span>
                  </div>
                )}

                <h3 className="mb-1 text-lg font-bold text-white">{plan.name}</h3>
                <p className="mb-5 text-sm text-surface-500">{plan.description}</p>

                <div className="mb-1 flex items-baseline gap-1 overflow-hidden">
                  <span className="text-4xl font-extrabold text-white">$</span>
                  <AnimatePresence mode="popLayout">
                    <motion.span key={price} initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -25, opacity: 0 }} transition={{ duration: 0.3 }}
                      className="inline-block text-4xl font-extrabold text-white">{price}</motion.span>
                  </AnimatePresence>
                  <span className="text-surface-500">/mes</span>
                </div>
                {annual && <p className="mb-5 text-xs text-surface-600"><span className="line-through">${plan.monthly}</span> · Facturado anual</p>}
                {!annual && <div className="mb-5" />}

                <a href={link} target="_blank" rel="noopener noreferrer"
                  className={`group mb-7 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                    plan.popular ? "bg-cyan-500 text-black hover:bg-cyan-400" : "border border-surface-700 text-white hover:border-surface-500"
                  }`}>
                  {plan.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm text-surface-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-surface-600">14 días de garantía. Si no estás contento, te devolvemos tu dinero.</p>
      </div>
    </section>
  );
}
