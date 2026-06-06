import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola, estoy interesado en el servicio de páginas web por suscripción. Me gustaría más información."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-110 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
