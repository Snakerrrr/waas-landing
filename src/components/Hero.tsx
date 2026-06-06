import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface HeroProps {
  onStartOnboarding: () => void;
}

const mockups = [
  { name: "Bella Cucina", cat: "Restaurante", accent: "border-orange-500/20", accentBg: "bg-orange-500/10", nav: ["Menú", "Reservas", "Galería"], cards: ["Pasta Fresca", "Risotto", "Tiramisú"] },
  { name: "ShopNova", cat: "E-Commerce", accent: "border-blue-500/20", accentBg: "bg-blue-500/10", nav: ["Productos", "Ofertas", "Carrito"], cards: ["Electrónica", "Moda", "Hogar"] },
  { name: "LegalPro", cat: "Servicios", accent: "border-surface-500/20", accentBg: "bg-surface-500/10", nav: ["Servicios", "Equipo", "Blog"], cards: ["Corporativo", "Civil", "Laboral"] },
  { name: "VitalCare", cat: "Salud", accent: "border-emerald-500/20", accentBg: "bg-emerald-500/10", nav: ["Especialidades", "Doctores", "Citas"], cards: ["General", "Pediatría", "Cardio"] },
];

function Mockup({ m, className = "" }: { m: (typeof mockups)[0]; className?: string }) {
  return (
    <div className={`rounded-2xl border ${m.accent} bg-surface-950 shadow-2xl shadow-black/60 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400/50" />
        <div className="h-2 w-2 rounded-full bg-amber-400/50" />
        <div className="h-2 w-2 rounded-full bg-emerald-400/50" />
        <div className="ml-2 h-5 flex-1 rounded bg-surface-800/60 px-2 text-[10px] leading-5 text-surface-500">
          {m.name.toLowerCase().replace(/\s/g, "")}.com
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-[10px] font-bold text-surface-300">{m.name}</div>
          <div className="hidden gap-3 sm:flex">{m.nav.map((n) => <span key={n} className="text-[9px] text-surface-600">{n}</span>)}</div>
        </div>
        <div className={`mb-3 rounded-lg ${m.accentBg} p-4`}>
          <div className="mb-1.5 h-3 w-3/4 rounded bg-white/15" />
          <div className="mb-1 h-2 w-full rounded bg-white/8" />
          <div className="mb-3 h-2 w-2/3 rounded bg-white/5" />
          <div className="h-6 w-20 rounded bg-cyan-500/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {m.cards.map((c) => (
            <div key={c} className="rounded border border-white/5 bg-white/[0.02] p-2">
              <div className="mb-1.5 h-8 rounded bg-white/5" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
              <p className="mt-1 text-[8px] text-surface-600">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onStartOnboarding }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % mockups.length), 5000);
    return () => clearInterval(t);
  }, []);

  const nextIdx = (idx + 1) % mockups.length;

  return (
    <>
      <section className="mesh-gradient relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pb-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-[10%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute right-[5%] bottom-1/4 h-[250px] w-[250px] rounded-full bg-blue-500/4 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            {/* Left -- Text (asymmetric, left-aligned) */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                </span>
                Website as a Service
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6"
              >
                <span className="block text-3xl font-light tracking-tight text-surface-300 sm:text-4xl md:text-5xl">
                  Tu Web Profesional.
                </span>
                <span className="block text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Sin Límites.{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Por Suscripción.
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8 max-w-md text-base leading-relaxed text-surface-400"
              >
                Hosting, mantenimiento y cambios ilimitados incluidos.
                Lanzamos tu web en 48 horas.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={onStartOnboarding}
                  className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Comenzar Mi Proyecto <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </button>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-xl border border-surface-700 px-7 py-3.5 text-sm font-medium text-surface-300 transition-all hover:border-surface-500 hover:text-white"
                >
                  <Play className="h-4 w-4 text-cyan-400" /> Ver en 60s
                </button>
              </motion.div>
            </div>

            {/* Right -- Mockup carousel with overlap */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="relative lg:translate-x-8 xl:translate-x-16"
            >
              {/* Ghost mockup behind */}
              <div className="absolute -bottom-6 -left-6 z-0 w-[85%] opacity-25 blur-[1px]">
                <Mockup m={mockups[nextIdx]} className="rotate-[-3deg]" />
              </div>

              {/* Main mockup */}
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, rotate: 0 }}
                    animate={{ opacity: 1, y: 0, rotate: 2 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Mockup m={mockups[idx]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  {mockups.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-cyan-400" : "w-1.5 bg-surface-700 hover:bg-surface-500"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-surface-500">{mockups[idx].name}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
