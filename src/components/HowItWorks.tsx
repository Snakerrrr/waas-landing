import { motion } from "framer-motion";
import { MousePointerClick, Paintbrush, Rocket, Wrench } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MousePointerClick,
    title: "Elige tu Diseño",
    description: "Explora nuestras demos y selecciona la plantilla que mejor se adapte a tu negocio. Tenemos diseños para cada industria.",
  },
  {
    num: "02",
    icon: Paintbrush,
    title: "Personalizamos Todo",
    description: "Adaptamos colores, tipografías, contenido e imágenes a la identidad de tu marca. Todo listo en 48 horas.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Lanzamos tu Web",
    description: "Tu sitio sale al aire con hosting ultra-rápido, certificado SSL y optimización SEO desde el día uno.",
  },
  {
    num: "04",
    icon: Wrench,
    title: "Mantenimiento Continuo",
    description: "Actualizaciones, seguridad, backups y cualquier cambio que necesites. Soporte ilimitado cada mes.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Proceso
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tu web lista en<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              4 pasos.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative space-y-16">
          {/* Vertical line */}
          <div className="absolute top-0 left-8 hidden h-full w-px bg-gradient-to-b from-cyan-500/30 via-cyan-500/10 to-transparent md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative flex gap-8 md:gap-16"
            >
              {/* Number + icon */}
              <div className="relative flex shrink-0 flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-800 bg-surface-900/80">
                  <step.icon className="h-7 w-7 text-cyan-400" />
                </div>
                <span className="mt-3 text-xs font-bold tracking-widest text-surface-600">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-lg text-base leading-relaxed text-surface-400">
                  {step.description}
                </p>
              </div>

              {/* Background number */}
              <span className="pointer-events-none absolute -top-4 right-0 hidden text-[8rem] font-bold leading-none text-surface-900/30 select-none lg:block">
                {step.num}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
