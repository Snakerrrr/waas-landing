import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "En menos de una semana tenía mi web funcionando con menú digital y reservas online. Antes pagué $5,000 a una agencia y no se compara.", by: "María González, Dueña — La Casa del Sabor", imgSrc: "https://i.pravatar.cc/150?img=1" },
  { tempId: 1, testimonial: "Lo que más me convenció fue no preocuparme por hosting, actualizaciones ni seguridad. Pido cambios y en horas ya están online.", by: "Carlos Rodríguez, CEO — TechSmart Solutions", imgSrc: "https://i.pravatar.cc/150?img=3" },
  { tempId: 2, testimonial: "Mis pacientes ahora agendan citas directamente desde la web. Las reservas aumentaron un 40% el primer mes.", by: "Ana Martínez, Directora — Clínica VidaSana", imgSrc: "https://i.pravatar.cc/150?img=5" },
  { tempId: 3, testimonial: "Probé con freelancers y agencias. Siempre terminaba con webs lentas y sin soporte. Aquí tengo una web que carga en 1 segundo.", by: "Diego Fernández, Fundador — FitZone Gym", imgSrc: "https://i.pravatar.cc/150?img=7" },
  { tempId: 4, testimonial: "Mi tienda online se montó sobre ShopNova y las ventas se duplicaron. El equipo entiende de conversión, no solo de diseño.", by: "Laura Sánchez, Propietaria — Boutique Eleganza", imgSrc: "https://i.pravatar.cc/150?img=9" },
  { tempId: 5, testimonial: "La web genera consultas todos los días y el blog nos posiciona en Google. Resultado impecable.", by: "Roberto Díaz, Abogado — Díaz & Asociados", imgSrc: "https://i.pravatar.cc/150?img=11" },
  { tempId: 6, testimonial: "El soporte es increíble. Responden en minutos y los cambios se aplican el mismo día. Nunca había tenido ese nivel de servicio.", by: "Sofía Herrera, CEO — Wellness Studio", imgSrc: "https://i.pravatar.cc/150?img=13" },
  { tempId: 7, testimonial: "Pasé de no tener presencia digital a tener una web profesional en 48 horas. El ROI fue inmediato.", by: "Andrés Molina, Director — Consultora Norte", imgSrc: "https://i.pravatar.cc/150?img=15" },
  { tempId: 8, testimonial: "Si pudiera dar 11 estrellas, daría 12. Es simplemente el mejor servicio que he contratado.", by: "Valentina Ruiz, Fundadora — Studio V", imgSrc: "https://i.pravatar.cc/150?img=17" },
  { tempId: 9, testimonial: "La escalabilidad es impresionante. Empezamos con Starter y ahora estamos en Scale con e-commerce completo.", by: "Marcos Torres, COO — GrowthLab", imgSrc: "https://i.pravatar.cc/150?img=19" },
];

interface TestimonialCardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

function TestimonialCard({ position, testimonial, handleMove, cardSize }: TestimonialCardProps) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out sm:p-8 ${
        isCenter
          ? "z-10 border-cyan-500 bg-cyan-500 text-black"
          : "z-0 border-white/[0.08] bg-[#1E293B] text-surface-200 hover:border-cyan-500/30"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255,255,255,0.06)" : "none",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-white/10"
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 bg-surface-800 object-cover object-top"
        style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.3)" }}
      />
      <h3 className={`text-base font-medium sm:text-lg ${isCenter ? "text-black" : "text-white"}`}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={`absolute bottom-6 left-6 right-6 text-sm italic sm:bottom-8 sm:left-8 sm:right-8 ${
        isCenter ? "text-black/70" : "text-surface-400"
      }`}>
        — {testimonial.by}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...list];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setList(newList);
  };

  useEffect(() => {
    const update = () => setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 280);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonios" title="Lo que dicen" highlight="nuestros clientes." className="mb-14" />
      </div>

      {/* Stagger carousel */}
      <div className="relative w-full overflow-hidden" style={{ height: 580 }}>
        {list.map((t, i) => {
          const position = list.length % 2
            ? i - (list.length + 1) / 2
            : i - list.length / 2;
          return (
            <TestimonialCard
              key={t.tempId}
              testimonial={t}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}

        {/* Navigation arrows */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center border-2 border-white/10 bg-surface-950 text-surface-300 transition-colors hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center border-2 border-white/10 bg-surface-950 text-surface-300 transition-colors hover:border-cyan-500 hover:bg-cyan-500 hover:text-black"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
