import { Building2, Coffee, ShoppingBag, Stethoscope, Dumbbell, Home } from "lucide-react";

const logos = [
  { name: "Restaurantes", icon: Coffee },
  { name: "E-Commerce", icon: ShoppingBag },
  { name: "Corporativos", icon: Building2 },
  { name: "Salud", icon: Stethoscope },
  { name: "Fitness", icon: Dumbbell },
  { name: "Inmobiliarias", icon: Home },
];

export default function LogosBar() {
  return (
    <section className="border-y border-surface-200 bg-surface-50 py-10 dark:border-surface-800 dark:bg-surface-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium tracking-wider text-surface-500 uppercase dark:text-surface-400">
          Diseños optimizados para cada industria
        </p>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
          {logos.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-surface-800">
                <item.icon className="h-6 w-6 text-surface-400 dark:text-surface-500" />
              </div>
              <span className="text-xs font-medium text-surface-500 dark:text-surface-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
