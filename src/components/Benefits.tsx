import { useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import {
  Server, RefreshCcw, Headphones, ShieldCheck,
  Search, HardDrive, CreditCard, TrendingUp,
  X as XIcon, Check, Zap,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const benefits = [
  { icon: CreditCard, title: "Sin Inversión Inicial", description: "Olvídate de pagar $3,000–$10,000 de golpe. Empieza con una cuota mensual accesible.", span: "sm:col-span-2 sm:row-span-2" },
  { icon: Server, title: "Hosting Premium", description: "Servidores ultra-rápidos con CDN global.", span: "" },
  { icon: RefreshCcw, title: "Cambios Ilimitados", description: "Sin cargos extra ni esperas eternas.", span: "" },
  { icon: Headphones, title: "Soporte Prioritario", description: "Equipo dedicado que responde en menos de 2 horas en horario laboral.", span: "" },
  { icon: ShieldCheck, title: "Seguridad 24/7", description: "SSL, firewalls, actualizaciones y monitoreo continuo.", span: "sm:col-span-2" },
  { icon: Search, title: "SEO Optimizado", description: "Posicionamiento desde el día uno.", span: "" },
  { icon: HardDrive, title: "Backups Diarios", description: "Tu información siempre protegida.", span: "" },
  { icon: TrendingUp, title: "Escala Sin Límites", description: "Tu web crece contigo.", span: "" },
];

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

function BadMockupMini() {
  return (
    <div className="rounded-lg border border-red-500/10 bg-surface-900/60 p-1 opacity-60 grayscale">
      <div className="flex items-center gap-1 border-b border-red-500/5 px-2 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-red-400/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-red-400/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-red-400/30" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="h-10 w-full rounded bg-surface-800/50" />
        <div className="h-2 w-3/4 rounded bg-surface-800/40" />
        <div className="h-2 w-1/2 rounded bg-surface-800/30" />
        <div className="flex gap-1.5"><div className="h-4 w-12 rounded bg-red-500/10" /><div className="h-4 w-10 rounded bg-surface-800/30" /></div>
      </div>
    </div>
  );
}

function GoodMockupMini() {
  return (
    <div className="rounded-lg border border-cyan-500/15 bg-surface-800/60 p-1 glow-cyan">
      <div className="flex items-center gap-1 border-b border-cyan-500/10 px-2 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/30" />
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/30" />
      </div>
      <div className="space-y-1.5 p-2.5">
        <div className="rounded bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-2.5"><div className="mb-1 h-2.5 w-2/3 rounded bg-white/15" /><div className="h-1.5 w-full rounded bg-white/8" /><div className="mt-1.5 h-4 w-14 rounded bg-cyan-500/30" /></div>
        <div className="grid grid-cols-3 gap-1">{[1,2,3].map(k=>(<div key={k} className="rounded border border-cyan-500/10 p-1.5"><div className="h-1.5 w-2 rounded bg-cyan-500/25" /><div className="mt-1 h-1 w-full rounded bg-surface-700" /></div>))}</div>
      </div>
    </div>
  );
}

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-400/70 uppercase">¿Por qué cambiar?</p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl">
          <span className="font-extralight tracking-tight text-surface-400">Agencia tradicional </span>
          <span className="font-extrabold tracking-tight text-white">vs WebFlowStudio</span>
        </h3>
      </div>

      <div className="relative mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
        {/* VS badge floating center */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-xl font-black text-white shadow-2xl">
            VS
          </div>
        </div>

        {/* Traditional card -- desaturated, heavy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group rounded-2xl border border-surface-800/60 bg-surface-950/60 p-8 transition-all duration-300 ease-out hover:border-surface-700 hover:bg-surface-900/80 lg:rounded-r-none lg:pr-12"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-800">
              <XIcon className="h-5 w-5 text-surface-500" />
            </div>
            <div>
              <h4 className="font-bold text-surface-400">Agencia Tradicional</h4>
              <p className="text-xs text-surface-600">El modelo que ya conoces</p>
            </div>
          </div>

          <div className="mb-6">
            <BadMockupMini />
          </div>

          <ul className="space-y-3">
            {traditionalPains.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <XIcon className="mt-0.5 h-4 w-4 shrink-0 text-red-400/50" />
                <span className="text-sm text-surface-500">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* VS badge mobile */}
        <div className="flex items-center justify-center lg:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-sm font-black text-white">
            VS
          </div>
        </div>

        {/* WaaS card -- glass, glow, tilt, protagonist */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 lg:-ml-1"
        >
          <div
            ref={waasRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
            className="group h-full rounded-2xl glass border-cyan-500/20 p-8 shadow-xl shadow-cyan-500/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 lg:rounded-l-none lg:pl-12"
            style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease-out, box-shadow 0.5s ease" }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 ring-1 ring-cyan-500/20">
                <Zap className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-bold text-white">Modelo WaaS</h4>
                <p className="text-xs text-cyan-400/60">La forma inteligente</p>
              </div>
            </div>

            <div className="mb-6">
              <GoodMockupMini />
            </div>

            <ul className="space-y-3">
              {waasPerks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="text-sm text-surface-200">{item}</span>
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
        <SectionTitle eyebrow="Beneficios" lightText="Todo incluido." boldText="Cero sorpresas." className="mb-14" />

        {/* Bento Grid */}
        <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const isLarge = b.span.includes("row-span-2");
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group glass rounded-2xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg hover:shadow-white/[0.02] ${b.span} ${isLarge ? "p-8" : "p-6"}`}
              >
                <div className={`mb-4 flex items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 transition-colors duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 ${isLarge ? "h-14 w-14" : "h-11 w-11"}`}>
                  <b.icon className={`text-cyan-400 transition-transform duration-300 group-hover:scale-110 ${isLarge ? "h-7 w-7" : "h-5 w-5"}`} />
                </div>
                <h3 className={`mb-2 font-bold text-white ${isLarge ? "text-xl" : "text-base"}`}>{b.title}</h3>
                <p className={`leading-relaxed text-surface-400 ${isLarge ? "text-base" : "text-sm"}`}>{b.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison -- VS Cards */}
        <ComparisonCards />
      </div>
    </section>
  );
}
