import { ArrowRight, Zap, Sparkles } from "lucide-react";

interface CTAFinalProps {
  onStartOnboarding: () => void;
}

export default function CTAFinal({ onStartOnboarding }: CTAFinalProps) {
  return (
    <section className="relative overflow-hidden bg-surface-900 py-20 sm:py-28 dark:bg-surface-950">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-400">
          <Zap className="h-4 w-4" />
          Lanza tu web esta semana
        </div>

        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          ¿Listo para tener la web que tu negocio merece?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-surface-400">
          Únete a más de 200 negocios que ya dejaron de preocuparse por su página web.
          Empieza hoy con 14 días de garantía de satisfacción.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={onStartOnboarding}
            className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-500 hover:shadow-xl"
          >
            <Sparkles className="h-5 w-5" />
            Comenzar Mi Proyecto
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href="#demos"
            className="inline-flex items-center gap-2 rounded-xl border border-surface-700 px-8 py-4 text-base font-semibold text-surface-300 transition-all hover:border-surface-600 hover:text-white"
          >
            Explorar Demos
          </a>
        </div>
      </div>
    </section>
  );
}
