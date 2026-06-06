import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "María González", role: "Dueña — La Casa del Sabor", avatar: "MG", text: "En menos de una semana tenía mi web funcionando con menú digital y reservas online. Antes pagué $5,000 a una agencia y no se compara. Ahora pago $199/mes y tengo todo incluido.", color: "from-orange-500 to-red-500" },
  { name: "Carlos Rodríguez", role: "CEO — TechSmart Solutions", avatar: "CR", text: "Lo que más me convenció fue no preocuparme por hosting, actualizaciones ni seguridad. Pido cambios y en horas ya están online.", color: "from-blue-500 to-indigo-500" },
  { name: "Ana Martínez", role: "Directora — Clínica VidaSana", avatar: "AM", text: "Mis pacientes ahora agendan citas directamente desde la web. Las reservas aumentaron un 40% el primer mes.", color: "from-emerald-500 to-teal-500" },
  { name: "Diego Fernández", role: "Fundador — FitZone Gym", avatar: "DF", text: "Probé con freelancers y agencias. Siempre terminaba con webs lentas y sin soporte. Aquí tengo una web que carga en 1 segundo.", color: "from-amber-500 to-orange-500" },
  { name: "Laura Sánchez", role: "Propietaria — Boutique Eleganza", avatar: "LS", text: "Mi tienda online se montó sobre ShopNova y las ventas se duplicaron. El equipo entiende de conversión.", color: "from-violet-500 to-purple-500" },
  { name: "Roberto Díaz", role: "Abogado — Díaz & Asociados", avatar: "RD", text: "La web genera consultas todos los días y el blog nos posiciona en Google. Resultado impecable.", color: "from-surface-400 to-surface-600" },
];

export default function Testimonials() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="mb-16">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase">Testimonios</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">
            <span className="font-light text-surface-300">Lo que dicen</span><br />
            <span className="font-extrabold text-white">nuestros clientes.</span>
          </h2>
        </motion.div>

        {/* Featured testimonial -- editorial, no card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mb-16"
        >
          <span className="pointer-events-none absolute -top-16 -left-6 text-[10rem] font-extrabold leading-none text-surface-900/20 select-none">
            &ldquo;
          </span>
          <div className="relative z-10 max-w-3xl">
            <p className="mb-8 text-xl leading-relaxed font-light text-surface-200 sm:text-2xl">
              {featured.text}
            </p>
            <div className="flex items-center gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${featured.color} text-sm font-bold text-white`}>
                {featured.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{featured.name}</p>
                <p className="text-sm text-surface-500">{featured.role}</p>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-cyan-400 text-cyan-400" />)}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest -- smaller grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl border border-surface-800 bg-surface-950 p-6 transition-all duration-300 hover:border-surface-700"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />)}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-surface-300">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-[10px] font-bold text-white`}>
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
