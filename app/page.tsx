import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";

export default function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <Benefits />
      <Portfolio />
      <About />
      <Process />
      <FinalCta />
      <Faq />
    </main>
  );
}
