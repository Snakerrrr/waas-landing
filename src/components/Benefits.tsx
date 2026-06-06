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
  "Costo inicial $3,000–$10,000",
  "Hosting aparte (costo extra)",
  "Cambios: $50–$150 cada uno",
  "Soporte: pago por hora",
  "Actualizaciones: tú te encargas",
  "Backups: manual o inexistente",
  "SSL: costo extra",
  "Resultado: meses de espera",
];

const waasPerks = [
  "Costo inicial: $0",
  "Hosting premium incluido",
  "Cambios ilimitados",
  "Soporte ilimitado",
  "Actualizaciones automáticas",
  "Backups diarios",
  "SSL incluido",
  "Tu web lista en 48h",
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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-12 text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-cyan-400/70 uppercase">Comparativa</p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl">
          <span className="font-extralight tracking-tight text-surface-400">Tradicional </span>
          <span className="font-extrabold tracking-tight text-white">vs WaaS</span>
        </h3>
      </div>

      <div className="relative mx-auto grid max-w-5xl items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
        {/* VS badge floating center */}
        <div className="pointer-events-none absolute inset-0 z-20 hidden items-center justify-center lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black text-xl font-black text-white shadow-2xl">
            VS
          </div>
        </div>

        {/* Traditional card -- desaturated, heavy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group rounded-2xl border border-surface-800/60 bg-surface-950/60 p-8 transition-all duration-300 hover:bg-surface-900/80 lg:rounded-r-none lg:pr-12"
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
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black text-sm font-black text-white">
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
    <section id="beneficios" className="py-24 sm:py-32">
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
                className={`group glass rounded-2xl transition-all duration-300 hover:border-white/10 ${b.span} ${isLarge ? "p-8" : "p-6"}`}
              >
                <div className={`mb-4 flex items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5 ${isLarge ? "h-14 w-14" : "h-11 w-11"}`}>
                  <b.icon className={`text-cyan-400 ${isLarge ? "h-7 w-7" : "h-5 w-5"}`} />
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
