import { useState, useCallback, createContext, useContext } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { ExternalLink, Clock, Bell, X, ArrowUpRight } from "lucide-react";
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

const demos: Demo[] = [
  { title: "Bella Cucina", category: "Restaurante", description: "Menú interactivo con reservas online, galería de platos y sistema de pedidos.", gradient: "from-orange-500/30 to-red-500/20", tag: "Live", status: "live", url: "https://demo-restaurante.tudominio.com" },
  { title: "ShopNova", category: "E-Commerce", description: "Tienda online completa con carrito, pagos integrados y gestión de inventario.", gradient: "from-blue-500/30 to-indigo-500/20", tag: "Live", status: "live", url: "https://demo-ecommerce.tudominio.com" },
  { title: "LegalPro", category: "Servicios", description: "Firma de abogados con agenda online, blog de contenidos y chat en vivo.", gradient: "from-surface-400/20 to-surface-500/15", tag: "Live", status: "live", url: "https://demo-legal.tudominio.com" },
  { title: "VitalCare", category: "Salud", description: "Clínica médica con citas online, perfiles de doctores y portal de pacientes.", gradient: "from-emerald-500/30 to-teal-500/20", tag: "Próximamente", status: "coming_soon", url: null },
  { title: "IronFit", category: "Fitness", description: "Gimnasio con horarios de clases, membresías online y reservas de sesiones.", gradient: "from-amber-500/30 to-orange-500/20", tag: "Próximamente", status: "coming_soon", url: null },
  { title: "HomeVista", category: "Inmobiliaria", description: "Propiedades con filtros avanzados, mapas interactivos y tours virtuales.", gradient: "from-violet-500/30 to-purple-500/20", tag: "Próximamente", status: "coming_soon", url: null },
];

// ── Hover Slider Context ──
interface SliderContextValue { active: number; setActive: (i: number) => void; }
const SliderCtx = createContext<SliderContextValue>({ active: 0, setActive: () => {} });

// ── Text Stagger on Hover ──
function StaggerText({ text, index }: { text: string; index: number }) {
  const { active, setActive } = useContext(SliderCtx);
  const chars = text.split("");
  const isActive = active === index;

  return (
    <span className="relative inline-block" onMouseEnter={() => setActive(index)}>
      {chars.map((char, ci) => (
        <span key={`${char}-${ci}`} className="relative inline-block overflow-hidden">
          <MotionConfig transition={{ delay: ci * 0.02, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.span
              className="inline-block text-surface-500"
              animate={isActive ? { y: "-110%", opacity: 0 } : { y: "0%", opacity: 0.4 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
            <motion.span
              className="absolute left-0 top-0 inline-block text-white"
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  );
}

// ── Mockup Preview ──
function MockupPreview({ demo, index }: { demo: Demo; index: number }) {
  const { active } = useContext(SliderCtx);

  return (
    <motion.div
      className="absolute inset-0"
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.7 }}
      animate={active === index
        ? { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }
        : { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }
      }
    >
      <div className={`h-full w-full bg-gradient-to-br ${demo.gradient} p-6`}>
        <div className="h-full rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <div className="h-2 w-2 rounded-full bg-surface-500" />
            <div className="h-2 w-2 rounded-full bg-surface-500" />
            <div className="h-2 w-2 rounded-full bg-surface-500" />
            <span className="ml-2 text-[10px] text-surface-500">{demo.title.toLowerCase().replace(/\s/g, "")}.com</span>
          </div>
          <div className="space-y-3 p-5">
            <div className="flex items-center justify-between">
              <div className="h-3 w-20 rounded bg-white/15" />
              <div className="flex gap-3">
                <div className="h-2 w-10 rounded bg-white/10" />
                <div className="h-2 w-10 rounded bg-white/10" />
              </div>
            </div>
            <div className="rounded-lg bg-white/5 p-5">
              <div className="mb-2 h-4 w-3/4 rounded bg-white/15" />
              <div className="mb-1.5 h-2.5 w-full rounded bg-white/8" />
              <div className="mb-3 h-2.5 w-2/3 rounded bg-white/5" />
              <div className="h-7 w-24 rounded-lg bg-cyan-500/30" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((k) => (
                <div key={k} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <div className="mb-2 h-10 rounded bg-white/5" />
                  <div className="h-2 w-3/4 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Waitlist Modal ──
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
                className="w-full rounded-xl border border-surface-700 bg-surface-950 px-4 py-3 text-white placeholder-surface-500 outline-none focus:border-cyan-500" />
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

// ── Main Demos Section ──
export default function Demos() {
  const [active, setActiveState] = useState(0);
  const [waitlistDemo, setWaitlistDemo] = useState<Demo | null>(null);
  const setActive = useCallback((i: number) => setActiveState(i), []);

  return (
    <section id="demos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Portafolio" lightText="Demos listas para" boldText="tu negocio." className="mb-14" />

        <SliderCtx.Provider value={{ active, setActive }}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
            {/* Left -- Text list */}
            <div className="flex flex-col justify-center">
              {demos.map((demo, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={demo.title}
                    className={`group border-b border-surface-800/40 py-5 transition-all duration-300 ${isActive ? "" : "opacity-60 hover:opacity-80"}`}
                    onMouseEnter={() => setActive(i)}
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <h3 className="text-2xl font-bold sm:text-3xl">
                        <StaggerText text={demo.title} index={i} />
                      </h3>
                      <div className="flex items-center gap-2">
                        {demo.tag && (
                          <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                            demo.status === "live" ? "bg-emerald-500/15 text-emerald-400" : "bg-cyan-500/15 text-cyan-400"
                          }`}>{demo.tag}</span>
                        )}
                        {isActive && demo.status === "live" && (
                          <motion.a
                            href={demo.url!}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 transition-colors hover:bg-cyan-500/20"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mb-2 text-sm leading-relaxed text-surface-400">{demo.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-xs text-surface-600">{demo.category}</span>
                            {demo.status === "live" ? (
                              <a href={demo.url!} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300">
                                <ExternalLink className="h-3 w-3" /> Ver en vivo
                              </a>
                            ) : (
                              <button onClick={() => setWaitlistDemo(demo)}
                                className="inline-flex items-center gap-1 text-xs font-medium text-surface-500 hover:text-cyan-400">
                                <Clock className="h-3 w-3" /> Lista de espera
                              </button>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right -- Mockup preview with clipPath transitions */}
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 lg:block">
              {demos.map((demo, i) => (
                <MockupPreview key={demo.title} demo={demo} index={i} />
              ))}

              {/* Floating label */}
              <div className="absolute bottom-4 left-4 z-10">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={demos[active].title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass inline-block rounded-lg px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {demos[active].title} — {demos[active].category}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile fallback -- simple card for active demo */}
            <div className="lg:hidden">
              <div className={`overflow-hidden rounded-2xl bg-gradient-to-br ${demos[active].gradient} p-5`}>
                <div className="rounded-xl border border-white/5 bg-black/40 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-surface-500" />
                    <div className="h-2 w-2 rounded-full bg-surface-500" />
                    <div className="h-2 w-2 rounded-full bg-surface-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-white/15" />
                    <div className="h-2 w-full rounded bg-white/8" />
                    <div className="h-2 w-2/3 rounded bg-white/5" />
                    <div className="mt-3 h-7 w-24 rounded bg-cyan-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SliderCtx.Provider>
      </div>

      <AnimatePresence>
        {waitlistDemo && <WaitlistModal demo={waitlistDemo} onClose={() => setWaitlistDemo(null)} />}
      </AnimatePresence>
    </section>
  );
}
