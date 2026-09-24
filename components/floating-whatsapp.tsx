import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl("Olá! Vim pelo site da Dev Mendes e quero falar sobre meu projeto.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Dev Mendes pelo WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-500 px-4 text-sm font-black text-[#04150d] shadow-[0_16px_45px_rgba(16,185,129,0.3)] transition hover:-translate-y-1 hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5"
    >
      <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
