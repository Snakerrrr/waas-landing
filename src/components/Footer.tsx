import { Instagram, Twitter, Github, Mail, MapPin, Phone, Zap } from "lucide-react";

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const productLinks = [
  { text: "Demos", href: "#demos" },
  { text: "Precios", href: "#precios" },
  { text: "Beneficios", href: "#beneficios" },
  { text: "FAQ", href: "#faq" },
];

const companyLinks = [
  { text: "Sobre Nosotros", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Casos de Éxito", href: "#" },
  { text: "Trabaja con Nosotros", href: "#" },
];

const helpLinks = [
  { text: "Soporte", href: "#" },
  { text: "Contacto", href: "#", hasIndicator: true },
  { text: "Términos de Servicio", href: "#" },
  { text: "Política de Privacidad", href: "#" },
];

const contactInfo = [
  { icon: Mail, text: "hola@webflowstudio.com" },
  { icon: Phone, text: "+1 (555) 123-4567" },
  { icon: MapPin, text: "100% Remoto — Global", isAddress: true },
];

export default function Footer() {
  return (
    <footer className="mt-16 w-full rounded-t-2xl border-t border-white/5 bg-surface-900/50">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                <Zap className="h-4 w-4 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                WebFlow<span className="text-cyan-400">Studio</span>
              </span>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-surface-400">
              Páginas web profesionales por suscripción mensual. Hosting, mantenimiento
              y cambios ilimitados incluidos. La forma inteligente de tener presencia digital.
            </p>

            <ul className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-surface-400 transition-all hover:border-cyan-500/30 hover:text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-2">
            <div>
              <p className="text-sm font-semibold text-white">Producto</p>
              <ul className="mt-5 space-y-3">
                {productLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-sm text-surface-400 transition-colors hover:text-cyan-400">{text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Empresa</p>
              <ul className="mt-5 space-y-3">
                {companyLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a href={href} className="text-sm text-surface-400 transition-colors hover:text-cyan-400">{text}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Ayuda</p>
              <ul className="mt-5 space-y-3">
                {helpLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a href={href} className="flex items-center gap-1.5 text-sm text-surface-400 transition-colors hover:text-cyan-400">
                      {text}
                      {hasIndicator && (
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Contacto</p>
              <ul className="mt-5 space-y-3">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a href="#" className="flex items-start gap-2 text-sm text-surface-400 transition-colors hover:text-cyan-400">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400/60" />
                      {isAddress ? (
                        <address className="not-italic">{text}</address>
                      ) : (
                        <span>{text}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} WebFlowStudio. Todos los derechos reservados.
          </p>
          <p className="text-xs text-surface-600">
            Hecho con pasión para negocios que quieren crecer.
          </p>
        </div>
      </div>
    </footer>
  );
}
