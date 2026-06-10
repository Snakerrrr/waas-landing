import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Server, RefreshCcw, Headphones, ShieldCheck,
  Search, HardDrive, CreditCard, TrendingUp,
  X as XIcon, Check, Zap,
  type LucideIcon,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: CreditCard, title: "Sin Inversión Inicial", description: "Empieza con una cuota mensual accesible" },
  { icon: Server, title: "Hosting Premium", description: "Servidores ultra-rápidos con CDN global" },
  { icon: RefreshCcw, title: "Cambios Ilimitados", description: "Sin cargos extra ni esperas" },
  { icon: Headphones, title: "Soporte Prioritario", description: "Respuesta en menos de 2 horas" },
  { icon: ShieldCheck, title: "Seguridad 24/7", description: "SSL, firewalls y monitoreo" },
  { icon: Search, title: "SEO Optimizado", description: "Posicionamiento desde el día uno" },
  { icon: HardDrive, title: "Backups Diarios", description: "Tu información siempre protegida" },
  { icon: TrendingUp, title: "Escala Sin Límites", description: "Tu web crece contigo" },
];

const doubled = [...benefits, ...benefits];

const traditionalPains = [
  "Inversión inicial de $3,000–$10,000",
  "Meses de espera para resultados",
  "Sin soporte después de la entrega",
  "Hosting, SSL y mantenimiento aparte",
  "Cambios: $50–$150 cada uno",
  "Backups: manual o inexistente",
];

const waasPerks = [
  "Costo inicial: $0, todo por suscripción",
  "Tu web lista en 48 horas",
  "Soporte y cambios ilimitados",
  "Hosting, SSL y backups incluidos",
  "Actualizaciones automáticas",
  "SEO optimizado desde el día uno",
];

function ComparisonCards() {
  const waasRef = useRef<HTMLDivElement>(null);

  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const el = waasRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (waasRef.current) waasRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-400/70 uppercase">¿Por qué cambiar?</p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl">
          <span className="font-extralight tracking-tight text-surface-400">Tradicional </span>
          <span className="font-extrabold tracking-tight text-white">vs WaaS</span>
        </h3>
      </div>

      <div className="relative mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
        <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-xl font-black text-white shadow-2xl">VS</div>
        </div>

        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="group rounded-2xl border border-surface-800/60 bg-surface-950/60 p-8 transition-all duration-300 ease-out hover:border-surface-700 lg:rounded-r-none lg:pr-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-800"><XIcon className="h-5 w-5 text-surface-500" /></div>
            <div><h4 className="font-bold text-surface-400">Agencia Tradicional</h4><p className="text-xs text-surface-600">El modelo que ya conoces</p></div>
          </div>
          <ul className="space-y-3">
            {traditionalPains.map((item, i) => (
              <motion.li key={item} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }} className="flex items-start gap-3">
                <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/50" /><span className="text-sm text-surface-500">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="flex items-center justify-center lg:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-sm font-black text-white">VS</div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative z-10 lg:-ml-1">
          <div ref={waasRef} onMouseMove={handleTilt} onMouseLeave={resetTilt}
            className="group h-full rounded-2xl glass border-cyan-500/20 p-8 shadow-xl shadow-cyan-500/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 lg:rounded-l-none lg:pl-12"
            style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease-out, box-shadow 0.5s ease" }}>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/20"><Zap className="h-5 w-5 text-cyan-400" /></div>
              <div><h4 className="font-bold text-white">Modelo WaaS</h4><p className="text-xs text-cyan-400/60">La forma inteligente</p></div>
            </div>
            <ul className="space-y-3">
              {waasPerks.map((item, i) => (
                <motion.li key={item} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" /><span className="text-sm text-surface-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Beneficios" lightText="Todo incluido." boldText="Cero sorpresas." className="mb-10" />

        {/* Feature ticker */}
        <div
          className="relative mb-20 overflow-hidden py-4"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
          }}
        >
          <div className="animate-marquee flex whitespace-nowrap">
            {doubled.map((b, i) => (
              <div
                key={`${b.title}-${i}`}
                className="mx-3 inline-flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.06] bg-[#1E293B]/60 px-5 py-3.5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-[#1E293B]"
              >
                <b.icon className="h-5 w-5 shrink-0 text-cyan-400" />
                <div>
                  <p className="text-sm font-semibold text-white">{b.title}</p>
                  <p className="text-xs text-surface-400">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VS Comparison */}
        <ComparisonCards />
      </div>
    </section>
  );
}
