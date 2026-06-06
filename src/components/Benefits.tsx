import { motion } from "framer-motion";
import {
  Server, RefreshCcw, Headphones, ShieldCheck,
  Search, HardDrive, CreditCard, TrendingUp,
  X as XIcon, Check,
} from "lucide-react";

const benefits = [
  { icon: CreditCard, title: "Sin Inversión Inicial", description: "Empieza con una cuota mensual accesible." },
  { icon: Server, title: "Hosting Premium", description: "Servidores ultra-rápidos con CDN global." },
  { icon: RefreshCcw, title: "Cambios Ilimitados", description: "Sin cargos extra ni esperas eternas." },
  { icon: Headphones, title: "Soporte Prioritario", description: "Respuesta en menos de 2 horas." },
  { icon: ShieldCheck, title: "Seguridad 24/7", description: "SSL, firewalls y monitoreo continuo." },
  { icon: Search, title: "SEO Optimizado", description: "Posicionamiento desde el día uno." },
  { icon: HardDrive, title: "Backups Diarios", description: "Tu información siempre protegida." },
  { icon: TrendingUp, title: "Escala Sin Límites", description: "Tu web crece contigo." },
];

const comparison = [
  { feature: "Costo inicial", traditional: "$3,000 – $10,000", waas: "$0" },
  { feature: "Hosting incluido", traditional: false, waas: true },
  { feature: "Mantenimiento", traditional: "Costo extra", waas: "Incluido" },
  { feature: "Cambios en contenido", traditional: "$50–$150 c/u", waas: "Ilimitados" },
  { feature: "Certificado SSL", traditional: "Costo extra", waas: "Incluido" },
  { feature: "Soporte técnico", traditional: "Pago por hora", waas: "Ilimitado" },
  { feature: "Actualizaciones", traditional: "Tú te encargas", waas: "Automáticas" },
  { feature: "Backups", traditional: "Manual", waas: "Diarios" },
];

function CompValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value
      ? <Check className="h-5 w-5 text-cyan-400" />
      : <XIcon className="h-5 w-5 text-red-400/60" />;
  }
  return <span>{value}</span>;
}

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">Beneficios</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Todo incluido.<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cero sorpresas.
            </span>
          </h2>
        </motion.div>

        {/* Benefits grid -- editorial 2-column */}
        <div className="mb-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-surface-800 bg-surface-950 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/5">
                <b.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="mb-1.5 font-bold text-white">{b.title}</h3>
              <p className="text-sm text-surface-400">{b.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison -- split screen style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
            Tradicional vs <span className="text-cyan-400">Modelo WaaS</span>
          </h3>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-surface-800">
            <div className="grid grid-cols-3 border-b border-surface-800 bg-surface-950 px-6 py-4">
              <span className="text-sm font-semibold text-surface-400">Característica</span>
              <span className="text-center text-sm font-semibold text-surface-500">Tradicional</span>
              <span className="text-center text-sm font-semibold text-cyan-400">WaaS</span>
            </div>
            {comparison.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-black" : "bg-surface-950"}`}
              >
                <span className="text-sm font-medium text-surface-300">{row.feature}</span>
                <span className="flex justify-center text-sm text-surface-500">
                  <CompValue value={row.traditional} />
                </span>
                <span className="flex justify-center text-sm font-semibold text-cyan-400">
                  <CompValue value={row.waas} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
