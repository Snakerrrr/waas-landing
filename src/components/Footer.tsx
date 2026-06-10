import { Zap, Mail, MapPin, Phone } from "lucide-react";

const productLinks = [
  { label: "Demos", href: "#demos" },
  { label: "Precios", href: "#precios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Sobre Nosotros", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Casos de Éxito", href: "#" },
  { label: "Contacto", href: "#" },
];

const legalLinks = [
  { label: "Términos de Servicio", href: "#" },
  { label: "Política de Privacidad", href: "#" },
  { label: "Política de Cookies", href: "#" },
];

const socialLinks = [
  { label: "Instagram", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "X", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "LinkedIn", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "TikTok", icon: <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg> },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="text-lg font-bold text-white">
                WebFlow<span className="text-cyan-400">Studio</span>
              </span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-surface-500">
              Páginas web profesionales por suscripción mensual. Hosting, mantenimiento y cambios ilimitados incluidos.
            </p>
            {/* Contact info */}
            <div className="space-y-2 text-sm text-surface-500">
              <a href="mailto:hola@webflowstudio.com" className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <Mail className="h-3.5 w-3.5" /> hola@webflowstudio.com
              </a>
              <a href="#" className="flex items-center gap-2 transition-colors hover:text-cyan-400">
                <Phone className="h-3.5 w-3.5" /> +1 (555) 123-4567
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Remoto — Global
              </p>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-surface-400 uppercase">Producto</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-surface-500 transition-colors hover:text-cyan-400">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-surface-400 uppercase">Empresa</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-surface-500 transition-colors hover:text-cyan-400">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="mb-4 text-xs font-medium tracking-[0.2em] text-surface-400 uppercase">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-surface-500 transition-colors hover:text-surface-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} WebFlowStudio. Todos los derechos reservados.
          </p>

          {/* Social icons */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a key={s.label} href="#" aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.06] text-surface-500 transition-all hover:border-cyan-500/20 hover:text-cyan-400">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
