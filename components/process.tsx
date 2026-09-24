import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    number: "01",
    title: "Alinhamento estratégico",
    description:
      "Um bate-papo objetivo para entender seu negócio, seus diferenciais e quem é o cliente que você deseja conquistar.",
  },
  {
    number: "02",
    title: "Criação e aprovação",
    description:
      "Desenvolvo uma experiência moderna com foco em conversão. Você acompanha, sugere ajustes e aprova cada detalhe.",
  },
  {
    number: "03",
    title: "Lançamento e vendas",
    description:
      "Após a aprovação e o envio dos materiais, sua landing page fica no ar, rápida e pronta para captar novos clientes.",
  },
];

export function Process() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 dark:border-white/8 dark:bg-[#050914] sm:py-24">
      <div aria-hidden="true" className="absolute -left-40 top-1/2 size-96 -translate-y-1/2 rounded-full bg-emerald-400/6 blur-[120px]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10">
        <Reveal className="text-center lg:text-left">
          <SectionHeading
            align="left"
            eyebrow="Processo claro do início ao fim"
            title="Seu site no ar de forma simples e sem burocracia"
            description="Você conhece cada etapa, participa das decisões importantes e recebe acompanhamento direto durante todo o projeto."
          />
        </Reveal>

        <ol className="relative space-y-4 before:absolute before:bottom-10 before:left-[1.65rem] before:top-10 before:w-px before:bg-gradient-to-b before:from-cyan-300/30 before:via-blue-500/30 before:to-transparent">
          {steps.map((step, index) => (
            <li key={step.number}>
              <Reveal delay={index * 0.09}>
                <div className="group relative grid grid-cols-[3.5rem_1fr] gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-400/40 hover:bg-white dark:border-white/8 dark:bg-white/[0.025] dark:hover:border-cyan-300/20 dark:hover:bg-white/[0.04] sm:p-6">
                <span className="relative z-10 grid size-14 place-items-center rounded-2xl border border-cyan-300/20 bg-[#081425] font-mono text-lg font-black text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.08)]">
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg font-black text-slate-950 dark:text-white sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
