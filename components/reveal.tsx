"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Carrega Motion somente quando o bloco entra na tela, preservando o carregamento inicial. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        void import("motion").then(({ animate }) => {
          animate(
            element,
            { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] },
            { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={className}
    >
      {children}
    </div>
  );
}
