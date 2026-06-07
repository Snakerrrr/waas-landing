import {
  ShoppingCart,
  Handshake,
  HeartPulse,
  Dumbbell,
  Building2,
  GraduationCap,
  Cpu,
  type LucideIcon,
} from "lucide-react";

interface Category {
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { label: "E-Commerce", icon: ShoppingCart },
  { label: "Servicios", icon: Handshake },
  { label: "Salud", icon: HeartPulse },
  { label: "Fitness", icon: Dumbbell },
  { label: "Inmobiliarias", icon: Building2 },
  { label: "Educación", icon: GraduationCap },
  { label: "Tecnología", icon: Cpu },
];

const doubled = [...categories, ...categories];

function MarqueeItem({ cat }: { cat: Category }) {
  return (
    <span className="group mx-4 inline-flex items-center gap-3 transition-all duration-500 ease-in-out sm:mx-6">
      <cat.icon className="h-5 w-5 text-surface-600 transition-all duration-500 ease-in-out group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.7)] sm:h-6 sm:w-6" />
      <span className="text-lg font-semibold tracking-wide text-surface-600 transition-all duration-500 ease-in-out group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] sm:text-2xl">
        {cat.label}
      </span>
      <span className="ml-3 text-lg text-surface-800 transition-all duration-500 ease-in-out group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.4)] sm:text-2xl">
        ///
      </span>
    </span>
  );
}

export default function Marquee() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] bg-transparent py-5 sm:py-6"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 100px, black calc(100% - 100px), transparent)",
      }}
    >
      {/* Row 1 */}
      <div className="animate-marquee mb-3 flex whitespace-nowrap">
        {doubled.map((cat, i) => (
          <MarqueeItem key={`a${i}`} cat={cat} />
        ))}
      </div>

      {/* Row 2 -- reversed, dimmer */}
      <div className="animate-marquee-reverse flex whitespace-nowrap opacity-40">
        {doubled.map((cat, i) => (
          <MarqueeItem key={`b${i}`} cat={cat} />
        ))}
      </div>
    </section>
  );
}
