import { useState } from "react";
import { ExternalLink, Clock, Bell, Eye } from "lucide-react";

type DemoStatus = "live" | "coming_soon";

interface Demo {
  title: string;
  category: string;
  description: string;
  gradient: string;
  tag: string | null;
  status: DemoStatus;
  url: string | null;
  image: string | null;
}

const categories = ["Todos", "Restaurantes", "E-Commerce", "Servicios", "Salud", "Fitness", "Inmobiliaria"];

const demos: Demo[] = [
  // ──── DEMOS REALES (proyectos con los que ya trabajaste) ────
  {
    title: "Bella Cucina",
    category: "Restaurantes",
    description: "Menú interactivo con reservas online, galería de platos y sistema de pedidos.",
    gradient: "from-orange-400 to-red-500",
    tag: "Proyecto Real",
    status: "live",
    url: "https://demo-restaurante.tudominio.com",
    image: null,
  },
  {
    title: "ShopNova",
    category: "E-Commerce",
    description: "Tienda online completa con carrito, pagos integrados y gestión de inventario.",
    gradient: "from-blue-400 to-indigo-500",
    tag: "Proyecto Real",
    status: "live",
    url: "https://demo-ecommerce.tudominio.com",
    image: null,
  },
  {
    title: "LegalPro",
    category: "Servicios",
    description: "Firma de abogados con agenda online, blog de contenidos y chat en vivo.",
    gradient: "from-surface-400 to-surface-600",
    tag: "Proyecto Real",
    status: "live",
    url: "https://demo-legal.tudominio.com",
    image: null,
  },

  // ──── DEMOS EN DESARROLLO (próximamente) ────
  {
    title: "VitalCare",
    category: "Salud",
    description: "Clínica médica con citas online, perfiles de doctores y portal de pacientes.",
    gradient: "from-emerald-400 to-teal-500",
    tag: "Próximamente",
    status: "coming_soon",
    url: null,
    image: null,
  },
  {
    title: "IronFit",
    category: "Fitness",
    description: "Gimnasio con horarios de clases, membresías online y reservas de sesiones.",
    gradient: "from-amber-400 to-orange-500",
    tag: "Próximamente",
    status: "coming_soon",
    url: null,
    image: null,
  },
  {
    title: "HomeVista",
    category: "Inmobiliaria",
    description: "Listado de propiedades con filtros avanzados, mapas interactivos y tours virtuales.",
    gradient: "from-violet-400 to-purple-500",
    tag: "Próximamente",
    status: "coming_soon",
    url: null,
    image: null,
  },
];

function WaitlistModal({ demo, onClose }: { demo: Demo; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Conectar con tu backend/Mailchimp/ConvertKit
    console.log(`Waitlist signup for ${demo.title}: ${email}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl border border-surface-200 bg-white p-8 shadow-2xl dark:border-surface-700 dark:bg-surface-900"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${demo.gradient}`}>
              <Bell className="h-7 w-7 text-white" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-surface-900 dark:text-white">
              {demo.title} — Lista de Espera
            </h3>
            <p className="mb-6 text-surface-600 dark:text-surface-400">
              Esta demo está en desarrollo. Déjanos tu email y te avisamos en cuanto esté lista para que la explores.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 placeholder-surface-400 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white dark:placeholder-surface-500"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25"
              >
                Avisarme cuando esté lista
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10">
              <Bell className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-surface-900 dark:text-white">
              Te avisaremos
            </h3>
            <p className="text-surface-600 dark:text-surface-400">
              Recibirás un email en cuanto <strong>{demo.title}</strong> esté disponible.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Demos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeTab, setActiveTab] = useState<"all" | "live" | "coming_soon">("all");
  const [waitlistDemo, setWaitlistDemo] = useState<Demo | null>(null);

  const filtered = demos
    .filter((d) => activeCategory === "Todos" || d.category === activeCategory)
    .filter((d) => activeTab === "all" || d.status === activeTab);

  const liveCount = demos.filter((d) => d.status === "live").length;
  const comingCount = demos.filter((d) => d.status === "coming_soon").length;

  return (
    <section id="demos" className="bg-surface-50 py-20 sm:py-28 dark:bg-surface-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            Portafolio
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
            Demos listas para <span className="text-primary-500">tu negocio</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Explora proyectos reales en producción o únete a la lista de espera de los que están en desarrollo.
          </p>
        </div>

        {/* Status Tabs */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm dark:bg-surface-800">
            {[
              { key: "all" as const, label: "Todos", count: demos.length },
              { key: "live" as const, label: "En Producción", count: liveCount },
              { key: "coming_soon" as const, label: "Próximamente", count: comingCount },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-primary-600 text-white shadow-md"
                    : "text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white"
                }`}
              >
                {tab.label}
                <span className={`ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold ${
                  activeTab === tab.key
                    ? "bg-white/20 text-white"
                    : "bg-surface-100 text-surface-500 dark:bg-surface-700 dark:text-surface-400"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-surface-900 text-white shadow-md dark:bg-white dark:text-surface-900"
                  : "bg-white text-surface-600 hover:bg-surface-100 dark:bg-surface-800 dark:text-surface-400 dark:hover:bg-surface-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Demos Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((demo) => (
            <div
              key={demo.title}
              className="group relative overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all hover:shadow-xl hover:shadow-primary-500/5 dark:border-surface-800 dark:bg-surface-900"
            >
              {/* Mockup Preview */}
              <div className={`relative h-52 bg-gradient-to-br ${demo.gradient} p-6`}>
                {/* Simulated browser chrome */}
                <div className="h-full overflow-hidden rounded-lg bg-white/90 shadow-inner dark:bg-white/80">
                  <div className="flex items-center gap-1.5 border-b border-surface-200/50 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                    <div className="ml-2 h-4 flex-1 rounded-full bg-surface-100" />
                  </div>
                  <div className="space-y-2 p-3">
                    <div className="h-3 w-3/4 rounded bg-surface-200" />
                    <div className="h-2 w-full rounded bg-surface-100" />
                    <div className="h-2 w-5/6 rounded bg-surface-100" />
                    <div className="mt-3 flex gap-2">
                      <div className="h-8 w-16 rounded bg-surface-200" />
                      <div className="h-8 w-16 rounded bg-surface-100" />
                    </div>
                  </div>
                </div>

                {/* Tag */}
                {demo.tag && (
                  <span className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold shadow-md ${
                    demo.status === "live"
                      ? "bg-emerald-500 text-white"
                      : "bg-amber-400 text-amber-900"
                  }`}>
                    {demo.tag}
                  </span>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/30">
                  {demo.status === "live" ? (
                    <a
                      href={demo.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex translate-y-2 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-surface-800 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Eye className="h-4 w-4" />
                      Ver Demo Live
                    </a>
                  ) : (
                    <button
                      onClick={() => setWaitlistDemo(demo)}
                      className="inline-flex translate-y-2 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-surface-800 opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <Bell className="h-4 w-4" />
                      Avisarme
                    </button>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-surface-900 dark:text-white">{demo.title}</h3>
                  <span className="rounded-full bg-surface-100 px-3 py-1 text-xs font-medium text-surface-600 dark:bg-surface-800 dark:text-surface-400">
                    {demo.category}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                  {demo.description}
                </p>

                {/* Action Button */}
                {demo.status === "live" ? (
                  <a
                    href={demo.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Ver sitio en vivo
                  </a>
                ) : (
                  <button
                    onClick={() => setWaitlistDemo(demo)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                  >
                    <Clock className="h-4 w-4" />
                    En desarrollo — Únete a la lista
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-surface-500 dark:text-surface-400">
              No hay demos en esta categoría todavía. Pronto agregaremos más.
            </p>
          </div>
        )}
      </div>

      {/* Waitlist Modal */}
      {waitlistDemo && <WaitlistModal demo={waitlistDemo} onClose={() => setWaitlistDemo(null)} />}
    </section>
  );
}
