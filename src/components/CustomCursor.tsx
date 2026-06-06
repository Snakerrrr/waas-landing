import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 400 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 400 });
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";

    const interactiveSelector = "a, button, [role='button'], input, textarea, select";
    const addHover = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", () => document.documentElement.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.documentElement.classList.remove("cursor-hover"));
      });
    };

    addHover();
    const observer = new MutationObserver(addHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-3 w-3 rounded-full bg-cyan-400 mix-blend-difference md:block"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-10 w-10 rounded-full border border-cyan-400/40 mix-blend-difference transition-[width,height] duration-300 md:block [.cursor-hover_&]:h-16 [.cursor-hover_&]:w-16 [.cursor-hover_&]:border-cyan-400/60"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
}
