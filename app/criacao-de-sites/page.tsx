import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { LeadCaptureForm } from "@/app/criacao-de-sites/lead-capture-form";
import styles from "@/app/criacao-de-sites/lead-page.module.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Criação de sites profissionais",
  description:
    "A Dev Mendes cria sites profissionais, rápidos e responsivos para pequenos negócios conquistarem mais clientes.",
  alternates: { canonical: "/criacao-de-sites" },
  robots: { index: false, follow: true },
};

const benefits = [
  ["Mais oportunidades", "Seu negócio aberto 24 horas"],
  ["Feito para celular", "Leitura e contato sem dificuldade"],
  ["Atendimento direto", "Você fala com quem cria o projeto"],
];

export default function LeadCapturePage() {
  return (
    <main className={`${inter.className} ${styles["landing-page"]}`}>
      <header className={styles["site-header"]}>
        <Link className={styles.brand} href="/criacao-de-sites" aria-label="Dev Mendes — início">
          <Image src="/img/favicon3.png" width={45} height={45} alt="" priority />
          <span className={styles["brand-copy"]}>
            <strong>Dev<span>Mendes</span></strong>
            <small>Agência de Tecnologia</small>
          </span>
        </Link>
      </header>

      <div className={styles["main-grid"]}>
        <section className={styles.pitch} aria-labelledby="lead-page-title">
          <p className={styles.eyebrow}><span /> SITES PROFISSIONAIS PARA SEU NEGÓCIO</p>
          <h1 id="lead-page-title">Transforme visitas em clientes com um <em>site profissional.</em></h1>
          <p className={styles["pitch-text"]}>
            A Dev Mendes cria sites <strong>rápidos, responsivos e feitos para gerar confiança</strong>,
            apresentar seu negócio e facilitar o contato com novos clientes, além de soluções de tecnologia para sua empresa.
          </p>

          <ul className={styles.benefits}>
            {benefits.map(([title, description]) => (
              <li key={title}>
                <span className={styles["benefit-icon"]} aria-hidden="true"><i /></span>
                <div><strong>{title}</strong><small>{description}</small></div>
              </li>
            ))}
          </ul>
        </section>

        <LeadCaptureForm />
      </div>

      <footer className={styles["lead-footer"]}>
        <span>Sites profissionais • Atendimento em todo o Brasil</span>
        <span>© {new Date().getFullYear()} Dev Mendes</span>
      </footer>
    </main>
  );
}
