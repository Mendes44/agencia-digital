import { AppWindow, Check, ChevronDown, Code2, MessageSquareText, Rocket } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const products = [
  {
    name: "FixApp",
    label: "Gestão de assistência técnica",
    icon: AppWindow,
    image: "/img/FixApp.png",
    description:
      "Uma plataforma para organizar a operação de assistências técnicas, acompanhar cada ordem de serviço e manter as áreas do negócio conectadas.",
    features: ["Ordens de serviço e acompanhamento", "Clientes, equipe e estoque", "PDV, financeiro e relatórios"],
  },
  {
    name: "MesaCerta",
    label: "Gestão de reservas e mesas",
    icon: Rocket,
    image: "/img/MesaCerta.png",
    description:
      "Um sistema para restaurantes visualizarem a operação do dia, administrarem reservas e acompanharem a disponibilidade das mesas em tempo real.",
    features: ["Reservas e previsão de atendimento", "Mapa visual do salão", "Disponibilidade, operação e relatórios"],
  },
];

export function About() {
  return (
    <section id="sobre" className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24 dark:border-white/8 dark:bg-[#070c18]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Experiência além da landing page"
            title="Visão de produto, cuidado de especialista."
            description="Você fala diretamente com quem pensa, projeta e desenvolve sua presença digital. Sem repasses, ruído ou soluções genéricas."
          />
          <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm dark:border-white/8 dark:bg-white/[0.035] dark:text-slate-300 dark:shadow-none">
              <Code2 className="size-5 text-blue-600 dark:text-cyan-300" strokeWidth={1.7} aria-hidden="true" />
              Desenvolvimento sob medida
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm dark:border-white/8 dark:bg-white/[0.035] dark:text-slate-300 dark:shadow-none">
              <MessageSquareText className="size-5 text-emerald-600 dark:text-emerald-300" strokeWidth={1.7} aria-hidden="true" />
              Atendimento direto comigo
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Reveal
                key={product.name}
                delay={index * 0.1}
                className="has-[details[open]]:sm:col-span-2"
              >
                <details className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition open:shadow-xl dark:border-white/10 dark:bg-[#0b1424] dark:shadow-none">
                  <summary className="relative cursor-pointer list-none p-7 sm:p-9 [&::-webkit-details-marker]:hidden">
                    <div aria-hidden="true" className="absolute -right-14 -top-14 size-44 rounded-full bg-cyan-300/8 blur-3xl" />
                    <div className="relative flex items-start justify-between gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 dark:border-cyan-300/20 dark:bg-cyan-300/8 dark:text-cyan-300">
                        <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                      <ChevronDown className="size-5 text-slate-400 transition group-open:rotate-180 dark:text-slate-500" aria-hidden="true" />
                    </div>
                    <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-300">{product.label}</p>
                    <h3 className="relative mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white">{product.name}</h3>
                    <p className="relative mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Clique para conhecer o sistema</p>
                  </summary>

                  <div className="border-t border-slate-200 p-4 pt-5 dark:border-white/8 sm:p-6">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/8 dark:bg-slate-950">
                      <Image
                        src={product.image}
                        alt={`Tela principal do sistema ${product.name}`}
                        width={1920}
                        height={product.name === "FixApp" ? 1444 : 1536}
                        sizes="(max-width: 1024px) 92vw, 40vw"
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">{product.description}</p>
                    <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="size-4 text-emerald-500 dark:text-emerald-300" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
