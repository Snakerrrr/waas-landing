import { useState } from "react";
import { Menu, X, Sun, Moon, Zap } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-200 bg-white/80 backdrop-blur-xl dark:border-surface-800 dark:bg-surface-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-surface-900 dark:text-white">
            WebFlow<span className="text-primary-500">Studio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-surface-600 transition-colors hover:text-primary-500 dark:text-surface-400 dark:hover:text-primary-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-surface-500 transition-colors hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            onClick={onStartOnboarding}
            className="hidden rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/25 sm:inline-flex"
          >
            Empieza Hoy
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-surface-500 md:hidden dark:text-surface-400"
            aria-label="Menú"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-surface-200 bg-white px-4 pb-6 pt-2 md:hidden dark:border-surface-800 dark:bg-surface-950">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-surface-700 dark:text-surface-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileOpen(false); onStartOnboarding(); }}
            className="mt-3 block w-full rounded-lg bg-primary-600 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Empieza Hoy
          </button>
        </div>
      )}
    </nav>
  );
}
