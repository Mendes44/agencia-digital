import { Code2 } from "lucide-react";
import Link from "next/link";

export function Logo({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link
      href="/#inicio"
      className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
    >
      <span
        className={`grid size-9 place-items-center rounded-xl transition ${
          inverse
            ? "border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 group-hover:border-cyan-300/50 group-hover:bg-cyan-400/15"
            : "border border-blue-200 bg-blue-50 text-blue-600 group-hover:border-blue-300 group-hover:bg-blue-100 dark:border-cyan-400/25 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-hover:border-cyan-300/50 dark:group-hover:bg-cyan-400/15"
        }`}
      >
        <Code2 aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </span>
      <span className={compact ? "sr-only" : "leading-none"}>
        <strong className={`block text-sm font-black tracking-tight ${inverse ? "text-white" : "text-slate-950 dark:text-white"}`}>Dev Mendes</strong>
        <span className={`mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] ${inverse ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
          Desenvolvimento web
        </span>
      </span>
    </Link>
  );
}
