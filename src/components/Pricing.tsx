import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

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

// ──────────────────────────────────────────────────────────────
// Reemplaza estos URLs con tus Stripe Payment Links reales.
// Créalos en: https://dashboard.stripe.com/payment-links
// ──────────────────────────────────────────────────────────────
const STRIPE_LINKS = {
  starter_monthly: "#configure-stripe-starter-monthly",
  starter_annual: "#configure-stripe-starter-annual",
  pro_monthly: "#configure-stripe-pro-monthly",
  pro_annual: "#configure-stripe-pro-annual",
  scale_monthly: "#configure-stripe-scale-monthly",
  scale_annual: "#configure-stripe-scale-annual",
};

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 99,
    annual: 79,
    description: "Ideal para negocios que inician su presencia digital.",
    features: [
      "Diseño de 1–5 páginas",
      "Hosting premium incluido",
      "Certificado SSL",
      "Dominio personalizado",
      "Diseño 100% responsive",
      "3 cambios mensuales",
      "Soporte por email",
      "Backups semanales",
    ],
    cta: "Empezar con Starter",
    popular: false,
    stripeMonthly: STRIPE_LINKS.starter_monthly,
    stripeAnnual: STRIPE_LINKS.starter_annual,
  },
  {
    name: "Pro",
    monthly: 199,
    annual: 159,
    description: "Para negocios en crecimiento que necesitan más poder.",
    features: [
      "Diseño de hasta 10 páginas",
      "Todo lo de Starter, más:",
      "Cambios ilimitados",
      "Blog integrado",
      "Formularios avanzados",
      "SEO técnico completo",
      "Soporte prioritario (< 2h)",
      "Backups diarios",
      "Analytics integrado",
      "Integraciones (WhatsApp, CRM)",
    ],
    cta: "Empezar con Pro",
    popular: true,
    stripeMonthly: STRIPE_LINKS.pro_monthly,
    stripeAnnual: STRIPE_LINKS.pro_annual,
  },
  {
    name: "Scale",
    monthly: 349,
    annual: 279,
    description: "Para empresas que necesitan escalar sin límites.",
    features: [
      "Páginas ilimitadas",
      "Todo lo de Pro, más:",
      "E-commerce integrado",
      "Pasarela de pagos",
      "Sistema de reservas / citas",
      "Multi-idioma",
      "Soporte dedicado (< 1h)",
      "Backups en tiempo real",
      "CDN premium global",
      "Consultoría mensual CRO",
      "A/B Testing",
    ],
    cta: "Empezar con Scale",
    popular: false,
    stripeMonthly: STRIPE_LINKS.scale_monthly,
    stripeAnnual: STRIPE_LINKS.scale_annual,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="precios" ref={ref} className="bg-surface-50 py-20 sm:py-28 dark:bg-surface-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto mb-12 max-w-2xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            Precios Transparentes
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
            Un plan para cada{" "}
            <span className="text-primary-500">etapa de tu negocio</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Sin contratos a largo plazo. Sin costos ocultos. Cancela cuando quieras.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className={`mb-12 flex items-center justify-center gap-4 transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
          <span className={`text-sm font-medium ${!annual ? "text-surface-900 dark:text-white" : "text-surface-500 dark:text-surface-400"}`}>
            Mensual
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-primary-600" : "bg-surface-300 dark:bg-surface-700"}`}
            aria-label="Cambiar entre mensual y anual"
          >
            <span className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-5" : "translate-x-0"}`} />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-surface-900 dark:text-white" : "text-surface-500 dark:text-surface-400"}`}>
            Anual
          </span>
          {annual && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              Ahorra 20%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const link = annual ? plan.stripeAnnual : plan.stripeMonthly;

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all duration-700 ${
                  plan.popular
                    ? "scale-105 border-primary-500 bg-white shadow-2xl shadow-primary-500/10 dark:bg-surface-900"
                    : "border-surface-200 bg-white hover:shadow-lg dark:border-surface-800 dark:bg-surface-900"
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-bold text-surface-900 dark:text-white">{plan.name}</h3>
                  <p className="text-sm text-surface-500 dark:text-surface-400">{plan.description}</p>
                </div>

                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-surface-900 dark:text-white">${price}</span>
                  <span className="text-lg text-surface-500 dark:text-surface-400">/mes</span>
                </div>
                {annual && (
                  <p className="mb-5 text-sm text-surface-400 dark:text-surface-500">
                    <span className="line-through">${plan.monthly}/mes</span>
                    {" · "}Facturado anualmente (${price * 12}/año)
                  </p>
                )}
                {!annual && <div className="mb-6" />}

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mb-8 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700"
                      : "bg-surface-900 text-white hover:bg-surface-800 dark:bg-white dark:text-surface-900 dark:hover:bg-surface-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="text-sm text-surface-700 dark:text-surface-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm text-surface-500 dark:text-surface-400">
          Todos los planes incluyen 14 días de garantía de satisfacción. Si no estás contento, te devolvemos tu dinero.
        </p>
      </div>
    </section>
  );
}
