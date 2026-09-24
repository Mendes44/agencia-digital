import { ArrowRight, Check, Gauge, TrendingUp } from "lucide-react";
import Image from "next/image";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  const chartBars = ["h-[35%]", "h-[48%]", "h-[42%]", "h-[64%]", "h-[58%]", "h-[76%]", "h-[92%]"];
  const contactUrl = whatsappUrl(
    "Olá! Quero uma landing page profissional e gostaria de receber uma proposta.",
  );

  return (
    <section id="inicio" className="relative isolate overflow-hidden border-b border-slate-200 dark:border-white/8">
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-white dark:bg-[#050914]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(56,189,248,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />
      <div aria-hidden="true" className="absolute -right-32 top-0 -z-10 size-[620px] rounded-full bg-blue-600/15 blur-[130px]" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/3 -z-10 size-72 rounded-full bg-emerald-400/8 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-10 sm:min-h-[calc(100svh-5rem)] sm:gap-16 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
        <div className="relative z-10 text-center lg:text-left">
          <div className="mb-5 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.16em] text-blue-700 dark:border-cyan-300/20 dark:bg-cyan-300/8 dark:text-cyan-200 sm:mb-6 sm:text-xs sm:tracking-[0.18em]">
            <span className="size-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_12px_#34d399] dark:bg-emerald-300" />
            Desenvolvimento web orientado a resultados
          </div>

          <h1 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-[1.04] tracking-[-0.05em] text-slate-950 dark:text-white sm:text-5xl lg:mx-0 lg:text-[4.35rem]">
            Transforme cliques em clientes com um site de{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              alta conversão
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 dark:text-slate-400 sm:mt-7 sm:text-lg sm:leading-8 lg:mx-0">
            Na Dev Mendes, desenvolvemos plataformas de alta performance que convertem visitantes em
            clientes e fortalecem a presença digital do seu negócio.
          </p>

          <div className="mx-auto mt-7 max-w-lg rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:mt-9 lg:mx-0 lg:text-left">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="px-4 py-2 sm:min-w-40">
                <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400">Landing page a partir de</span>
                <strong className="mt-1 block text-3xl font-black tracking-tight text-slate-950 dark:text-white">R$ 497,00</strong>
              </div>
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-center text-sm font-black uppercase tracking-wide text-white shadow-[0_12px_35px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Quero meu site profissional
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>
          </div>

          <ul className="mx-auto mt-5 flex max-w-lg flex-wrap justify-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-600 dark:text-slate-400 sm:mt-6 lg:mx-0" aria-label="Diferenciais">
            {["Performance e SEO", "Responsivo", "Atendimento direto"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check className="size-4 text-emerald-600 dark:text-emerald-300" strokeWidth={2.2} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:mx-0 lg:-translate-y-10">
          <div aria-hidden="true" className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[80px]" />
          <div className="relative ml-auto w-[94%] rounded-[1.4rem] border border-white/12 bg-[#0b1424]/95 p-2.5 shadow-[0_35px_100px_rgba(0,0,0,0.5),0_0_70px_rgba(37,99,235,0.12)]">
            <div className="flex items-center gap-2 px-2 pb-2.5 pt-1">
              <span className="size-2 rounded-full bg-red-400/80" />
              <span className="size-2 rounded-full bg-amber-300/80" />
              <span className="size-2 rounded-full bg-emerald-300/80" />
              <span className="ml-3 h-5 flex-1 rounded-md border border-white/5 bg-white/[0.035]" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/6 bg-slate-950">
              <Image
                src="/img/projeto-viagem.webp"
                alt="Projeto de landing page para agência de viagem"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 55vw"
                className="object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/55 via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute -bottom-8 left-0 hidden w-48 rounded-2xl border border-cyan-300/20 bg-[#0a1526]/95 p-4 shadow-2xl backdrop-blur md:block">
            <div className="flex items-center justify-between">
              <Gauge className="size-5 text-cyan-300" strokeWidth={1.7} aria-hidden="true" />
              <span className="text-xs font-bold text-emerald-300">Excelente</span>
            </div>
            <strong className="mt-5 block text-4xl font-black text-white">99</strong>
            <span className="text-xs text-slate-400">Performance</span>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-300" />
            </div>
          </div>

          <div className="absolute -right-2 -top-8 w-44 rounded-2xl border border-emerald-300/20 bg-[#0a1526]/95 p-4 shadow-2xl backdrop-blur sm:right-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">Conversão</span>
              <TrendingUp className="size-5 text-emerald-300" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <strong className="mt-3 block text-2xl font-black text-white">+34%</strong>
            <div className="mt-4 flex h-10 items-end gap-1" aria-hidden="true">
              {chartBars.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className={`${height} flex-1 rounded-sm bg-gradient-to-t from-blue-600/70 to-emerald-300`}
                />
              ))}
            </div>
          </div>

          <div className="absolute -bottom-12 right-4 w-32 rotate-2 overflow-hidden rounded-[1.8rem] border-[5px] border-slate-700 bg-slate-950 p-1 shadow-[0_28px_70px_rgba(0,0,0,0.6)] sm:right-7 sm:w-40">
            <div className="absolute left-1/2 top-2 z-10 h-3 w-12 -translate-x-1/2 rounded-full bg-black" />
            <div className="relative aspect-[9/18] overflow-hidden rounded-[1.35rem]">
              <Image
                src="/img/petlegal-responsive.webp"
                alt="Projeto PetLegal em um celular"
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
