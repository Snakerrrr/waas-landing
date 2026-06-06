import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAFinalProps {
  onStartOnboarding: () => void;
}

export default function CTAFinal({ onStartOnboarding }: CTAFinalProps) {
  return (
    <section className="mesh-gradient relative flex min-h-[70vh] items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase"
        >
          Lanza tu web esta semana
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 text-4xl font-black text-white sm:text-6xl lg:text-8xl"
        >
          ¿Listo para<br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            empezar?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-12 max-w-xl text-lg text-surface-400"
        >
          Únete a más de 200 negocios que ya dejaron de preocuparse por su web.
          14 días de garantía de satisfacción.
        </motion.p>

        <motion.button
          onClick={onStartOnboarding}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-10 py-5 text-lg font-bold text-black transition-all hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          Comenzar Mi Proyecto
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </section>
  );
}
