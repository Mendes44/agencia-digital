import { ExternalLink, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#07101f]">
      <div className="mx-auto grid w-full max-w-7xl justify-items-center gap-10 px-5 py-14 text-center sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="flex flex-col items-center md:col-span-2 lg:col-span-1">
          <Logo inverse />
          <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Sites rápidos, profissionais e pensados para transformar presença digital em novas oportunidades.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Navegação</h2>
          <nav className="mt-5 grid justify-items-center gap-3 text-sm text-slate-400" aria-label="Navegação do rodapé">
            <Link href="/#servicos" className="transition hover:text-cyan-200">Serviços</Link>
            <Link href="/#projetos" className="transition hover:text-cyan-200">Projetos</Link>
            <Link href="/#sobre" className="transition hover:text-cyan-200">Sobre nós</Link>
            <Link href="/#faq" className="transition hover:text-cyan-200">FAQ</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Contato</h2>
          <div className="mt-5 grid justify-items-center gap-3 text-sm text-slate-400">
            <a href={`mailto:${siteConfig.email}`} className="flex items-center justify-center gap-2 transition hover:text-cyan-200">
              <Mail className="size-4" strokeWidth={1.7} aria-hidden="true" />
              {siteConfig.email}
            </a>
            <a
              href={whatsappUrl("Olá! Vim pelo site da Dev Mendes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 transition hover:text-cyan-200"
            >
              <MessageCircle className="size-4" strokeWidth={1.7} aria-hidden="true" />
              +55 31 98734-0462
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black text-white">Dev Mendes</h2>
          <div className="mt-5 grid justify-items-center gap-3 text-sm text-slate-400">
            <span>CNPJ: {siteConfig.cnpj}</span>
            <span>Atendimento online em todo o Brasil</span>
            <Link href="/privacidade" className="transition hover:text-cyan-200">Política de privacidade</Link>
            <a
              href="https://www.linkedin.com/in/marcosmendes44/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 transition hover:text-cyan-200"
            >
              LinkedIn
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Dev Mendes. Todos os direitos reservados.
      </div>
    </footer>
  );
}
