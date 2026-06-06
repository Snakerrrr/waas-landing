import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import VideoModal from "./VideoModal";

interface HeroProps {
  onStartOnboarding: () => void;
}

const mockups = [
  {
    name: "Bella Cucina",
    category: "Restaurante",
    accent: "from-orange-500/30 to-red-500/20",
    nav: ["Menú", "Reservas", "Galería", "Contacto"],
    heroText: "La mejor cocina italiana de la ciudad",
    cards: ["Pasta Fresca", "Risotto", "Tiramisú"],
  },
  {
    name: "ShopNova",
    category: "E-Commerce",
    accent: "from-blue-500/30 to-indigo-500/20",
    nav: ["Productos", "Ofertas", "Carrito", "Mi Cuenta"],
    heroText: "Descubre las mejores ofertas del mes",
    cards: ["Electrónica", "Moda", "Hogar"],
  },
  {
    name: "LegalPro",
    category: "Servicios",
    accent: "from-surface-400/20 to-surface-500/10",
    nav: ["Servicios", "Equipo", "Blog", "Agendar"],
    heroText: "Asesoría legal confiable y profesional",
    cards: ["Corporativo", "Civil", "Laboral"],
  },
  {
    name: "VitalCare",
    category: "Salud",
    accent: "from-emerald-500/30 to-teal-500/20",
    nav: ["Especialidades", "Doctores", "Citas", "Portal"],
    heroText: "Tu salud en las mejores manos",
    cards: ["Medicina General", "Pediatría", "Cardiología"],
  },
];

function MockupSlide({ mockup }: { mockup: (typeof mockups)[0] }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <div className={`rounded-2xl border border-white/5 bg-gradient-to-br ${mockup.accent} p-1 shadow-2xl backdrop-blur-sm`}>
        <div className="rounded-xl bg-black/70 backdrop-blur-md">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-surface-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-surface-600" />
              <div className="h-2.5 w-2.5 rounded-full bg-surface-600" />
            </div>
            <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-surface-800/60 px-3">
              <span className="text-[10px] text-surface-500">{mockup.name.toLowerCase().replace(" ", "")}.com</span>
            </div>
          </div>

          {/* Page content */}
          <div className="p-5 sm:p-8">
            {/* Nav */}
            <div className="mb-6 flex items-center justify-between">
              <div className="h-3 w-20 rounded bg-white/15" />
              <div className="hidden gap-4 sm:flex">
                {mockup.nav.map((item) => (
                  <span key={item} className="text-[10px] font-medium text-surface-500">{item}</span>
                ))}
              </div>
            </div>

            {/* Hero area */}
            <div className="mb-6 rounded-xl bg-white/5 p-6 sm:p-8">
              <div className="mb-3 h-5 w-3/4 rounded bg-white/15 sm:h-6" />
              <div className="mb-2 h-3 w-full rounded bg-white/8" />
              <div className="mb-4 h-3 w-2/3 rounded bg-white/5" />
              <div className="h-8 w-28 rounded-lg bg-cyan-500/30" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-3">
              {mockup.cards.map((card) => (
                <div key={card} className="rounded-lg border border-white/5 bg-white/3 p-3">
                  <div className="mb-2 h-10 w-full rounded bg-white/5 sm:h-14" />
                  <div className="mb-1 h-2 w-3/4 rounded bg-white/10" />
                  <div className="h-1.5 w-1/2 rounded bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs font-medium text-surface-500">
        {mockup.name} — {mockup.category}
      </p>
    </div>
  );
}

export default function Hero({ onStartOnboarding }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const carouselOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockups.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Background carousel */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ opacity: carouselOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
          <div className="relative w-full opacity-30 blur-[1px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <MockupSlide mockup={mockups[currentSlide]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Ambient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
          <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />
        </div>

        {/* Content */}
        <motion.div className="relative z-10 mx-auto max-w-4xl px-6 text-center" style={{ y: contentY }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm font-medium text-cyan-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Website as a Service
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Tu Web Profesional.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sin Límites.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-surface-400 sm:text-lg"
          >
            Páginas web profesionales por suscripción mensual. Hosting, mantenimiento
            y cambios ilimitados. Lanzamos tu web en 48 horas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button
              onClick={onStartOnboarding}
              className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              Comenzar Mi Proyecto
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-3 rounded-xl border border-surface-700 px-8 py-4 text-base font-medium text-surface-300 transition-all hover:border-surface-500 hover:text-white"
            >
              <Play className="h-5 w-5 text-cyan-400" />
              Ver en 60 segundos
            </button>
          </motion.div>

          {/* Carousel indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-center gap-2"
          >
            {mockups.map((m, i) => (
              <button
                key={m.name}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-8 bg-cyan-400" : "w-1.5 bg-surface-700 hover:bg-surface-600"
                }`}
                aria-label={m.name}
              />
            ))}
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
