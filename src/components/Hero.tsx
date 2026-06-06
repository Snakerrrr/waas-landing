import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Play, ChevronLeft, ChevronRight } from "lucide-react";
import VideoModal from "./VideoModal";

interface HeroProps {
  onStartOnboarding: () => void;
}

const mockups = [
  {
    name: "Bella Cucina",
    category: "Restaurante",
    accent: "border-orange-500/20",
    accentBg: "bg-orange-500/10",
    accentText: "text-orange-400",
    nav: ["Menú", "Reservas", "Galería", "Contacto"],
    cards: ["Pasta Fresca", "Risotto Clásico", "Tiramisú"],
  },
  {
    name: "ShopNova",
    category: "E-Commerce",
    accent: "border-blue-500/20",
    accentBg: "bg-blue-500/10",
    accentText: "text-blue-400",
    nav: ["Productos", "Ofertas", "Carrito", "Mi Cuenta"],
    cards: ["Electrónica", "Moda", "Hogar"],
  },
  {
    name: "LegalPro",
    category: "Servicios Legales",
    accent: "border-surface-500/20",
    accentBg: "bg-surface-500/10",
    accentText: "text-surface-400",
    nav: ["Servicios", "Equipo", "Blog", "Agendar"],
    cards: ["Corporativo", "Civil", "Laboral"],
  },
  {
    name: "VitalCare",
    category: "Clínica Médica",
    accent: "border-emerald-500/20",
    accentBg: "bg-emerald-500/10",
    accentText: "text-emerald-400",
    nav: ["Especialidades", "Doctores", "Citas", "Portal"],
    cards: ["Medicina General", "Pediatría", "Cardiología"],
  },
];

function MockupSlide({ mockup }: { mockup: (typeof mockups)[0] }) {
  return (
    <div className={`rounded-2xl border ${mockup.accent} bg-surface-950 shadow-2xl shadow-black/50`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        </div>
        <div className="ml-2 flex h-6 flex-1 items-center rounded-md bg-surface-800/80 px-3">
          <span className="text-[11px] text-surface-400">
            {mockup.name.toLowerCase().replace(/\s/g, "")}.com
          </span>
        </div>
      </div>

      {/* Page content */}
      <div className="p-5 sm:p-6">
        {/* Nav */}
        <div className="mb-5 flex items-center justify-between">
          <div className={`rounded px-2 py-0.5 text-xs font-bold ${mockup.accentText}`}>
            {mockup.name}
          </div>
          <div className="hidden gap-4 sm:flex">
            {mockup.nav.map((item) => (
              <span key={item} className="text-[11px] text-surface-500">{item}</span>
            ))}
          </div>
        </div>

        {/* Hero area */}
        <div className={`mb-5 rounded-xl ${mockup.accentBg} p-5`}>
          <div className="mb-2 h-4 w-3/4 rounded bg-white/15" />
          <div className="mb-1.5 h-2.5 w-full rounded bg-white/8" />
          <div className="mb-4 h-2.5 w-2/3 rounded bg-white/5" />
          <div className="h-7 w-24 rounded-lg bg-cyan-500/40" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-3">
          {mockup.cards.map((card) => (
            <div key={card} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
              <div className="mb-2 h-12 w-full rounded bg-white/5 sm:h-16" />
              <div className="mb-1 h-2 w-full rounded bg-white/10" />
              <div className="h-1.5 w-2/3 rounded bg-white/5" />
              <p className="mt-2 text-[9px] text-surface-500">{card}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onStartOnboarding }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % mockups.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + mockups.length) % mockups.length);
  const next = () => setCurrent((p) => (p + 1) % mockups.length);

  return (
    <>
      <section className="mesh-gradient relative overflow-hidden pb-16 pt-28 sm:pt-32">
        {/* Ambient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute right-1/4 top-40 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Text content */}
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-medium text-cyan-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Website as a Service
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-5 text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Tu Web Profesional.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sin Límites.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-surface-400"
            >
              Páginas web profesionales por suscripción mensual. Hosting, mantenimiento
              y cambios ilimitados. Lanzamos tu web en 48 horas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <button
                onClick={onStartOnboarding}
                className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Comenzar Mi Proyecto
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </button>

              <button
                onClick={() => setVideoOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl border border-surface-700 px-7 py-3.5 text-sm font-medium text-surface-300 transition-all hover:border-surface-500 hover:text-white"
              >
                <Play className="h-4 w-4 text-cyan-400" />
                Ver en 60 segundos
              </button>
            </motion.div>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mx-auto max-w-3xl"
          >
            {/* Slide */}
            <div className="relative overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <MockupSlide mockup={mockups[current]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute top-1/2 -left-4 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-surface-700 bg-surface-900 text-surface-400 transition-all hover:border-surface-500 hover:text-white sm:-left-12"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -right-4 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-surface-700 bg-surface-900 text-surface-400 transition-all hover:border-surface-500 hover:text-white sm:-right-12"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Dots + label */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex gap-2">
                {mockups.map((m, i) => (
                  <button
                    key={m.name}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-cyan-400" : "w-1.5 bg-surface-700 hover:bg-surface-500"
                    }`}
                    aria-label={m.name}
                  />
                ))}
              </div>
              <span className="text-xs text-surface-500">
                {mockups[current].name} — {mockups[current].category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#como-funciona"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ArrowDown className="h-5 w-5 text-surface-600" />
          </motion.div>
        </motion.a>
      </section>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  );
}
