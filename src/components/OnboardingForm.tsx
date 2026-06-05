import { useState } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Building2,
  Palette,
  FileText,
  CheckCircle2,
  Upload,
  User,
  Mail,
  Phone,
  Globe,
} from "lucide-react";

interface OnboardingData {
  businessName: string;
  industry: string;
  website: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDemo: string;
  brandColors: string;
  hasLogo: string;
  logoNotes: string;
  contentReady: string;
  pages: string[];
  additionalNotes: string;
}

const INITIAL_DATA: OnboardingData = {
  businessName: "",
  industry: "",
  website: "",
  fullName: "",
  email: "",
  phone: "",
  preferredDemo: "",
  brandColors: "",
  hasLogo: "",
  logoNotes: "",
  contentReady: "",
  pages: [],
  additionalNotes: "",
};

const industries = [
  "Restaurante / Cafetería",
  "E-Commerce / Tienda Online",
  "Servicios Profesionales",
  "Salud / Clínica",
  "Fitness / Gimnasio",
  "Inmobiliaria",
  "Educación",
  "Tecnología",
  "Otro",
];

const demoOptions = [
  "Bella Cucina (Restaurantes)",
  "ShopNova (E-Commerce)",
  "LegalPro (Servicios)",
  "Diseño personalizado desde cero",
];

const pageOptions = [
  "Inicio",
  "Sobre Nosotros",
  "Servicios",
  "Portafolio / Galería",
  "Blog",
  "Contacto",
  "Tienda Online",
  "Reservas / Citas",
  "Testimonios",
  "FAQ",
];

const steps = [
  { title: "Tu Negocio", icon: Building2 },
  { title: "Diseño", icon: Palette },
  { title: "Contenido", icon: FileText },
  { title: "Confirmación", icon: CheckCircle2 },
];

export default function OnboardingForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(INITIAL_DATA);
  const [submitted, setSubmitted] = useState(false);

  const update = (fields: Partial<OnboardingData>) => setData((prev) => ({ ...prev, ...fields }));

  const togglePage = (page: string) => {
    setData((prev) => ({
      ...prev,
      pages: prev.pages.includes(page) ? prev.pages.filter((p) => p !== page) : [...prev.pages, page],
    }));
  };

  const canAdvance = () => {
    if (step === 0) return data.businessName && data.industry && data.fullName && data.email;
    if (step === 1) return data.preferredDemo;
    if (step === 2) return true;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // TODO: Enviar a tu backend, webhook, Google Sheets, Airtable, etc.
    console.log("Onboarding data:", JSON.stringify(data, null, 2));
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
        <div className="w-full max-w-lg rounded-2xl border border-surface-200 bg-white p-10 text-center shadow-2xl dark:border-surface-700 dark:bg-surface-900">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/10">
            <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-surface-900 dark:text-white">
            Información recibida
          </h3>
          <p className="mb-2 text-surface-600 dark:text-surface-400">
            Gracias, <strong>{data.fullName}</strong>. Hemos recibido tu información correctamente.
          </p>
          <p className="mb-8 text-surface-600 dark:text-surface-400">
            Nuestro equipo comenzará a trabajar en tu web y te contactará en las próximas <strong>24 horas</strong> con un preview.
          </p>
          <button
            onClick={onClose}
            className="rounded-xl bg-primary-600 px-8 py-3 font-semibold text-white transition-all hover:bg-primary-700"
          >
            Entendido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-2xl dark:border-surface-700 dark:bg-surface-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-200 px-6 py-4 dark:border-surface-700">
          <h2 className="text-lg font-bold text-surface-900 dark:text-white">Cuéntanos sobre tu negocio</h2>
          <button onClick={onClose} className="rounded-lg p-1 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex border-b border-surface-200 px-6 py-3 dark:border-surface-700">
          {steps.map((s, i) => (
            <div key={s.title} className="flex flex-1 items-center gap-2">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                i < step ? "bg-emerald-500 text-white" : i === step ? "bg-primary-600 text-white" : "bg-surface-100 text-surface-400 dark:bg-surface-800"
              }`}>
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-primary-600 dark:text-primary-400" : "text-surface-400"}`}>
                {s.title}
              </span>
              {i < steps.length - 1 && <div className="mx-2 h-px flex-1 bg-surface-200 dark:bg-surface-700" />}
            </div>
          ))}
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Step 0: Business Info */}
          {step === 0 && (
            <div className="space-y-5">
              <h3 className="mb-1 text-lg font-bold text-surface-900 dark:text-white">Información de tu negocio</h3>
              <p className="mb-4 text-sm text-surface-500 dark:text-surface-400">Cuéntanos lo básico para personalizar tu web.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                    <User className="mb-0.5 mr-1 inline h-4 w-4" />Nombre completo *
                  </label>
                  <input type="text" value={data.fullName} onChange={(e) => update({ fullName: e.target.value })}
                    placeholder="Juan Pérez" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                    <Building2 className="mb-0.5 mr-1 inline h-4 w-4" />Nombre del negocio *
                  </label>
                  <input type="text" value={data.businessName} onChange={(e) => update({ businessName: e.target.value })}
                    placeholder="Mi Restaurante" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                    <Mail className="mb-0.5 mr-1 inline h-4 w-4" />Email *
                  </label>
                  <input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })}
                    placeholder="tu@email.com" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                    <Phone className="mb-0.5 mr-1 inline h-4 w-4" />Teléfono / WhatsApp
                  </label>
                  <input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })}
                    placeholder="+1 555 123 4567" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">Industria / Nicho *</label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {industries.map((ind) => (
                    <button key={ind} onClick={() => update({ industry: ind })}
                      className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all ${
                        data.industry === ind
                          ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                          : "border-surface-200 text-surface-600 hover:border-surface-300 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600"
                      }`}>
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  <Globe className="mb-0.5 mr-1 inline h-4 w-4" />Web actual (si tienes)
                </label>
                <input type="url" value={data.website} onChange={(e) => update({ website: e.target.value })}
                  placeholder="https://mi-web-actual.com" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
              </div>
            </div>
          )}

          {/* Step 1: Design Preferences */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="mb-1 text-lg font-bold text-surface-900 dark:text-white">Preferencias de diseño</h3>
              <p className="mb-4 text-sm text-surface-500 dark:text-surface-400">Elige una base y personalízala a tu gusto.</p>

              <div>
                <label className="mb-2 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  ¿Qué demo te gustó más? *
                </label>
                <div className="space-y-2">
                  {demoOptions.map((opt) => (
                    <button key={opt} onClick={() => update({ preferredDemo: opt })}
                      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all ${
                        data.preferredDemo === opt
                          ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                          : "border-surface-200 text-surface-600 hover:border-surface-300 dark:border-surface-700 dark:text-surface-400 dark:hover:border-surface-600"
                      }`}>
                      <div className={`h-4 w-4 shrink-0 rounded-full border-2 ${
                        data.preferredDemo === opt ? "border-primary-500 bg-primary-500" : "border-surface-300 dark:border-surface-600"
                      }`} />
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  <Palette className="mb-0.5 mr-1 inline h-4 w-4" />Colores de tu marca
                </label>
                <input type="text" value={data.brandColors} onChange={(e) => update({ brandColors: e.target.value })}
                  placeholder="Ej: Azul marino y dorado, o #1a365d y #d69e2e" className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  <Upload className="mb-0.5 mr-1 inline h-4 w-4" />¿Tienes logo?
                </label>
                <div className="flex gap-3">
                  {["Sí, lo enviaré por email", "No, necesito uno", "Tengo una idea, pero necesito ayuda"].map((opt) => (
                    <button key={opt} onClick={() => update({ hasLogo: opt })}
                      className={`flex-1 rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-all ${
                        data.hasLogo === opt
                          ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                          : "border-surface-200 text-surface-600 hover:border-surface-300 dark:border-surface-700 dark:text-surface-400"
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Content */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="mb-1 text-lg font-bold text-surface-900 dark:text-white">Contenido y páginas</h3>
              <p className="mb-4 text-sm text-surface-500 dark:text-surface-400">Dinos qué secciones necesitas y si ya tienes contenido.</p>

              <div>
                <label className="mb-2 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Páginas que necesitas (selecciona todas las que apliquen)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {pageOptions.map((page) => (
                    <button key={page} onClick={() => togglePage(page)}
                      className={`rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all ${
                        data.pages.includes(page)
                          ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                          : "border-surface-200 text-surface-600 hover:border-surface-300 dark:border-surface-700 dark:text-surface-400"
                      }`}>
                      {data.pages.includes(page) ? "✓ " : ""}{page}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  ¿Tienes el contenido listo (textos, fotos)?
                </label>
                <div className="flex gap-3">
                  {["Sí, todo listo", "Parcialmente", "No, necesito ayuda"].map((opt) => (
                    <button key={opt} onClick={() => update({ contentReady: opt })}
                      className={`flex-1 rounded-lg border px-3 py-2.5 text-center text-sm font-medium transition-all ${
                        data.contentReady === opt
                          ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                          : "border-surface-200 text-surface-600 hover:border-surface-300 dark:border-surface-700 dark:text-surface-400"
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-surface-700 dark:text-surface-300">
                  Notas adicionales
                </label>
                <textarea value={data.additionalNotes} onChange={(e) => update({ additionalNotes: e.target.value })}
                  rows={3} placeholder="Cuéntanos cualquier detalle extra que debamos saber..."
                  className="w-full rounded-xl border border-surface-300 bg-surface-50 px-4 py-3 text-surface-900 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-white" />
              </div>
            </div>
          )}

          {/* Step 3: Summary */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="mb-1 text-lg font-bold text-surface-900 dark:text-white">Resumen</h3>
              <p className="mb-4 text-sm text-surface-500 dark:text-surface-400">Revisa que todo esté correcto antes de enviar.</p>

              <div className="space-y-3 rounded-xl bg-surface-50 p-5 dark:bg-surface-800">
                {[
                  ["Nombre", data.fullName],
                  ["Negocio", data.businessName],
                  ["Industria", data.industry],
                  ["Email", data.email],
                  ["Teléfono", data.phone || "—"],
                  ["Demo elegida", data.preferredDemo],
                  ["Colores", data.brandColors || "—"],
                  ["Logo", data.hasLogo || "—"],
                  ["Páginas", data.pages.join(", ") || "—"],
                  ["Contenido listo", data.contentReady || "—"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="font-medium text-surface-500 dark:text-surface-400">{label}</span>
                    <span className="max-w-[60%] text-right font-medium text-surface-900 dark:text-white">{value}</span>
                  </div>
                ))}
                {data.additionalNotes && (
                  <div className="border-t border-surface-200 pt-3 dark:border-surface-700">
                    <p className="text-xs font-medium text-surface-500 dark:text-surface-400">Notas:</p>
                    <p className="text-sm text-surface-700 dark:text-surface-300">{data.additionalNotes}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-surface-200 px-6 py-4 dark:border-surface-700">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900 disabled:invisible dark:text-surface-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </button>

          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canAdvance()}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              Enviar Información
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
