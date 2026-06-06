import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X } from "lucide-react";

// Reemplaza con tu URL de Calendly
const CALENDLY_URL = "https://calendly.com/tu-usuario/30min";

export default function CalendlyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 rounded-xl border border-surface-700 px-8 py-4 text-base font-medium text-surface-300 transition-all hover:border-cyan-500/30 hover:text-white"
      >
        <Calendar className="h-5 w-5 text-cyan-400" />
        Agendar Llamada Gratuita
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative h-[80vh] w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-surface-400 hover:text-white"
              >
                Cerrar <X className="h-5 w-5" />
              </button>

              <div className="h-full overflow-hidden rounded-2xl border border-surface-800 bg-surface-950">
                <iframe
                  src={CALENDLY_URL}
                  title="Agendar llamada"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
