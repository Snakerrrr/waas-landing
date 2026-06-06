import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface HeroProps {
  onStartOnboarding: () => void;
}

const headlineWords = ["Tu", "Web.", "Sin", "Límites.", "Por", "Suscripción."];

export default function Hero({ onStartOnboarding }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <>
      <section ref={sectionRef} className="mesh-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
        {/* Parallax orbs */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]"
            style={{ y: orbY1 }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]"
            style={{ y: orbY2 }}
          />
        </div>

        <motion.div className="relative z-10 mx-auto max-w-5xl text-center" style={{ y: contentY }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-medium text-cyan-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Website as a Service
          </motion.div>

          {/* Headline */}
          <h1 className="mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-5xl leading-none font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={i >= 2 && i <= 3 ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" : "text-white"}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-surface-400 sm:text-xl"
          >
            Páginas web profesionales por suscripción mensual. Hosting, mantenimiento
            y cambios ilimitados incluidos. Lanzamos tu web en 48 horas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={onStartOnboarding}
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-10 py-5 text-lg font-bold text-black transition-all hover:bg-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Comenzar Mi Proyecto
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-3 rounded-xl border border-surface-700 px-8 py-5 text-lg font-semibold text-surface-300 transition-all hover:border-surface-500 hover:text-white"
            >
              <Play className="h-5 w-5 text-cyan-400" />
              Ver en 60 segundos
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#como-funciona"
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity: arrowOpacity }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ArrowDown className="h-6 w-6 text-surface-600" />
          </motion.div>
        </motion.a>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
