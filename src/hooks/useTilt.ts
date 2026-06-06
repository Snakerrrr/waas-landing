import { useRef, type MouseEvent } from "react";

const MAX_TILT = 5;

export function useTilt<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const handleMouseMove = (e: MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * MAX_TILT}deg) rotateX(${-y * MAX_TILT}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}
