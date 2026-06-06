import { ArrowRight, Star, Users, Globe, Sparkles, Play } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCountUp } from "../hooks/useCountUp";

interface HeroProps {
  onStartOnboarding: () => void;
}

function AnimatedStat({
  icon: Icon,
  value,
  suffix,
  label,
  iconBg,
  iconColor,
  isVisible,
}: {
  icon: typeof Users;
  value: number;
  suffix: string;
  label: string;
  iconBg: string;
  iconColor: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div className="text-left">
        <p className="text-2xl font-bold text-surface-900 dark:text-white">
          {count}{suffix}
        </p>
        <p className="text-sm text-surface-500 dark:text-surface-400">{label}</p>
      </div>
    </div>
  );
}

export default function Hero({ onStartOnboarding }: HeroProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-500/5" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 transition-all duration-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-400 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Nuevo modelo: Páginas Web como Servicio
          </div>

          <h1 className={`mb-6 text-4xl leading-tight font-extrabold tracking-tight text-surface-900 transition-all duration-700 delay-100 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            Tu Web Profesional.{" "}
            <span className="bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
              Sin Complicaciones.
            </span>{" "}
            Por una Suscripción Mensual.
          </h1>

          <p className={`mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-surface-600 transition-all duration-700 delay-200 sm:text-xl dark:text-surface-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            Olvídate de pagar miles de dólares por adelantado. Obtén una web rápida, moderna
            y siempre actualizada por una cuota fija mensual. Hosting, mantenimiento y cambios
            ilimitados incluidos.
          </p>

          <div className={`flex flex-col items-center justify-center gap-4 transition-all duration-700 delay-300 sm:flex-row ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <a
              href="#demos"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30"
            >
              Ver Demos
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={onStartOnboarding}
              className="group inline-flex items-center gap-2 rounded-xl border border-surface-300 bg-white px-8 py-4 text-base font-semibold text-surface-700 transition-all hover:border-primary-300 hover:bg-primary-50 dark:border-surface-700 dark:bg-surface-900 dark:text-surface-300 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/5"
            >
              <Sparkles className="h-5 w-5 text-primary-500" />
              Comenzar Ahora
            </button>
          </div>

          <a href="#como-funciona" className={`mt-6 inline-flex items-center gap-2 text-sm font-medium text-surface-500 transition-all duration-700 delay-400 hover:text-primary-500 dark:text-surface-400 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
            <Play className="h-4 w-4" />
            Conoce cómo funciona en 4 pasos
          </a>

          <div className={`mt-14 flex flex-col items-center justify-center gap-8 transition-all duration-700 delay-500 sm:flex-row sm:gap-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <AnimatedStat icon={Users} value={200} suffix="+" label="Negocios activos"
              iconBg="bg-primary-100 dark:bg-primary-500/10" iconColor="text-primary-600 dark:text-primary-400" isVisible={isVisible} />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-500/10">
                <Star className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-surface-900 dark:text-white">4.9/5</p>
                <p className="text-sm text-surface-500 dark:text-surface-400">Satisfacción</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-500/10">
                <Globe className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-surface-900 dark:text-white">99.9%</p>
                <p className="text-sm text-surface-500 dark:text-surface-400">Uptime garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
