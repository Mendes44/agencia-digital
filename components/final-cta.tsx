import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/site";

export function FinalCta() {
  const contactUrl = whatsappUrl(
    "Olá! Quero escalar meu negócio com uma landing page profissional. Podemos conversar?",
  );

  return (
    <section id="contato" className="bg-slate-50 px-5 py-20 dark:bg-[#070c18] sm:px-8 sm:py-24 lg:px-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#0b1628] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14 lg:px-14 lg:py-14">
          <div aria-hidden="true" className="absolute -right-20 -top-28 -z-10 size-80 rounded-full bg-blue-600/20 blur-[90px]" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/3 -z-10 size-64 rounded-full bg-emerald-400/8 blur-[90px]" />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Seu próximo passo começa aqui</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Chegou a hora de escalar o seu negócio com um site profissional.
            </h2>
            <p className="mt-5 max-w-2xl text-pretty leading-7 text-slate-400">
              Pare de perder oportunidades por não ter uma presença online forte. Dê o próximo passo com uma página preparada para apresentar, convencer e gerar contato.
            </p>
          </div>

          <div className="mt-9 min-w-72 rounded-2xl border border-white/10 bg-[#07101f]/80 p-5 text-center lg:mt-0">
            <span className="text-xs font-semibold text-slate-400">Landing page a partir de</span>
            <strong className="mt-1 block text-4xl font-black tracking-tight text-white">R$ 497,00</strong>
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-black text-white shadow-[0_12px_35px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              <MessageCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
              Falar no WhatsApp
              <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
