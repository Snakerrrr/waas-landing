import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

function BadMockup() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-surface-950 p-1">
      <div className="flex items-center gap-1.5 border-b border-red-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex gap-2"><div className="h-3 w-16 rounded bg-surface-700" /><div className="h-3 w-12 rounded bg-surface-700" /></div>
        <div className="h-20 w-full rounded bg-surface-800" />
        <div className="space-y-1.5"><div className="h-4 w-full rounded bg-surface-800" /><div className="h-2 w-4/5 rounded bg-surface-800/60" /></div>
        <div className="flex gap-2"><div className="h-6 w-20 rounded bg-red-500/20" /><div className="h-6 w-16 rounded bg-surface-700" /></div>
        <div className="grid grid-cols-3 gap-2"><div className="h-12 rounded bg-surface-800/50" /><div className="h-16 rounded bg-surface-800/30" /><div className="h-10 rounded bg-surface-800/50" /></div>
      </div>
    </div>
  );
}

function GoodMockup() {
  return (
    <div className="glass rounded-xl glow-cyan p-1">
      <div className="flex items-center gap-1.5 border-b border-cyan-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-cyan-400/60" /><div className="h-2 w-2 rounded-full bg-cyan-400/40" /><div className="h-2 w-2 rounded-full bg-cyan-400/40" />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between"><div className="h-3 w-16 rounded bg-cyan-500/30" /><div className="flex gap-3"><div className="h-2 w-10 rounded bg-surface-600" /><div className="h-5 w-14 rounded bg-cyan-500/40" /></div></div>
        <div className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4"><div className="mb-2 h-4 w-3/4 rounded bg-white/20" /><div className="mb-3 h-2 w-full rounded bg-white/10" /><div className="h-6 w-24 rounded bg-cyan-500/40" /></div>
        <div className="grid grid-cols-3 gap-2">{["a","b","c"].map((k)=>(<div key={k} className="space-y-1.5 rounded-lg border border-cyan-500/10 p-2"><div className="h-3 w-3 rounded bg-cyan-500/30" /><div className="h-2 w-full rounded bg-surface-700" /></div>))}</div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionTitle eyebrow="Transformación" lightText="De esto..." boldText="a esto." className="mb-4" />
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 text-base text-surface-400">En 48 horas. Sin dolores de cabeza.</motion.p>

        {/* Overlapping mockups */}
        <div className="relative mx-auto max-w-2xl">
          {/* Before -- behind, rotated, desaturated */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-0 opacity-50 grayscale"
          >
            <BadMockup />
            <p className="mt-3 text-center text-xs font-bold tracking-widest text-red-400/40 uppercase">Antes</p>
          </motion.div>

          {/* After -- on top, overlapping, rotated opposite */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative z-10 -mt-40 ml-12 sm:-mt-52 sm:ml-20"
          >
            <GoodMockup />
            <p className="mt-3 text-center text-xs font-bold tracking-widest text-cyan-400 uppercase">Después</p>
          </motion.div>

          {/* Labels */}
          <div className="mt-8 grid grid-cols-2 gap-8 text-center text-sm">
            <div className="text-surface-500">
              <p>Diseño desactualizado</p>
              <p>Carga lenta</p>
            </div>
            <div className="text-cyan-400/70">
              <p>Moderno y profesional</p>
              <p>Ultra-rápida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
