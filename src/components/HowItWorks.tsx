import { MousePointerClick, Paintbrush, Rocket, Wrench } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    step: "01",
    icon: MousePointerClick,
    title: "Elige tu Diseño",
    description:
      "Explora nuestras demos y selecciona la plantilla que mejor se adapte a tu negocio. Tenemos diseños para cada industria.",
    color: "from-primary-500 to-primary-600",
    bgColor: "bg-primary-50 dark:bg-primary-500/10",
    iconColor: "text-primary-600 dark:text-primary-400",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Personalizamos Todo",
    description:
      "Adaptamos colores, tipografías, contenido e imágenes a la identidad de tu marca. Todo listo en 48 horas.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Lanzamos tu Web",
    description:
      "Tu sitio sale al aire con hosting ultra-rápido, certificado SSL, dominio personalizado y optimización SEO desde el día uno.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    step: "04",
    icon: Wrench,
    title: "Mantenimiento Continuo",
    description:
      "Nos encargamos de actualizaciones, seguridad, backups y cualquier cambio que necesites. Soporte ilimitado cada mes.",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section id="como-funciona" ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            Proceso Simple
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
            Tu web lista en <span className="text-primary-500">4 pasos</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Sin complicaciones técnicas. Nosotros nos encargamos de todo para que tú te enfoques en tu negocio.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`group relative rounded-2xl border border-surface-200 bg-white p-8 transition-all duration-700 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-500/30 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.bgColor}`}>
                  <s.icon className={`h-6 w-6 ${s.iconColor}`} />
                </div>
                <span className="text-4xl font-black text-surface-100 dark:text-surface-800">{s.step}</span>
              </div>
              <h3 className="mb-3 text-lg font-bold text-surface-900 dark:text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
