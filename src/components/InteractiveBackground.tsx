import { useState, useEffect, type ReactNode } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const pageStyles = `
  #mouse-gradient {
    position: fixed;
    pointer-events: none;
    border-radius: 9999px;
    background-image: radial-gradient(circle, rgba(56,189,248,0.04), rgba(99,102,241,0.03), transparent 70%);
    transform: translate(-50%, -50%);
    will-change: left, top, opacity;
    transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
  }
  @keyframes grid-draw {
    0% { stroke-dashoffset: 1000; opacity: 0; }
    50% { opacity: 0.3; }
    100% { stroke-dashoffset: 0; opacity: 0.12; }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 0.08; transform: scale(1); }
    50% { opacity: 0.25; transform: scale(1.2); }
  }
  @keyframes float-particle {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
    25% { transform: translateY(-12px) translateX(6px); opacity: 0.4; }
    50% { transform: translateY(-6px) translateX(-4px); opacity: 0.25; }
    75% { transform: translateY(-18px) translateX(8px); opacity: 0.5; }
  }
  .grid-line-anim {
    stroke: rgba(56,189,248,0.15);
    stroke-width: 0.5;
    opacity: 0;
    stroke-dasharray: 5 5;
    stroke-dashoffset: 1000;
    animation: grid-draw 2.5s ease-out forwards;
  }
  .dot-anim {
    fill: rgba(56,189,248,0.3);
    opacity: 0;
    animation: pulse-dot 4s ease-in-out infinite;
  }
  .floating-dot {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(56,189,248,0.5);
    border-radius: 50%;
    animation: float-particle 5s ease-in-out infinite;
  }
  .ripple-click {
    position: fixed;
    width: 6px;
    height: 6px;
    background: rgba(56,189,248,0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    animation: pulse-dot 0.8s ease-out forwards;
    z-index: 9999;
  }
`;

export default function InteractiveBackground({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState({ left: "0px", top: "0px", opacity: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ left: `${e.clientX}px`, top: `${e.clientY}px`, opacity: 1 });
    const onLeave = () => setMouse((p) => ({ ...p, opacity: 0 }));
    const onClick = (e: MouseEvent) => {
      const r = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((p) => [...p, r]);
      setTimeout(() => setRipples((p) => p.filter((x) => x.id !== r.id)), 800);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <style>{pageStyles}</style>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-surface-950 via-[#060a14] to-surface-900 text-surface-200">
        {/* SVG grid + dots */}
        <svg className="pointer-events-none fixed inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bgGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(56,189,248,0.04)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGrid)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line-anim" style={{ animationDelay: "0.5s" }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line-anim" style={{ animationDelay: "1s" }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line-anim" style={{ animationDelay: "1.5s" }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line-anim" style={{ animationDelay: "2s" }} />
          <circle cx="20%" cy="20%" r="2" className="dot-anim" style={{ animationDelay: "2.5s" }} />
          <circle cx="80%" cy="20%" r="2" className="dot-anim" style={{ animationDelay: "2.8s" }} />
          <circle cx="20%" cy="80%" r="2" className="dot-anim" style={{ animationDelay: "3.1s" }} />
          <circle cx="80%" cy="80%" r="2" className="dot-anim" style={{ animationDelay: "3.4s" }} />
          <circle cx="50%" cy="50%" r="1.5" className="dot-anim" style={{ animationDelay: "3.7s" }} />
        </svg>

        {/* Floating particles */}
        <div className="floating-dot" style={{ top: "20%", left: "12%", animationDelay: "0s" }} />
        <div className="floating-dot" style={{ top: "55%", left: "88%", animationDelay: "1.2s" }} />
        <div className="floating-dot" style={{ top: "35%", left: "8%", animationDelay: "2.4s" }} />
        <div className="floating-dot" style={{ top: "70%", left: "92%", animationDelay: "3.6s" }} />
        <div className="floating-dot" style={{ top: "85%", left: "45%", animationDelay: "1.8s" }} />

        {/* Mouse gradient follower */}
        <div
          id="mouse-gradient"
          className="h-80 w-80 blur-2xl sm:h-96 sm:w-96 sm:blur-3xl"
          style={{ left: mouse.left, top: mouse.top, opacity: mouse.opacity }}
        />

        {/* Click ripples */}
        {ripples.map((r) => (
          <div key={r.id} className="ripple-click" style={{ left: `${r.x}px`, top: `${r.y}px` }} />
        ))}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
