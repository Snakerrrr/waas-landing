import { useEffect, useRef } from "react";

export default function GridSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 opacity-100 transition-opacity duration-300"
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--mx, -1000px) var(--my, -1000px), rgba(56, 189, 248, 0.06), transparent 60%)",
      }}
    />
  );
}
