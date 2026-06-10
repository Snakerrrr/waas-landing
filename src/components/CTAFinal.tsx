import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import CalendlyButton from "./CalendlyButton";

interface CTAFinalProps {
  onStartOnboarding: () => void;
}

const highlights = [
  "Sin inversión inicial",
  "Web lista en 48 horas",
  "Cambios ilimitados",
  "14 días de garantía",
];

export default function CTAFinal({ onStartOnboarding }: CTAFinalProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-medium text-cyan-400"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Lanza tu web esta semana
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            ¿Listo para tener la web que tu negocio{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              merece?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mb-8 max-w-xl text-base text-surface-400"
          >
            Únete a más de 200 negocios que ya dejaron de preocuparse por su página web.
          </motion.p>

          {/* Highlight pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-3"
          >
            {highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-sm text-surface-300">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
                {h}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={onStartOnboarding}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Comenzar Mi Proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <CalendlyButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
