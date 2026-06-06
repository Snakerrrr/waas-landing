import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Clock, Bell, Eye, X } from "lucide-react";
import { useTilt } from "../hooks/useTilt";
import SectionTitle from "./SectionTitle";

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
  { title: "HomeVista", category: "Inmobiliaria", description: "Propiedades con filtros avanzados, mapas interactivos y tours virtuales.", gradient: "from-violet-500/20 to-purple-500/20", tag: "Próximamente", status: "coming_soon", url: null },
];

function WaitlistModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={onClose}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md glass rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-surface-500 hover:text-white"><X className="h-5 w-5" /></button>
        {!submitted ? (
          <>
            <Bell className="mb-4 h-6 w-6 text-cyan-400" />
            <h3 className="mb-2 text-lg font-bold text-white">{demo.title} — Lista de Espera</h3>
            <p className="mb-6 text-sm text-surface-400">Te avisamos cuando esté lista.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" required
                className="w-full rounded-xl border border-surface-700 bg-black px-4 py-3 text-white placeholder-surface-500 outline-none focus:border-cyan-500" />
              <button type="submit" className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black hover:bg-cyan-400">Avisarme</button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <Bell className="mx-auto mb-3 h-6 w-6 text-cyan-400" />
            <p className="font-bold text-white">Te avisaremos</p>
            <p className="text-sm text-surface-400">cuando <strong className="text-white">{demo.title}</strong> esté disponible.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function DemoCard({ demo, index, onWaitlist }: { demo: Demo; index: number; onWaitlist: () => void }) {
  const tilt = useTilt<HTMLDivElement>();
  const isFirst = index === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={isFirst ? "sm:col-span-2 sm:row-span-2" : ""}
    >
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="group h-full overflow-hidden glass rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:shadow-xl hover:shadow-cyan-500/5"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.15s ease-out" }}
      >
        <div className={`relative bg-gradient-to-br ${demo.gradient} ${isFirst ? "h-56 sm:h-72" : "h-44"} p-5`}>
          <div className={`h-full rounded-lg border border-white/5 bg-black/40 backdrop-blur-sm ${isFirst ? "-translate-y-2" : ""}`}>
            <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
              <div className="h-2 w-2 rounded-full bg-surface-600" />
              <div className="h-2 w-2 rounded-full bg-surface-600" />
              <div className="h-2 w-2 rounded-full bg-surface-600" />
            </div>
            <div className="space-y-2 p-3">
              <div className={`rounded bg-white/10 ${isFirst ? "h-4 w-3/4" : "h-2 w-3/4"}`} />
              <div className={`rounded bg-white/5 ${isFirst ? "h-3 w-full" : "h-2 w-full"}`} />
              <div className={`rounded bg-white/5 ${isFirst ? "h-3 w-5/6" : "h-2 w-5/6"}`} />
              {isFirst && <div className="mt-2 h-6 w-20 rounded bg-cyan-500/30" />}
            </div>
          </div>
          {demo.tag && (
            <span className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold ${
              demo.status === "live" ? "bg-emerald-500/20 text-emerald-400 ring-1 ring-emerald-500/30" : "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30"
            }`}>{demo.tag}</span>
          )}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            {demo.status === "live" ? (
              <a href={demo.url!} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-black shadow-lg">
                <Eye className="h-4 w-4" /> Ver Demo
              </a>
            ) : (
              <button onClick={onWaitlist} className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black shadow-lg">
                <Bell className="h-4 w-4" /> Avisarme
              </button>
            )}
          </div>
        </div>
        <div className="p-5">
          <div className="mb-2 flex items-center justify-between">
            <h3 className={`font-bold text-white ${isFirst ? "text-xl" : "text-base"}`}>{demo.title}</h3>
            <span className="text-xs text-surface-500">{demo.category}</span>
          </div>
          <p className="mb-3 text-sm leading-relaxed text-surface-400">{demo.description}</p>
          {demo.status === "live" ? (
            <a href={demo.url!} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300">
              <ExternalLink className="h-3.5 w-3.5" /> Ver en vivo
            </a>
          ) : (
            <button onClick={onWaitlist} className="inline-flex items-center gap-1.5 text-sm font-medium text-surface-500 hover:text-cyan-400">
              <Clock className="h-3.5 w-3.5" /> En desarrollo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Demos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [waitlistDemo, setWaitlistDemo] = useState<Demo | null>(null);
  const filtered = activeCategory === "Todos" ? demos : demos.filter((d) => d.category === activeCategory);

  return (
    <section id="demos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Portafolio" lightText="Demos listas para" boldText="tu negocio." className="mb-10" />

        {/* Editorial filters */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-10 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm">
          {categories.map((cat, i) => (
            <span key={cat} className="flex items-center">
              <button onClick={() => setActiveCategory(cat)}
                className={`px-2 py-1 font-medium transition-colors ${activeCategory === cat ? "text-cyan-400" : "text-surface-500 hover:text-surface-300"}`}>
                {cat}
              </button>
              {i < categories.length - 1 && <span className="text-surface-800">/</span>}
            </span>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((demo, i) => (
              <DemoCard key={demo.title} demo={demo} index={i} onWaitlist={() => setWaitlistDemo(demo)} />
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
