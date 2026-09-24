import { MousePointerClick, Palette, Smartphone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const benefits = [
  {
    icon: Palette,
    title: "Design premium e exclusivo",
    description:
      "Cause uma primeira impressão inesquecível. Criamos layouts modernos que transmitem autoridade e destacam sua empresa da concorrência.",
    className: "lg:col-span-7",
    accent: "from-blue-500/20 to-cyan-300/5",
  },
  {
    icon: Smartphone,
    title: "100% otimizado para celulares",
    description:
      "Mais de 80% dos seus clientes pesquisam pelo celular. Seu site será rápido e perfeitamente adaptado para qualquer tamanho de tela.",
    className: "lg:col-span-5",
    accent: "from-indigo-500/20 to-blue-400/5",
  },
  {
    icon: MousePointerClick,
    title: "Máquina de captura de leads",
    description:
      "Botões estratégicos e integração direta com o WhatsApp deixam o cliente a apenas um clique de iniciar uma conversa com sua empresa.",
    className: "lg:col-span-12",
    accent: "from-emerald-400/15 to-cyan-300/5",
  },
];

export function Benefits() {
  return (
    <section id="servicos" className="relative border-b border-slate-200 bg-slate-50 py-20 dark:border-white/8 dark:bg-[#070c18] sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Estratégia, design e performance"
            title="Por que nossos sites geram mais resultados?"
            description="Não entregamos apenas uma página bonita. Cada escolha visual conduz o visitante, reduz dúvidas e aproxima sua empresa de uma nova oportunidade."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} className={benefit.className} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0b1424] dark:shadow-none dark:hover:border-cyan-300/25 sm:p-9">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.accent} opacity-70 transition group-hover:opacity-100`}
                  />
                  <div aria-hidden="true" className="absolute -right-12 -top-12 size-40 rounded-full border border-white/8" />
                  <div className="relative">
                    <span className="grid size-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 shadow-[0_0_30px_rgba(34,211,238,0.08)] dark:border-cyan-300/20 dark:bg-cyan-300/8 dark:text-cyan-300">
                      <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <h3 className="mt-8 text-2xl font-black tracking-tight text-slate-950 dark:text-white">{benefit.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">{benefit.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
