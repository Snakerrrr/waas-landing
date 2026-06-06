import { motion } from "framer-motion";

function BadMockup() {
  return (
    <div className="rounded-xl border border-red-500/20 bg-surface-950 p-1">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-red-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
        <div className="h-2 w-2 rounded-full bg-red-400/40" />
        <div className="ml-2 h-3 flex-1 rounded bg-red-500/10" />
      </div>
      <div className="space-y-3 p-4">
        {/* Ugly nav */}
        <div className="flex gap-2">
          <div className="h-3 w-16 rounded bg-surface-700" />
          <div className="h-3 w-12 rounded bg-surface-700" />
          <div className="h-3 w-20 rounded bg-surface-700" />
        </div>
        {/* Giant misaligned image placeholder */}
        <div className="h-20 w-full rounded bg-surface-800" />
        {/* Bad text */}
        <div className="space-y-1.5">
          <div className="h-4 w-full rounded bg-surface-800" />
          <div className="h-2 w-4/5 rounded bg-surface-800/60" />
          <div className="h-2 w-3/4 rounded bg-surface-800/40" />
        </div>
        {/* Ugly buttons */}
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded bg-red-500/20" />
          <div className="h-6 w-16 rounded bg-surface-700" />
        </div>
        {/* More mess */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 rounded bg-surface-800/50" />
          <div className="h-16 rounded bg-surface-800/30" />
          <div className="h-10 rounded bg-surface-800/50" />
        </div>
        <div className="h-2 w-1/2 rounded bg-surface-800/30" />
      </div>
    </div>
  );
}

function GoodMockup() {
  return (
    <div className="rounded-xl border border-cyan-500/20 bg-surface-950 p-1 glow-cyan">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-cyan-500/10 px-3 py-2">
        <div className="h-2 w-2 rounded-full bg-cyan-400/60" />
        <div className="h-2 w-2 rounded-full bg-cyan-400/40" />
        <div className="h-2 w-2 rounded-full bg-cyan-400/40" />
        <div className="ml-2 h-3 flex-1 rounded bg-cyan-500/10" />
      </div>
      <div className="space-y-3 p-4">
        {/* Clean nav */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded bg-cyan-500/30" />
          <div className="flex gap-3">
            <div className="h-2 w-10 rounded bg-surface-600" />
            <div className="h-2 w-10 rounded bg-surface-600" />
            <div className="h-5 w-14 rounded bg-cyan-500/40" />
          </div>
        </div>
        {/* Hero section */}
        <div className="rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4">
          <div className="mb-2 h-4 w-3/4 rounded bg-white/20" />
          <div className="mb-3 h-2 w-full rounded bg-white/10" />
          <div className="h-6 w-24 rounded bg-cyan-500/40" />
        </div>
        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1.5 rounded-lg border border-cyan-500/10 p-2">
            <div className="h-3 w-3 rounded bg-cyan-500/30" />
            <div className="h-2 w-full rounded bg-surface-700" />
            <div className="h-1.5 w-3/4 rounded bg-surface-800" />
          </div>
          <div className="space-y-1.5 rounded-lg border border-cyan-500/10 p-2">
            <div className="h-3 w-3 rounded bg-cyan-500/30" />
            <div className="h-2 w-full rounded bg-surface-700" />
            <div className="h-1.5 w-3/4 rounded bg-surface-800" />
          </div>
          <div className="space-y-1.5 rounded-lg border border-cyan-500/10 p-2">
            <div className="h-3 w-3 rounded bg-cyan-500/30" />
            <div className="h-2 w-full rounded bg-surface-700" />
            <div className="h-1.5 w-3/4 rounded bg-surface-800" />
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center">
          <div className="h-5 w-28 rounded-full bg-cyan-500/30" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Transformación
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            De esto... a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              esto.
            </span>
          </h2>
          <p className="mt-4 text-lg text-surface-400">En 48 horas. Sin dolores de cabeza.</p>
        </motion.div>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-center text-sm font-bold tracking-widest text-red-400/60 uppercase">
              Antes
            </p>
            <div className="opacity-60 grayscale transition-all duration-500 hover:opacity-80 hover:grayscale-0">
              <BadMockup />
            </div>
            <div className="mt-4 space-y-1 text-center text-sm text-surface-500">
              <p>Diseño desactualizado</p>
              <p>Carga lenta / Sin responsive</p>
              <p>Sin soporte ni mantenimiento</p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-4 text-center text-sm font-bold tracking-widest text-cyan-400 uppercase">
              Después
            </p>
            <GoodMockup />
            <div className="mt-4 space-y-1 text-center text-sm text-cyan-400/70">
              <p>Diseño moderno y profesional</p>
              <p>Ultra-rápida / 100% responsive</p>
              <p>Soporte y cambios ilimitados</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
