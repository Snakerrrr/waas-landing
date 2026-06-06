import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  lightText: string;
  boldText: string;
  className?: string;
}

const maskVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariants = {
  hidden: { x: "-110%" },
  visible: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function SectionTitle({ eyebrow, lightText, boldText, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      variants={maskVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {/* Eyebrow */}
      <div className="mb-3 overflow-hidden">
        <motion.p
          variants={lineVariants}
          className="text-sm font-semibold tracking-[0.2em] text-cyan-400 uppercase"
        >
          {eyebrow}
        </motion.p>
      </div>

      {/* Display heading */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        {/* Light line */}
        <span className="block overflow-hidden">
          <motion.span
            variants={lineVariants}
            className="block font-extralight tracking-tight text-surface-400"
          >
            {lightText}
          </motion.span>
        </span>
        {/* Bold line */}
        <span className="block overflow-hidden">
          <motion.span
            variants={lineVariants}
            className="block font-extrabold tracking-tight text-white"
          >
            {boldText}
          </motion.span>
        </span>
      </h2>
    </motion.div>
  );
}
