import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, ArrowRight, ArrowLeft, Building2, Palette, FileText, CheckCircle2,
  Upload, User, Mail, Phone, Globe,
} from "lucide-react";

interface OnboardingData {
  businessName: string; industry: string; website: string;
  fullName: string; email: string; phone: string;
  preferredDemo: string; brandColors: string; hasLogo: string; logoNotes: string;
  contentReady: string; pages: string[]; additionalNotes: string;
}

const INITIAL: OnboardingData = {
  businessName: "", industry: "", website: "", fullName: "", email: "", phone: "",
  preferredDemo: "", brandColors: "", hasLogo: "", logoNotes: "",
  contentReady: "", pages: [], additionalNotes: "",
};

const industries = ["Restaurante / Cafetería", "E-Commerce / Tienda", "Servicios Profesionales", "Salud / Clínica", "Fitness / Gimnasio", "Inmobiliaria", "Educación", "Tecnología", "Otro"];
const demoOptions = ["Bella Cucina (Restaurantes)", "ShopNova (E-Commerce)", "LegalPro (Servicios)", "Diseño personalizado"];
const pageOptions = ["Inicio", "Sobre Nosotros", "Servicios", "Portafolio", "Blog", "Contacto", "Tienda Online", "Reservas", "Testimonios", "FAQ"];
const steps = [{ title: "Tu Negocio", icon: Building2 }, { title: "Diseño", icon: Palette }, { title: "Contenido", icon: FileText }, { title: "Confirmar", icon: CheckCircle2 }];

const inputClass = "w-full rounded-xl border border-surface-800 bg-black px-4 py-3 text-white placeholder-surface-600 outline-none transition-all focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20";
const pillClass = (active: boolean) => `rounded-lg border px-3 py-2.5 text-left text-sm font-medium transition-all ${active ? "border-cyan-500 bg-cyan-500/10 text-cyan-400" : "border-surface-800 text-surface-400 hover:border-surface-600"}`;

export default function OnboardingForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const update = (fields: Partial<OnboardingData>) => setData((p) => ({ ...p, ...fields }));
  const togglePage = (page: string) => setData((p) => ({ ...p, pages: p.pages.includes(page) ? p.pages.filter((x) => x !== page) : [...p.pages, page] }));
  const canAdvance = () => { if (step === 0) return data.businessName && data.industry && data.fullName && data.email; if (step === 1) return data.preferredDemo; return true; };

  const handleSubmit = () => { setSubmitted(true); console.log("Onboarding:", JSON.stringify(data, null, 2)); };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-lg rounded-2xl border border-surface-800 bg-surface-950 p-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
            <CheckCircle2 className="h-8 w-8 text-cyan-400" />
          </div>
          <h3 className="mb-3 text-2xl font-bold text-white">Información recibida</h3>
          <p className="mb-2 text-surface-400">Gracias, <strong className="text-white">{data.fullName}</strong>.</p>
          <p className="mb-8 text-surface-400">Te contactamos en las próximas <strong className="text-white">24 horas</strong>.</p>
          <button onClick={onClose} className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black hover:bg-cyan-400">Entendido</button>
        </motion.div>
      </div>
    );
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md" onClick={onClose}>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-surface-800 bg-surface-950"
          onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-surface-800 px-6 py-4">
            <h2 className="text-lg font-bold text-white">Cuéntanos sobre tu negocio</h2>
            <button onClick={onClose} className="text-surface-500 hover:text-white"><X className="h-5 w-5" /></button>
          </div>

          {/* Steps */}
          <div className="flex border-b border-surface-800 px-6 py-3">
            {steps.map((s, i) => (
              <div key={s.title} className="flex flex-1 items-center gap-2">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${i < step ? "bg-cyan-500 text-black" : i === step ? "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30" : "bg-surface-900 text-surface-600"}`}>
                  {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-cyan-400" : "text-surface-600"}`}>{s.title}</span>
                {i < steps.length - 1 && <div className="mx-2 h-px flex-1 bg-surface-800" />}
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {step === 0 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white">Información de tu negocio</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><User className="mb-0.5 mr-1 inline h-4 w-4" />Nombre completo *</label><input type="text" value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} placeholder="Juan Pérez" className={inputClass} /></div>
                  <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><Building2 className="mb-0.5 mr-1 inline h-4 w-4" />Negocio *</label><input type="text" value={data.businessName} onChange={(e) => update({ businessName: e.target.value })} placeholder="Mi Restaurante" className={inputClass} /></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><Mail className="mb-0.5 mr-1 inline h-4 w-4" />Email *</label><input type="email" value={data.email} onChange={(e) => update({ email: e.target.value })} placeholder="tu@email.com" className={inputClass} /></div>
                  <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><Phone className="mb-0.5 mr-1 inline h-4 w-4" />WhatsApp</label><input type="tel" value={data.phone} onChange={(e) => update({ phone: e.target.value })} placeholder="+1 555 123 4567" className={inputClass} /></div>
                </div>
                <div><label className="mb-2 block text-sm font-medium text-surface-300">Industria *</label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{industries.map((ind) => (<button key={ind} onClick={() => update({ industry: ind })} className={pillClass(data.industry === ind)}>{ind}</button>))}</div>
                </div>
                <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><Globe className="mb-0.5 mr-1 inline h-4 w-4" />Web actual</label><input type="url" value={data.website} onChange={(e) => update({ website: e.target.value })} placeholder="https://..." className={inputClass} /></div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white">Preferencias de diseño</h3>
                <div><label className="mb-2 block text-sm font-medium text-surface-300">Demo preferida *</label>
                  <div className="space-y-2">{demoOptions.map((opt) => (<button key={opt} onClick={() => update({ preferredDemo: opt })} className={`flex w-full items-center gap-3 ${pillClass(data.preferredDemo === opt)}`}><div className={`h-4 w-4 shrink-0 rounded-full border-2 ${data.preferredDemo === opt ? "border-cyan-500 bg-cyan-500" : "border-surface-600"}`} />{opt}</button>))}</div>
                </div>
                <div><label className="mb-1.5 block text-sm font-medium text-surface-300"><Palette className="mb-0.5 mr-1 inline h-4 w-4" />Colores de marca</label><input type="text" value={data.brandColors} onChange={(e) => update({ brandColors: e.target.value })} placeholder="Ej: Azul marino y dorado" className={inputClass} /></div>
                <div><label className="mb-2 block text-sm font-medium text-surface-300"><Upload className="mb-0.5 mr-1 inline h-4 w-4" />¿Tienes logo?</label>
                  <div className="flex gap-3">{["Sí", "No, necesito uno", "Necesito ayuda"].map((opt) => (<button key={opt} onClick={() => update({ hasLogo: opt })} className={`flex-1 text-center ${pillClass(data.hasLogo === opt)}`}>{opt}</button>))}</div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white">Contenido y páginas</h3>
                <div><label className="mb-2 block text-sm font-medium text-surface-300">Páginas</label>
                  <div className="grid grid-cols-2 gap-2">{pageOptions.map((p) => (<button key={p} onClick={() => togglePage(p)} className={pillClass(data.pages.includes(p))}>{data.pages.includes(p) ? "✓ " : ""}{p}</button>))}</div>
                </div>
                <div><label className="mb-2 block text-sm font-medium text-surface-300">¿Contenido listo?</label>
                  <div className="flex gap-3">{["Sí, todo listo", "Parcialmente", "Necesito ayuda"].map((opt) => (<button key={opt} onClick={() => update({ contentReady: opt })} className={`flex-1 text-center ${pillClass(data.contentReady === opt)}`}>{opt}</button>))}</div>
                </div>
                <div><label className="mb-1.5 block text-sm font-medium text-surface-300">Notas adicionales</label>
                  <textarea value={data.additionalNotes} onChange={(e) => update({ additionalNotes: e.target.value })} rows={3} placeholder="Detalles extra..." className={inputClass} />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Resumen</h3>
                <div className="space-y-3 rounded-xl border border-surface-800 bg-black p-5">
                  {([["Nombre", data.fullName], ["Negocio", data.businessName], ["Industria", data.industry], ["Email", data.email], ["Teléfono", data.phone || "—"], ["Demo", data.preferredDemo], ["Colores", data.brandColors || "—"], ["Logo", data.hasLogo || "—"], ["Páginas", data.pages.join(", ") || "—"], ["Contenido", data.contentReady || "—"]] as [string, string][]).map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm"><span className="text-surface-500">{label}</span><span className="max-w-[60%] text-right text-white">{value}</span></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-surface-800 px-6 py-4">
            <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}
              className="inline-flex items-center gap-2 text-sm font-medium text-surface-400 hover:text-white disabled:invisible">
              <ArrowLeft className="h-4 w-4" /> Anterior
            </button>
            {step < 3 ? (
              <button onClick={() => setStep((s) => s + 1)} disabled={!canAdvance()}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-bold text-black transition-all hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40">
                Siguiente <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-bold text-black hover:bg-cyan-400">
                <CheckCircle2 className="h-4 w-4" /> Enviar
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
