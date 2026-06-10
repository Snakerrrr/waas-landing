import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

const navLinks = [
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Demos", href: "#demos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onStartOnboarding: () => void;
}

export default function Navbar({ onStartOnboarding }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 mx-auto w-full transition-all duration-300 ease-out ${
        scrolled && !open
          ? "max-w-4xl rounded-xl border border-white/[0.08] bg-surface-950/50 shadow-lg shadow-black/20 backdrop-blur-xl md:top-4"
          : open
            ? "bg-surface-950/90"
            : "border-b border-transparent"
      }`}
    >
      {/* Main bar */}
      <nav
        className={`flex h-14 w-full items-center justify-between transition-all duration-300 md:h-12 ${
          scrolled ? "px-4" : "px-6"
        }`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
            <Zap className="h-3.5 w-3.5 text-black" />
          </div>
          <span className="text-sm font-bold text-white">
            WebFlow<span className="text-cyan-400">Studio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-surface-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-2">
            <a
              href="#"
              className="rounded-lg border border-white/10 px-3 py-1.5 text-sm font-medium text-surface-300 transition-all hover:border-white/20 hover:bg-white/5"
            >
              Iniciar Sesión
            </a>
            <button
              onClick={onStartOnboarding}
              className="rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
            >
              Empezar
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 md:hidden"
          aria-label="Menú"
        >
          <div className="flex w-4 flex-col items-center gap-[5px]">
            <motion.span
              className="block h-[1.5px] w-full bg-surface-300"
              animate={open ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[1.5px] w-full bg-surface-300"
              animate={open ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col border-t border-white/5 bg-surface-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full w-full flex-col justify-between p-4">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-surface-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-lg border border-white/10 py-2.5 text-sm font-medium text-surface-300 transition-all hover:bg-white/5"
                >
                  Iniciar Sesión
                </a>
                <button
                  onClick={() => { setOpen(false); onStartOnboarding(); }}
                  className="rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-black transition-all hover:bg-cyan-400"
                >
                  Empezar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
