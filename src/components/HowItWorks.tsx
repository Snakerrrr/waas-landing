import { motion } from "framer-motion";
import { MousePointerClick, Paintbrush, Rocket, Wrench } from "lucide-react";
import SectionTitle from "./SectionTitle";

const steps = [
  { num: "01", icon: MousePointerClick, title: "Elige tu Diseño", description: "Explora nuestras demos y selecciona la plantilla que mejor se adapte a tu negocio.", span: "md:col-span-2" },
  { num: "02", icon: Paintbrush, title: "Personalizamos Todo", description: "Adaptamos colores, contenido e imágenes a tu marca. Listo en 48h.", span: "" },
  { num: "03", icon: Rocket, title: "Lanzamos tu Web", description: "Tu sitio sale al aire con hosting ultra-rápido, SSL y SEO incluido.", span: "" },
  { num: "04", icon: Wrench, title: "Mantenimiento Continuo", description: "Actualizaciones, seguridad, backups y cambios ilimitados cada mes.", span: "md:col-span-2" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Proceso" lightText="Tu web lista" boldText="en 4 pasos." className="mb-14" />

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden glass rounded-2xl p-8 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg hover:shadow-white/[0.02] ${s.span}`}
            >
              {/* Decorative number -- overlapping top-right */}
              <span className="pointer-events-none absolute -top-4 -right-2 text-[7rem] font-extrabold leading-none text-surface-900/40 select-none transition-colors group-hover:text-cyan-500/5">
                {s.num}
              </span>

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl glass-light transition-colors duration-300 group-hover:border-cyan-500/20">
                  <s.icon className="h-6 w-6 text-cyan-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{s.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-surface-400">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
