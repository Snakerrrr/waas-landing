import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "María González",
    role: "Dueña de Restaurante",
    business: "La Casa del Sabor",
    avatar: "MG",
    rating: 5,
    text: "En menos de una semana tenía mi web funcionando con menú digital y reservas online. Antes pagué $5,000 a una agencia y el resultado no se compara. Ahora pago $199/mes y tengo todo incluido.",
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    business: "TechSmart Solutions",
    avatar: "CR",
    rating: 5,
    text: "Lo que más me convenció fue no tener que preocuparme por hosting, actualizaciones ni seguridad. Pido cambios y en horas ya están online. Es como tener un equipo de desarrollo propio.",
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Ana Martínez",
    role: "Directora",
    business: "Clínica VidaSana",
    avatar: "AM",
    rating: 5,
    text: "Mis pacientes ahora agendan citas directamente desde la web. Las reservas aumentaron un 40% el primer mes. El soporte responde rapidísimo cuando necesito algo.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    name: "Diego Fernández",
    role: "Fundador",
    business: "FitZone Gym",
    avatar: "DF",
    rating: 5,
    text: "Probé con freelancers y agencias. Siempre terminaba con webs lentas y sin soporte. Aquí tengo una web que carga en 1 segundo y cambios ilimitados. No vuelvo atrás.",
    color: "from-amber-400 to-orange-500",
  },
  {
    name: "Laura Sánchez",
    role: "Propietaria",
    business: "Boutique Eleganza",
    avatar: "LS",
    rating: 5,
    text: "Mi tienda online se montó sobre ShopNova y las ventas se duplicaron respecto a mi web anterior. El equipo entiende de conversión, no solo de diseño.",
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "Roberto Díaz",
    role: "Abogado Socio",
    business: "Díaz & Asociados",
    avatar: "RD",
    rating: 5,
    text: "Como abogados, necesitábamos transmitir confianza. El resultado fue impecable. La web genera consultas todos los días y el blog nos posiciona en Google.",
    color: "from-surface-400 to-surface-600",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`mx-auto mb-16 max-w-2xl text-center transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <p className="mb-3 text-sm font-semibold tracking-wider text-primary-500 uppercase">
            Testimonios
          </p>
          <h2 className="mb-4 text-3xl font-bold text-surface-900 sm:text-4xl lg:text-5xl dark:text-white">
            Lo que dicen nuestros{" "}
            <span className="text-primary-500">clientes</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400">
            Más de 200 negocios confían en nosotros para su presencia digital.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group rounded-2xl border border-surface-200 bg-white p-6 transition-all duration-700 hover:border-primary-200 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900 dark:hover:border-primary-500/30 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="mb-4 h-8 w-8 text-primary-200 dark:text-primary-500/20" />

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-sm leading-relaxed text-surface-600 dark:text-surface-400">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-surface-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-surface-500 dark:text-surface-400">
                    {t.role} — {t.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
