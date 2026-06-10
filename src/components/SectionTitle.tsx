import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  className?: string;
}

export default function SectionTitle({ eyebrow, title, highlight, className = "" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`flex items-start gap-5 ${className}`}
    >
      {/* Accent line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-1 w-[2px] shrink-0 rounded-full bg-gradient-to-b from-cyan-400 to-cyan-400/0"
        style={{ minHeight: 40 }}
      />

      <div>
        {/* Eyebrow */}
        <p className="mb-2 text-xs font-medium tracking-[0.25em] text-cyan-400/60 uppercase">
          {eyebrow}
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {highlight ? (
            <>
              {title}{" "}
              <span className="text-cyan-400">{highlight}</span>
            </>
          ) : (
            title
          )}
        </h2>
      </div>
    </motion.div>
  );
}
