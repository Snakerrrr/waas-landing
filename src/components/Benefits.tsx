import {
  Server,
  RefreshCcw,
  Headphones,
  ShieldCheck,
  Search,
  HardDrive,
  CreditCard,
  TrendingUp,
  X,
  Check,
} from "lucide-react";

const benefits = [
  { icon: CreditCard, title: "Sin Inversión Inicial", description: "Olvídate de pagar $3,000–$10,000 de golpe. Empieza con una cuota mensual accesible." },
  { icon: Server, title: "Hosting Premium Incluido", description: "Servidores ultra-rápidos con CDN global. Tu web carga en menos de 2 segundos." },
  { icon: RefreshCcw, title: "Cambios Ilimitados", description: "¿Necesitas actualizar algo? Solo pídelo. Sin cargos extra ni esperas eternas." },
  { icon: Headphones, title: "Soporte Prioritario", description: "Equipo dedicado que responde en menos de 2 horas en horario laboral." },
  { icon: ShieldCheck, title: "Seguridad Automática", description: "SSL, firewalls, actualizaciones y monitoreo 24/7 para que duermas tranquilo." },
  { icon: Search, title: "SEO Optimizado", description: "Estructura técnica perfecta para que Google te encuentre desde el día uno." },
  { icon: HardDrive, title: "Backups Diarios", description: "Copias de seguridad automáticas cada día. Tu información siempre está protegida." },
  { icon: TrendingUp, title: "Escala Sin Límites", description: "Tu web crece contigo. Actualizamos funcionalidades a medida que tu negocio evoluciona." },
];

const comparison = [
  { feature: "Costo inicial", traditional: "$3,000 – $10,000", waas: "$0" },
  { feature: "Hosting incluido", traditional: false, waas: true },
  { feature: "Mantenimiento mensual", traditional: "Costo extra", waas: "Incluido" },
  { feature: "Cambios en contenido", traditional: "$50–$150 c/u", waas: "Ilimitados" },
  { feature: "Certificado SSL", traditional: "Costo extra", waas: "Incluido" },
  { feature: "Soporte técnico", traditional: "Pago por hora", waas: "Ilimitado" },
  { feature: "Actualizaciones", traditional: "Tú te encargas", waas: "Automáticas" },
  { feature: "Backups", traditional: "Manual", waas: "Diarios" },
];

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-emerald-500" />
    ) : (
      <X className="h-5 w-5 text-red-400" />
    );
  }
  return <span>{value}</span>;
}

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            Por qué elegirnos
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
            Todo incluido.{" "}
            <span className="text-primary-500">Cero sorpresas.</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Una suscripción mensual que cubre absolutamente todo lo que tu web necesita para funcionar, crecer y convertir visitantes en clientes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-surface-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-500/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10">
                <b.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 font-bold text-surface-900 dark:text-white">{b.title}</h3>
              <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-400">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-8 text-center text-2xl font-bold text-surface-900 dark:text-white">
            Agencia Tradicional vs <span className="text-primary-500">Modelo WaaS</span>
          </h3>
          <div className="overflow-hidden rounded-2xl border border-surface-200 dark:border-surface-800">
            <table className="w-full">
              <thead>
                <tr className="bg-surface-50 dark:bg-surface-900">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-surface-600 dark:text-surface-400">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-surface-600 dark:text-surface-400">
                    Tradicional
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 dark:text-primary-400">
                    WaaS
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={
                      i % 2 === 0
                        ? "bg-white dark:bg-surface-950"
                        : "bg-surface-50 dark:bg-surface-900"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-surface-800 dark:text-surface-200">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-surface-500 dark:text-surface-400">
                      <span className="inline-flex justify-center">
                        <ComparisonValue value={row.traditional} />
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-primary-600 dark:text-primary-400">
                      <span className="inline-flex justify-center">
                        <ComparisonValue value={row.waas} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
