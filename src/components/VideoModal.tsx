import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Reemplaza con tu URL de YouTube o Vimeo
const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 flex items-center gap-2 text-sm text-surface-400 transition-colors hover:text-white"
            >
              Cerrar <X className="h-5 w-5" />
            </button>

            <div className="overflow-hidden rounded-2xl border border-surface-800 bg-surface-950">
              <div className="relative aspect-video">
                <iframe
                  src={VIDEO_URL}
                  title="Demo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
