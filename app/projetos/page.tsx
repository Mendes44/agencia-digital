import type { Metadata } from "next";
import { ProjectCard } from "@/components/portfolio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos de sites",
  description: "Conheça projetos de sites e landing pages desenvolvidos para diferentes segmentos.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-white dark:bg-[#050914]">
      <section className="relative overflow-hidden border-b border-slate-200 px-5 py-20 dark:border-white/8 sm:px-8 sm:py-24 lg:px-10">
        <div aria-hidden="true" className="absolute left-1/2 top-0 size-[560px] -translate-x-1/2 rounded-full bg-blue-600/12 blur-[130px]" />
        <Reveal className="relative mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Portfólio Dev Mendes"
            title="Projetos pensados para diferentes negócios"
            description="Cada projeto combina identidade, clareza e uma experiência responsiva para aproximar empresas dos seus clientes."
          />
        </Reveal>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
