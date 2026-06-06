import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "./CalendlyButton";

interface CTAFinalProps {
  onStartOnboarding: () => void;
}

export default function CTAFinal({ onStartOnboarding }: CTAFinalProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Decorative floating circle */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-[80px] animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-400/70 uppercase">
            Lanza tu web esta semana
          </motion.p>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-4xl sm:text-5xl md:text-6xl">
            <span className="block font-extralight tracking-tight text-surface-400">¿Listo para</span>
            <span className="block font-extrabold tracking-tight text-white">empezar?</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 max-w-lg text-base text-surface-500">
            Únete a más de 200 negocios que ya dejaron de preocuparse por su web. 14 días de garantía.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4">
            <button onClick={onStartOnboarding}
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">
              Comenzar Mi Proyecto <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <CalendlyButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
