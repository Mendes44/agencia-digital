import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: (typeof projects)[number]; index?: number }) {
  return (
    <Reveal delay={Math.min(index * 0.07, 0.2)}>
      <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl dark:border-white/10 dark:bg-[#0b1424] dark:shadow-none dark:hover:border-cyan-300/25 dark:hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block p-3 pb-0">
          <div className="overflow-hidden rounded-2xl border border-white/8 bg-slate-950">
            <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2.5">
              <span className="size-1.5 rounded-full bg-red-400/80" />
              <span className="size-1.5 rounded-full bg-amber-300/80" />
              <span className="size-1.5 rounded-full bg-emerald-300/80" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={`Página inicial do projeto ${project.title}`}
                fill
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 380px"
                className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/30 via-transparent to-transparent" />
            </div>
          </div>
        </a>
        <div className="p-6 sm:p-7">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-300">{project.category}</span>
          <div className="mt-3 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{project.description}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visitar projeto ${project.title}`}
              className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition group-hover:border-cyan-400/40 group-hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:group-hover:border-cyan-300/30 dark:group-hover:text-cyan-200"
            >
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projetos" className="relative overflow-hidden border-b border-slate-200 bg-white py-20 dark:border-white/8 dark:bg-[#050914] sm:py-24">
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[130px]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Portfólio selecionado"
            title="Projetos reais, resultados reais."
            description="Confira como ajudamos empresas a elevarem seu posicionamento digital com designs focados em vendas."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:border-cyan-400/50 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:border-white/12 dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/30 dark:hover:bg-cyan-300/8"
          >
            Conhecer todos os projetos
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
