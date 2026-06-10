import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Card {
  title: string;
  subtitle: string;
  gradient: string;
  badge: { text: string; color: string };
  href: string;
}

const cards: Card[] = [
  { title: "Bella Cucina", subtitle: "Restaurante con menú digital y reservas", gradient: "from-orange-500/40 to-red-500/30", badge: { text: "Live", color: "bg-emerald-500" }, href: "#demos" },
  { title: "ShopNova", subtitle: "E-commerce con carrito y pagos integrados", gradient: "from-blue-500/40 to-indigo-500/30", badge: { text: "Live", color: "bg-emerald-500" }, href: "#demos" },
  { title: "LegalPro", subtitle: "Servicios legales con agenda online", gradient: "from-surface-400/30 to-surface-500/20", badge: { text: "Live", color: "bg-emerald-500" }, href: "#demos" },
  { title: "VitalCare", subtitle: "Clínica médica con citas y portal", gradient: "from-emerald-500/40 to-teal-500/30", badge: { text: "Pronto", color: "bg-cyan-500" }, href: "#demos" },
  { title: "IronFit", subtitle: "Gimnasio con clases y membresías", gradient: "from-amber-500/40 to-orange-500/30", badge: { text: "Pronto", color: "bg-cyan-500" }, href: "#demos" },
];

function MockupContent() {
  return (
    <div className="h-full w-full p-3">
      <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-3">
        <div className="h-1.5 w-1.5 rounded-full bg-surface-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-surface-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-surface-500" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="h-2 w-14 rounded bg-white/15" />
          <div className="flex gap-2"><div className="h-1.5 w-8 rounded bg-white/8" /><div className="h-1.5 w-8 rounded bg-white/8" /></div>
        </div>
        <div className="rounded-lg bg-white/5 p-3">
          <div className="mb-1.5 h-3 w-3/4 rounded bg-white/12" />
          <div className="mb-1 h-1.5 w-full rounded bg-white/6" />
          <div className="mt-2 h-5 w-16 rounded bg-cyan-500/30" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[1, 2, 3].map((k) => (
            <div key={k} className="rounded border border-white/5 bg-white/[0.02] p-2">
              <div className="mb-1 h-8 rounded bg-white/5" />
              <div className="h-1 w-3/4 rounded bg-white/8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  const shift = (dir: "next" | "prev") => {
    setCurrent((p) =>
      dir === "next" ? (p + 1) % cards.length : (p - 1 + cards.length) % cards.length
    );
  };

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      let pos = i - current;
      if (pos < -Math.floor(cards.length / 2)) pos += cards.length;
      else if (pos > Math.floor(cards.length / 2)) pos -= cards.length;

      const x = pos * 300;
      const y = pos === 0 ? 16 : 0;
      const scale = pos === 0 ? 1.03 : 0.92;
      const opacity = Math.abs(pos) > 2 ? 0 : 1;

      card.style.transition = Math.abs(pos) > 2 ? "none" : "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      card.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
      card.style.opacity = String(opacity);
      card.style.zIndex = pos === 0 ? "10" : String(5 - Math.abs(pos));
    });
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => shift("next"), 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16">
      {/* Cards */}
      <div className="relative mx-auto flex h-[420px] items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute cursor-pointer"
            onClick={() => setCurrent(i)}
          >
            <a href={card.href} className="group block">
              <div className={`relative h-[320px] w-[250px] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-tr ${card.gradient} shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] sm:h-[350px] sm:w-[280px]`}>
                {/* Mockup */}
                <div className="h-full w-full rounded-xl border border-white/5 bg-black/40 backdrop-blur-sm">
                  <MockupContent />
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`${card.badge.color} rounded-full px-2.5 py-0.5 text-[10px] font-bold text-black`}>
                    {card.badge.text}
                  </span>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-white/5 bg-surface-950/80 p-4 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                  <p className="mt-0.5 text-xs text-surface-400">{card.subtitle}</p>
                  <div className="mt-2 flex justify-end">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-white/10">
                      <ArrowUpRight className="h-3 w-3 text-white transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 right-6 flex gap-2 sm:bottom-6 sm:right-8">
        <button
          onClick={() => shift("prev")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-surface-300 transition-all hover:border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-110"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => shift("next")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface-950 text-surface-300 transition-all hover:border-cyan-500 hover:bg-cyan-500 hover:text-black hover:scale-110"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
