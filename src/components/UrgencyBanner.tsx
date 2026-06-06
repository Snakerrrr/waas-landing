import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

const SPOTS_TOTAL = 5;
const STORAGE_KEY = "urgency-dismissed";

interface Props {
  onStartOnboarding: () => void;
}

export default function UrgencyBanner({ onStartOnboarding }: Props) {
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window !== "undefined") return sessionStorage.getItem(STORAGE_KEY) === "1";
    return false;
  });
  const [spotsLeft] = useState(() => Math.max(1, SPOTS_TOTAL - Math.floor(Math.random() * 3)));

  useEffect(() => {
    if (dismissed) sessionStorage.setItem(STORAGE_KEY, "1");
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="fixed top-[73px] left-0 right-0 z-40 border-b border-cyan-500/10 bg-cyan-500/5 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-3 text-sm">
            <Zap className="h-4 w-4 shrink-0 text-cyan-400" />
            <span className="text-surface-300">
              Solo aceptamos {SPOTS_TOTAL} proyectos este mes —{" "}
              <strong className="text-cyan-400">Quedan {spotsLeft} spots</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onStartOnboarding}
              className="hidden rounded-lg bg-cyan-500 px-4 py-1.5 text-xs font-bold text-black transition-all hover:bg-cyan-400 sm:block"
            >
              Reservar mi spot
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="text-surface-500 hover:text-white"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
