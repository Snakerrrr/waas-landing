import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart, Handshake, HeartPulse, Dumbbell,
  Building2, GraduationCap, Cpu, Palette, UtensilsCrossed, Scale,
  type LucideIcon,
} from "lucide-react";

interface Logo {
  name: string;
  icon: LucideIcon;
}

const logos: Logo[] = [
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Servicios", icon: Handshake },
  { name: "Salud", icon: HeartPulse },
  { name: "Fitness", icon: Dumbbell },
  { name: "Inmobiliarias", icon: Building2 },
  { name: "Educación", icon: GraduationCap },
  { name: "Tecnología", icon: Cpu },
  { name: "Diseño", icon: Palette },
  { name: "Restaurantes", icon: UtensilsCrossed },
  { name: "Legal", icon: Scale },
];

const TITLE_WORDS = ["Confiado", "por", "cientos", "de", "negocios", "en", "cada", "industria"];

function TextRoll() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % TITLE_WORDS.length), 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex flex-wrap gap-x-2">
      {TITLE_WORDS.map((word, i) => (
        <span
          key={word}
          className={`inline-block transition-all duration-500 ${
            i <= index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    let pos = 0;

    const step = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...logos, ...logos];

  return (
    <section className="w-full py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {/* Title with text roll effect */}
          <h2 className="ml-1 text-xl font-light tracking-tight text-surface-300 sm:text-2xl md:text-3xl">
            <TextRoll />
          </h2>

          {/* Logo carousel */}
          <div
            ref={scrollRef}
            className="flex w-full gap-2 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {doubled.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center gap-3 rounded-xl p-4 transition-colors duration-300 hover:bg-white/5 sm:h-24 sm:w-48"
              >
                <logo.icon className="h-6 w-6 shrink-0 text-surface-500 transition-colors group-hover:text-cyan-400 sm:h-7 sm:w-7" />
                <span className="text-sm font-medium text-surface-500 sm:text-base">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
