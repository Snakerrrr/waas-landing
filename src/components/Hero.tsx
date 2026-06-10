import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import VideoModal from "./VideoModal";

interface HeroProps {
  onStartOnboarding: () => void;
}

const phrases = [
  "Tu Web Profesional.",
  "Sin Límites.",
  "Por Suscripción.",
  "Lista en 48 Horas.",
];

const stats = [
  { value: "200+", label: "Negocios activos" },
  { value: "48h", label: "Tiempo de lanzamiento" },
  { value: "99.9%", label: "Uptime garantizado" },
];

function Typewriter({ phrases: items }: { phrases: string[] }) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = items[phraseIdx];

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const pause = !deleting && charIdx === current.length ? 2000 : deleting && charIdx === 0 ? 500 : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setPhraseIdx((p) => (p + 1) % items.length);
      } else {
        setCharIdx((p) => p + (deleting ? -1 : 1));
      }
    }, pause);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, current, items]);

  return (
    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
      {current.slice(0, charIdx)}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
        className="ml-0.5 inline-block w-[3px] bg-cyan-400 align-middle sm:w-[4px]"
        style={{ height: "0.85em" }}
      />
    </span>
  );
}

export default function Hero({ onStartOnboarding }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden sm:min-h-screen">
        {/* Aurora background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.07] via-transparent to-transparent" />
          <div className="absolute top-[-20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute top-[10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] h-[350px] w-[350px] rounded-full bg-violet-500/6 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0F19] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-medium text-cyan-400 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Website as a Service
          </motion.div>

          {/* Headline with typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-white">Creamos Webs</span>
            <Typewriter phrases={phrases} />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-surface-400 sm:text-lg"
          >
            Páginas web profesionales por suscripción mensual.
            Hosting, mantenimiento y cambios ilimitados incluidos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={onStartOnboarding}
              className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Comenzar Mi Proyecto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-base font-medium text-surface-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            >
              <Play className="h-4 w-4 text-cyan-400" />
              Ver en 60 segundos
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="hidden h-8 w-px bg-white/10 sm:block" />}
                <div className={i > 0 ? "sm:pl-3" : ""}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-surface-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
