import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "María González", role: "Dueña — La Casa del Sabor", avatar: "MG", text: "En menos de una semana tenía mi web funcionando con menú digital y reservas online. Antes pagué $5,000 a una agencia y no se compara. Ahora pago $199/mes y tengo todo incluido.", color: "from-orange-500 to-red-500" },
  { name: "Carlos Rodríguez", role: "CEO — TechSmart Solutions", avatar: "CR", text: "Lo que más me convenció fue no preocuparme por hosting, actualizaciones ni seguridad. Pido cambios y en horas ya están online. Es como tener un equipo de desarrollo propio.", color: "from-blue-500 to-indigo-500" },
  { name: "Ana Martínez", role: "Directora — Clínica VidaSana", avatar: "AM", text: "Mis pacientes ahora agendan citas directamente desde la web. Las reservas aumentaron un 40% el primer mes. El soporte responde rapidísimo.", color: "from-emerald-500 to-teal-500" },
  { name: "Diego Fernández", role: "Fundador — FitZone Gym", avatar: "DF", text: "Probé con freelancers y agencias. Siempre terminaba con webs lentas y sin soporte. Aquí tengo una web que carga en 1 segundo y cambios ilimitados.", color: "from-amber-500 to-orange-500" },
  { name: "Laura Sánchez", role: "Propietaria — Boutique Eleganza", avatar: "LS", text: "Mi tienda online se montó sobre ShopNova y las ventas se duplicaron respecto a mi web anterior. El equipo entiende de conversión, no solo de diseño.", color: "from-violet-500 to-purple-500" },
  { name: "Roberto Díaz", role: "Abogado — Díaz & Asociados", avatar: "RD", text: "Como abogados, necesitábamos transmitir confianza. El resultado fue impecable. La web genera consultas todos los días.", color: "from-surface-400 to-surface-600" },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">Testimonios</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Lo que dicen<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              nuestros clientes.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-surface-800 bg-surface-950 p-8 transition-all duration-300 hover:border-surface-700"
            >
              {/* Giant quote mark */}
              <span className="pointer-events-none absolute top-4 right-6 text-5xl font-bold leading-none text-surface-800/40 select-none">
                "
              </span>

              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="relative z-10 mb-6 text-sm leading-relaxed text-surface-300">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-xs font-bold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-surface-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
