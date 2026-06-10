import { motion } from "framer-motion";
import { MousePointerClick, Paintbrush, Rocket, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const steps = [
  { num: "01", icon: MousePointerClick, title: "Elige tu Diseño", description: "Explora nuestras demos y selecciona la plantilla ideal para tu negocio." },
  { num: "02", icon: Paintbrush, title: "Personalizamos", description: "Adaptamos colores, contenido e imágenes a tu marca. Listo en 48h." },
  { num: "03", icon: Rocket, title: "Lanzamos", description: "Tu sitio sale al aire con hosting ultra-rápido, SSL y SEO incluido." },
  { num: "04", icon: Wrench, title: "Mantenemos", description: "Actualizaciones, seguridad, backups y cambios ilimitados cada mes." },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Proceso" lightText="Tu web lista" boldText="en 4 pasos." className="mb-16" />

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="absolute top-[38px] left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent md:block" />

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 mx-auto mb-5 flex h-[76px] w-[76px] items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-white/[0.06] transition-colors duration-300 group-hover:border-cyan-500/30" />
                  {/* Inner circle */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1E293B] transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                    <s.icon className="h-6 w-6 text-surface-400 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400" />
                  </div>
                </div>

                {/* Step number */}
                <p className="mb-2 text-xs font-medium tracking-[0.3em] text-cyan-400/50 uppercase">{s.num}</p>

                {/* Title */}
                <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>

                {/* Description */}
                <p className="mx-auto max-w-[200px] text-sm leading-relaxed text-surface-400">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
