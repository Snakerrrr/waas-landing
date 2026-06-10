import { motion } from "framer-motion";

interface GradientDotsProps {
  dotSize?: number;
  spacing?: number;
  duration?: number;
  colorCycleDuration?: number;
  backgroundColor?: string;
}

export default function GradientDots({
  dotSize = 8,
  spacing = 10,
  duration = 30,
  colorCycleDuration = 8,
  backgroundColor = "#0B0F19",
}: GradientDotsProps) {
  const hexSpacing = spacing * 1.732;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundColor,
        backgroundImage: `
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, transparent 1.5px, ${backgroundColor} 0 ${dotSize}px, transparent ${dotSize}px),
          radial-gradient(circle at 50% 50%, #38bdf8, transparent 60%),
          radial-gradient(circle at 50% 50%, #818cf8, transparent 60%),
          radial-gradient(circle at 50% 50%, #0ea5e9, transparent 60%),
          radial-gradient(ellipse at 50% 50%, #6366f1, transparent 60%)
        `,
        backgroundSize: `
          ${spacing}px ${hexSpacing}px,
          ${spacing}px ${hexSpacing}px,
          200% 200%,
          200% 200%,
          200% 200%,
          200% ${hexSpacing}px
        `,
        backgroundPosition: `
          0px 0px, ${spacing / 2}px ${hexSpacing / 2}px,
          0% 0%,
          0% 0%,
          0% 0px
        `,
      }}
      animate={{
        backgroundPosition: [
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 800% 400%, 1000% -400%, -1200% -600%, 400% ${hexSpacing}px`,
          `0px 0px, ${spacing / 2}px ${hexSpacing / 2}px, 0% 0%, 0% 0%, 0% 0%, 0% 0%`,
        ],
        filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
      }}
      transition={{
        backgroundPosition: {
          duration,
          ease: "linear",
          repeat: Infinity,
        },
        filter: {
          duration: colorCycleDuration,
          ease: "linear",
          repeat: Infinity,
        },
      }}
    />
  );
}
