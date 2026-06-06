import { motion } from "framer-motion";
import {
  Server, RefreshCcw, Headphones, ShieldCheck,
  Search, HardDrive, CreditCard, TrendingUp,
  X as XIcon, Check,
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
  if (typeof value === "boolean") return value ? <Check className="h-5 w-5 text-cyan-400" /> : <XIcon className="h-5 w-5 text-red-400/60" />;
  return <span>{value}</span>;
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

        {/* Comparison -- editorial left-aligned */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h3 className="mb-10 text-2xl sm:text-3xl">
            <span className="font-light text-surface-300">Tradicional vs</span>{" "}
            <span className="font-bold text-cyan-400">Modelo WaaS</span>
          </h3>

          <div className="max-w-3xl overflow-hidden glass rounded-2xl">
            <div className="grid grid-cols-3 border-b border-white/5 px-6 py-4">
              <span className="text-sm font-semibold text-surface-400">Característica</span>
              <span className="text-center text-sm font-semibold text-surface-500">Tradicional</span>
              <span className="text-center text-sm font-semibold text-cyan-400">WaaS</span>
            </div>
            {comparison.map((row, i) => (
              <motion.div key={row.feature} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`grid grid-cols-3 px-6 py-4 ${i % 2 === 0 ? "bg-black" : "bg-surface-950"}`}>
                <span className="text-sm font-medium text-surface-300">{row.feature}</span>
                <span className="flex justify-center text-sm text-surface-500"><CompValue value={row.traditional} /></span>
                <span className="flex justify-center text-sm font-semibold text-cyan-400"><CompValue value={row.waas} /></span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
