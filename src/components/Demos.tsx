import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Clock, Bell, Eye, X } from "lucide-react";
import { useTilt } from "../hooks/useTilt";

type DemoStatus = "live" | "coming_soon";

interface Demo {
  title: string;
  category: string;
  description: string;
  gradient: string;
  tag: string | null;
  status: DemoStatus;
  url: string | null;
}

const categories = ["Todos", "Restaurantes", "E-Commerce", "Servicios", "Salud", "Fitness", "Inmobiliaria"];

const demos: Demo[] = [
  { title: "Bella Cucina", category: "Restaurantes", description: "Menú interactivo con reservas online, galería de platos y sistema de pedidos.", gradient: "from-orange-500/20 to-red-500/20", tag: "Live", status: "live", url: "https://demo-restaurante.tudominio.com" },
  { title: "ShopNova", category: "E-Commerce", description: "Tienda online completa con carrito, pagos integrados y gestión de inventario.", gradient: "from-blue-500/20 to-indigo-500/20", tag: "Live", status: "live", url: "https://demo-ecommerce.tudominio.com" },
  { title: "LegalPro", category: "Servicios", description: "Firma de abogados con agenda online, blog de contenidos y chat en vivo.", gradient: "from-surface-500/20 to-surface-600/20", tag: "Live", status: "live", url: "https://demo-legal.tudominio.com" },
  { title: "VitalCare", category: "Salud", description: "Clínica médica con citas online, perfiles de doctores y portal de pacientes.", gradient: "from-emerald-500/20 to-teal-500/20", tag: "Próximamente", status: "coming_soon", url: null },
  { title: "IronFit", category: "Fitness", description: "Gimnasio con horarios de clases, membresías online y reservas de sesiones.", gradient: "from-amber-500/20 to-orange-500/20", tag: "Próximamente", status: "coming_soon", url: null },
  { title: "HomeVista", category: "Inmobiliaria", description: "Listado de propiedades con filtros avanzados, mapas interactivos y tours virtuales.", gradient: "from-violet-500/20 to-purple-500/20", tag: "Próximamente", status: "coming_soon", url: null },
];

function WaitlistModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(`Waitlist signup for ${demo.title}: ${email}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-md rounded-2xl border border-surface-800 bg-surface-950 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-surface-500 hover:text-white">
          <X className="h-5 w-5" />
        </button>
        {!submitted ? (
          <>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
              <Bell className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">{demo.title} — Lista de Espera</h3>
            <p className="mb-6 text-sm text-surface-400">Déjanos tu email y te avisamos cuando esté lista.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com" required
                className="w-full rounded-xl border border-surface-700 bg-black px-4 py-3 text-white placeholder-surface-500 outline-none focus:border-cyan-500"
              />
              <button type="submit" className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all hover:bg-cyan-400">
                Avisarme
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
              <Bell className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Te avisaremos</h3>
            <p className="text-surface-400">Recibirás un email cuando <strong className="text-white">{demo.title}</strong> esté disponible.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Demos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [waitlistDemo, setWaitlistDemo] = useState<Demo | null>(null);

  const filtered = activeCategory === "Todos" ? demos : demos.filter((d) => d.category === activeCategory);

  return (
    <section id="demos" className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">Portafolio</p>
          <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-7xl">
            Demos listas para<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">tu negocio.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-500 text-black"
                  : "border border-surface-800 text-surface-400 hover:border-surface-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((demo) => (
              <TiltCard key={demo.title} demo={demo} onWaitlist={() => setWaitlistDemo(demo)} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {waitlistDemo && <WaitlistModal demo={waitlistDemo} onClose={() => setWaitlistDemo(null)} />}
      </AnimatePresence>
    </section>
  );
}

function TiltCard({ demo, onWaitlist }: { demo: Demo; onWaitlist: () => void }) {
  const tilt = useTilt<HTMLDivElement>();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group overflow-hidden rounded-2xl border border-surface-800 bg-surface-950 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
      >
                {/* Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${demo.gradient} p-5`}>
                  <div className="h-full rounded-lg border border-white/5 bg-black/40 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
                      <div className="h-2 w-2 rounded-full bg-surface-600" />
                      <div className="h-2 w-2 rounded-full bg-surface-600" />
                      <div className="h-2 w-2 rounded-full bg-surface-600" />
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="h-2 w-3/4 rounded bg-white/10" />
                      <div className="h-2 w-full rounded bg-white/5" />
                      <div className="h-2 w-5/6 rounded bg-white/5" />
                    </div>
                  </div>
                  {demo.tag && (
                    <span className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold ${
                      demo.status === "live"
                        ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30"
                        : "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30"
                    }`}>
                      {demo.tag}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    {demo.status === "live" ? (
                      <a href={demo.url!} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-black shadow-lg">
                        <Eye className="h-4 w-4" /> Ver Demo
                      </a>
                    ) : (
                      <button onClick={onWaitlist}
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg">
                        <Bell className="h-4 w-4" /> Avisarme
                      </button>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{demo.title}</h3>
                    <span className="text-xs font-medium text-surface-500">{demo.category}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-surface-400">{demo.description}</p>
                  {demo.status === "live" ? (
                    <a href={demo.url!} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300">
                      <ExternalLink className="h-4 w-4" /> Ver en vivo
                    </a>
                  ) : (
                    <button onClick={onWaitlist}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-surface-500 transition-colors hover:text-cyan-400">
                      <Clock className="h-4 w-4" /> En desarrollo
                    </button>
                  )}
                </div>
      </div>
    </motion.div>
  );
}
