import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-black tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}
