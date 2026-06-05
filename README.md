# WebFlowStudio — Landing Page WaaS

Landing page para agencia de desarrollo web con modelo de suscripción mensual (Website as a Service).

## Tech Stack

- **React 19** + TypeScript
- **Tailwind CSS v4** (con `@tailwindcss/vite`)
- **Vite 6** (build tool)
- **Lucide React** (iconos)

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Build para producción
npm run build

# 4. Preview del build
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx        # Navegación con toggle dark/light
│   ├── Hero.tsx          # Sección principal con CTA
│   ├── LogosBar.tsx      # Barra de industrias/nichos
│   ├── HowItWorks.tsx    # Proceso en 4 pasos
│   ├── Demos.tsx         # Portafolio filtrable por categoría
│   ├── Benefits.tsx      # Beneficios + tabla comparativa
│   ├── Pricing.tsx       # 3 planes de suscripción
│   ├── FAQ.tsx           # Preguntas frecuentes (acordeón)
│   ├── CTAFinal.tsx      # Llamada a la acción final
│   └── Footer.tsx        # Pie de página con links y redes
├── context/
│   └── ThemeContext.tsx   # Dark/Light mode con localStorage
├── App.tsx               # Componente raíz
├── main.tsx              # Entry point
└── index.css             # Tailwind v4 + tema personalizado
```

## Características

- Diseño responsive (mobile-first)
- Modo oscuro / claro con persistencia en localStorage
- Navegación sticky con blur
- Sección de demos filtrable por categoría
- Tabla comparativa (Tradicional vs WaaS)
- Pricing table con 3 niveles
- FAQ con acordeón interactivo
- Copywriting persuasivo orientado a conversión
