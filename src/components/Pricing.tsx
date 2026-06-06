import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

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

const STRIPE_LINKS = {
  starter_monthly: "#configure-stripe-starter-monthly",
  starter_annual: "#configure-stripe-starter-annual",
  pro_monthly: "#configure-stripe-pro-monthly",
  pro_annual: "#configure-stripe-pro-annual",
  scale_monthly: "#configure-stripe-scale-monthly",
  scale_annual: "#configure-stripe-scale-annual",
};

const plans: Plan[] = [
  { name: "Starter", monthly: 99, annual: 79, description: "Ideal para negocios que inician.", features: ["1–5 páginas", "Hosting premium", "SSL incluido", "Dominio personalizado", "100% responsive", "3 cambios/mes", "Soporte email", "Backups semanales"], cta: "Empezar", popular: false, stripeMonthly: STRIPE_LINKS.starter_monthly, stripeAnnual: STRIPE_LINKS.starter_annual },
  { name: "Pro", monthly: 199, annual: 159, description: "Para negocios en crecimiento.", features: ["Hasta 10 páginas", "Todo de Starter +", "Cambios ilimitados", "Blog integrado", "Formularios avanzados", "SEO completo", "Soporte prioritario", "Backups diarios", "Analytics", "WhatsApp + CRM"], cta: "Empezar", popular: true, stripeMonthly: STRIPE_LINKS.pro_monthly, stripeAnnual: STRIPE_LINKS.pro_annual },
  { name: "Scale", monthly: 349, annual: 279, description: "Para empresas que escalan.", features: ["Páginas ilimitadas", "Todo de Pro +", "E-commerce", "Pasarela de pagos", "Reservas / citas", "Multi-idioma", "Soporte dedicado", "Backups en tiempo real", "CDN premium", "Consultoría CRO", "A/B Testing"], cta: "Empezar", popular: false, stripeMonthly: STRIPE_LINKS.scale_monthly, stripeAnnual: STRIPE_LINKS.scale_annual },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precios" className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">Precios</p>
          <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-7xl">
            Un plan para cada<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              etapa de tu negocio.
            </span>
          </h2>
          <p className="max-w-xl text-lg text-surface-400">
            Sin contratos. Sin costos ocultos. Cancela cuando quieras.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex items-center gap-4"
        >
          <span className={`text-sm font-medium ${!annual ? "text-white" : "text-surface-500"}`}>Mensual</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-cyan-500" : "bg-surface-700"}`}
          >
            <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-black transition-transform ${annual ? "translate-x-5" : ""}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-white" : "text-surface-500"}`}>Anual</span>
          {annual && (
            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-400 ring-1 ring-cyan-500/20">
              -20%
            </span>
          )}
        </motion.div>

        {/* Cards */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const link = annual ? plan.stripeAnnual : plan.stripeMonthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative rounded-2xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? "border-cyan-500/40 bg-surface-950 shadow-xl shadow-cyan-500/5 glow-pulse lg:scale-105"
                    : "border-surface-800 bg-surface-950 hover:border-surface-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold text-black">
                      <Sparkles className="h-3 w-3" /> Más Popular
                    </span>
                  </div>
                )}

                <h3 className="mb-1 text-lg font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-sm text-surface-500">{plan.description}</p>

                <div className="mb-1 flex items-baseline gap-1 overflow-hidden">
                  <span className="text-5xl font-black text-white">$</span>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={price}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -30, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="inline-block text-5xl font-black text-white"
                    >
                      {price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-surface-500">/mes</span>
                </div>
                {annual && (
                  <p className="mb-6 text-xs text-surface-600">
                    <span className="line-through">${plan.monthly}</span> · Facturado anual
                  </p>
                )}
                {!annual && <div className="mb-6" />}

                <a
                  href={link} target="_blank" rel="noopener noreferrer"
                  className={`group mb-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all ${
                    plan.popular
                      ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                      : "border border-surface-700 text-white hover:border-surface-500 hover:bg-surface-900"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span className="text-sm text-surface-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-surface-600">
          14 días de garantía. Si no estás contento, te devolvemos tu dinero.
        </p>
      </div>
    </section>
  );
}
