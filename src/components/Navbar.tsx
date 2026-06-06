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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500"
        style={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? undefined : 0 }}
        transition={{ duration: 0 }}
        ref={(el) => {
          if (!el) return;
          const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            el.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
          };
          window.addEventListener("scroll", update, { passive: true });
          update();
        }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a href="#" className="relative z-50 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
              <Zap className="h-5 w-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">
              WebFlow<span className="text-cyan-400">Studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-surface-400 transition-colors hover:text-cyan-400"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onStartOnboarding}
              className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Empezar
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label="Menú"
          >
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[2px] w-6 bg-white"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-3xl font-bold text-white transition-colors hover:text-cyan-400 sm:text-4xl"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { setMenuOpen(false); onStartOnboarding(); }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
                className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-lg font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20"
              >
                Empezar Ahora
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
