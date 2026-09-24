import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { whatsappUrl } from "@/lib/site";

const navigation = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre nós", href: "/#sobre" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contato", href: "/#contato" },
];

export function Header() {
  const contactUrl = whatsappUrl("Olá! Vim pelo site da Dev Mendes e quero conversar sobre meu projeto.");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl dark:border-white/8 dark:bg-[#050914]/82">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-slate-400 dark:hover:text-white dark:focus-visible:outline-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:focus-visible:outline-cyan-400"
          >
            Fale conosco
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="sm:hidden">
            <ThemeToggle />
          </div>
          <details className="group relative">
            <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white [&::-webkit-details-marker]:hidden">
              <Menu className="size-5" aria-hidden="true" />
              <span className="sr-only">Abrir menu</span>
            </summary>
            <nav
              id="mobile-navigation"
              className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-[#07101f]"
              aria-label="Navegação móvel"
            >
              <div className="grid gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Fale conosco
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
