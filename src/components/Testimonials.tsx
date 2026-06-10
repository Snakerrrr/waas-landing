import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  { tempId: 0, testimonial: "En menos de una semana tenía mi web funcionando con menú digital y reservas online. Antes pagué $5,000 a una agencia y no se compara.", by: "María González, Restaurante La Casa del Sabor", imgSrc: "https://i.pravatar.cc/150?img=1" },
  { tempId: 1, testimonial: "Lo que más me convenció fue no preocuparme por hosting ni seguridad. Pido cambios y en horas ya están online.", by: "Carlos Rodríguez, CEO de TechSmart Solutions", imgSrc: "https://i.pravatar.cc/150?img=2" },
  { tempId: 2, testimonial: "Mis pacientes ahora agendan citas directamente desde la web. Las reservas aumentaron un 40% el primer mes.", by: "Ana Martínez, Directora de Clínica VidaSana", imgSrc: "https://i.pravatar.cc/150?img=3" },
  { tempId: 3, testimonial: "Probé con freelancers y agencias. Siempre terminaba con webs lentas. Aquí tengo una web que carga en 1 segundo.", by: "Diego Fernández, Fundador de FitZone Gym", imgSrc: "https://i.pravatar.cc/150?img=4" },
  { tempId: 4, testimonial: "Mi tienda online se montó sobre ShopNova y las ventas se duplicaron. El equipo entiende de conversión.", by: "Laura Sánchez, Boutique Eleganza", imgSrc: "https://i.pravatar.cc/150?img=5" },
  { tempId: 5, testimonial: "Como abogados necesitábamos transmitir confianza. El resultado fue impecable. La web genera consultas todos los días.", by: "Roberto Díaz, Díaz & Asociados", imgSrc: "https://i.pravatar.cc/150?img=6" },
  { tempId: 6, testimonial: "El soporte es increíble. Responden en menos de 2 horas y cualquier cambio se implementa el mismo día.", by: "Valentina López, Studio V Diseño", imgSrc: "https://i.pravatar.cc/150?img=7" },
  { tempId: 7, testimonial: "Antes gastaba $200/mes entre hosting, mantenimiento y cambios. Ahora todo está incluido por menos.", by: "Andrés Mora, Consultoría Empresarial", imgSrc: "https://i.pravatar.cc/150?img=8" },
  { tempId: 8, testimonial: "La mejor inversión que hemos hecho. Simple, rápida y sin dolores de cabeza. Totalmente recomendado.", by: "Patricia Ruiz, Inmobiliaria Horizonte", imgSrc: "https://i.pravatar.cc/150?img=9" },
  { tempId: 9, testimonial: "Nos encanta que incluya SEO. Ya aparecemos en la primera página de Google para nuestra ciudad.", by: "Miguel Torres, Taller Mecánico Express", imgSrc: "https://i.pravatar.cc/150?img=10" },
];

interface CardProps {
  position: number;
  testimonial: (typeof testimonials)[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

function TestimonialCard({ position, testimonial, handleMove, cardSize }: CardProps) {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter
          ? "z-10 border-cyan-500 bg-cyan-500 text-black"
          : "z-0 border-white/10 bg-surface-900 text-surface-200 hover:border-cyan-500/30"
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
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255,255,255,0.05)" : "none",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.1)",
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(",")[0]}
        className="mb-4 h-14 w-12 object-cover object-top"
        style={{ boxShadow: "3px 3px 0px rgba(0,0,0,0.3)" }}
      />
      <h3 className={`text-base font-medium sm:text-lg ${isCenter ? "text-black" : "text-white"}`}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 text-sm italic ${isCenter ? "text-black/70" : "text-surface-500"}`}>
        - {testimonial.by}
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
        <SectionTitle eyebrow="Testimonios" lightText="Lo que dicen" boldText="nuestros clientes." className="mb-14" />
      </div>

      {/* Stagger cards carousel */}
      <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
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

        {/* Nav buttons */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 items-center justify-center border-2 border-white/10 bg-surface-950 text-surface-400 transition-all hover:border-cyan-500/30 hover:bg-cyan-500 hover:text-black"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 items-center justify-center border-2 border-white/10 bg-surface-950 text-surface-400 transition-all hover:border-cyan-500/30 hover:bg-cyan-500 hover:text-black"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
