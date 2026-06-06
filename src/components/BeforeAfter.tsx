import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { X, Check } from "lucide-react";

function BadMockup() {
  return (
    <div className="rounded-xl border border-red-500/10 bg-surface-900/80 p-1">
      <div className="flex items-center gap-1.5 border-b border-red-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400/30" />
        <div className="h-2 w-2 rounded-full bg-red-400/30" />
        <div className="h-2 w-2 rounded-full bg-red-400/30" />
        <div className="ml-2 h-4 flex-1 rounded bg-surface-800" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex gap-2"><div className="h-3 w-16 rounded bg-surface-700" /><div className="h-3 w-12 rounded bg-surface-700" /><div className="h-3 w-20 rounded bg-surface-700" /></div>
        <div className="h-24 w-full rounded bg-surface-800/60" />
        <div className="space-y-1.5"><div className="h-3 w-full rounded bg-surface-800" /><div className="h-2 w-4/5 rounded bg-surface-800/50" /><div className="h-2 w-3/4 rounded bg-surface-800/30" /></div>
        <div className="flex gap-2"><div className="h-7 w-20 rounded bg-red-500/15" /><div className="h-7 w-16 rounded bg-surface-800/40" /></div>
        <div className="grid grid-cols-3 gap-2"><div className="h-14 rounded bg-surface-800/40" /><div className="h-18 rounded bg-surface-800/20" /><div className="h-12 rounded bg-surface-800/40" /></div>
      </div>
    </div>
  );
}

function GoodMockup() {
  return (
    <div className="glass rounded-xl glow-cyan p-1">
      <div className="flex items-center gap-1.5 border-b border-cyan-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-cyan-400/60" /><div className="h-2 w-2 rounded-full bg-cyan-400/40" /><div className="h-2 w-2 rounded-full bg-cyan-400/40" />
        <div className="ml-2 h-4 flex-1 rounded bg-surface-700 px-2 text-[9px] leading-4 text-surface-500">tunegocio.com</div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between"><div className="h-3 w-16 rounded bg-cyan-500/30" /><div className="flex gap-3"><div className="h-2 w-10 rounded bg-surface-600" /><div className="h-2 w-10 rounded bg-surface-600" /><div className="h-5 w-14 rounded bg-cyan-500/40" /></div></div>
        <div className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5"><div className="mb-2 h-4 w-3/4 rounded bg-white/20" /><div className="mb-1 h-2 w-full rounded bg-white/10" /><div className="mb-3 h-2 w-2/3 rounded bg-white/5" /><div className="h-7 w-24 rounded-lg bg-cyan-500/40" /></div>
        <div className="grid grid-cols-3 gap-2">{["Servicios","Portafolio","Contacto"].map((k)=>(<div key={k} className="space-y-1.5 rounded-lg border border-cyan-500/10 p-2.5"><div className="h-3.5 w-3.5 rounded bg-cyan-500/30" /><div className="h-2 w-full rounded bg-surface-700" /><div className="h-1.5 w-2/3 rounded bg-surface-800" /></div>))}</div>
      </div>
    </div>
  );
}

const painPoints = [
  "Inversión inicial de $3,000–$10,000",
  "Meses de espera para ver resultados",
  "Sin soporte después de la entrega",
  "Hosting, SSL y mantenimiento aparte",
];

const gains = [
  "Costo inicial: $0, todo por suscripción",
  "Tu web lista en 48 horas",
  "Soporte y cambios ilimitados",
  "Hosting, SSL y backups incluidos",
];

export default function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="¿Por qué cambiar?"
          lightText="El problema con"
          boldText="las agencias tradicionales."
          className="mb-16"
        />

        {/* Side by side comparison */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10">
                <X className="h-3.5 w-3.5 text-red-400/70" />
              </div>
              <span className="text-xs font-medium tracking-[0.2em] text-red-400/50 uppercase">Método tradicional</span>
            </div>

            <div className="mb-6 opacity-60 grayscale transition-all duration-500 hover:opacity-75 hover:grayscale-[50%]">
              <BadMockup />
            </div>

            <ul className="space-y-3">
              {painPoints.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/40" />
                  <span className="text-sm text-surface-500">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* WaaS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10">
                <Check className="h-3.5 w-3.5 text-cyan-400" />
              </div>
              <span className="text-xs font-medium tracking-[0.2em] text-cyan-400/70 uppercase">Con WebFlowStudio</span>
            </div>

            <div className="mb-6">
              <GoodMockup />
            </div>

            <ul className="space-y-3">
              {gains.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + i * 0.06 }}
                  className="flex items-start gap-2.5"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span className="text-sm text-surface-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
