import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const questions = [
  {
    question: "O que está incluído no valor inicial de R$ 497,00?",
    answer:
      "Esse é o investimento inicial para uma landing page profissional. O escopo final considera quantidade de seções, conteúdo, integrações e necessidades específicas do negócio — tudo é informado antes do início.",
  },
  {
    question: "Domínio e hospedagem estão incluídos?",
    answer:
      "Domínio e serviços de hospedagem podem ser contratados separadamente. Você recebe orientação para escolher a opção adequada, sem ficar preso a uma plataforma específica.",
  },
  {
    question: "Preciso entregar todos os textos e imagens?",
    answer:
      "Não. Eu ajudo a organizar a mensagem e indico os materiais necessários. Imagens exclusivas, produção de conteúdo extensa ou serviços de terceiros podem ser orçados separadamente.",
  },
  {
    question: "A entrega acontece mesmo em até 10 dias?",
    answer:
      "Uma landing page pode ser entregue em até 10 dias após a aprovação da proposta e o recebimento de todos os materiais. Projetos maiores recebem um cronograma próprio.",
  },
  {
    question: "O site funciona bem no celular e aparece no Google?",
    answer:
      "Sim. A experiência é construída com prioridade para celular e inclui a estrutura técnica essencial de SEO. O posicionamento no Google também depende de conteúdo, concorrência e estratégia contínua.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-y border-slate-200 bg-white py-20 dark:border-white/8 dark:bg-[#050914] sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Perguntas frequentes" title="Antes de começar" />
        </Reveal>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/8 dark:border-white/8">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={Math.min(index * 0.05, 0.15)}>
              <details className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-base font-bold text-slate-800 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown className="size-5 shrink-0 text-slate-500 transition group-open:rotate-180 group-open:text-cyan-300" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
