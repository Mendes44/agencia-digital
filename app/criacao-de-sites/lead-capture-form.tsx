"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import styles from "@/app/criacao-de-sites/lead-page.module.css";

const SUPABASE_ENDPOINT = "https://voxrjndqnzlsjitnhgrx.supabase.co/rest/v1/LEADS";
const SUPABASE_API_KEY = "sb_publishable_9TF-N8EGJ3VRm_t11k_l8w_8Nuljlc5";

type FormErrors = { nome?: string; telefone?: string; email?: string };

export function LeadCaptureForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") ?? "").trim();
    const ddd = String(formData.get("ddd") ?? "").replace(/\D/g, "").slice(0, 2);
    const telefone = String(formData.get("telefone") ?? "").replace(/\D/g, "").slice(0, 9);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const nextErrors: FormErrors = {};

    if (nome.length < 2) nextErrors.nome = "Informe seu nome completo.";
    if (ddd.length !== 2 || ![8, 9].includes(telefone.length)) {
      nextErrors.telefone = "Informe um DDD com 2 dígitos e um telefone com 8 ou 9 dígitos.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Informe um e-mail válido.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setMessage("Revise os campos destacados.");
      window.requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(SUPABASE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_API_KEY,
          Authorization: `Bearer ${SUPABASE_API_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ nome, telefone: `${ddd}${telefone}`, email }),
      });

      if (!response.ok) {
        const detail = await response.json().catch(() => ({}));
        if (response.status === 409 || detail.code === "23505") throw new Error("DUPLICATE");
        throw new Error("REQUEST_FAILED");
      }

      event.currentTarget.reset();
      setSubmitted(true);
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: "generate_lead", lead_source: "criacao-de-sites" });
      window.requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      setMessage(error instanceof Error && error.message === "DUPLICATE"
        ? "Este e-mail já está cadastrado."
        : "Não foi possível concluir o cadastro. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className={styles["form-card"]} aria-labelledby="lead-form-title">
      {submitted ? (
        <div className={styles["success-panel"]} ref={successRef} role="status" tabIndex={-1}>
          <span className={styles["success-icon"]} aria-hidden="true">✓</span>
          <p className={styles["form-tag"]}>CADASTRO RECEBIDO</p>
          <h2>Obrigado pelo seu interesse!</h2>
          <p>Recebemos seus dados. Em breve, entraremos em contato para conhecer seu negócio e conversar sobre o site ideal para você.</p>
          <button className={styles["restart-button"]} type="button" onClick={() => setSubmitted(false)}>Enviar outro contato</button>
        </div>
      ) : (
        <div>
          <div className={styles["form-heading"]}>
            <p className={styles["form-tag"]}>PROPOSTA SEM COMPROMISSO</p>
            <h2 id="lead-form-title">Pronto para valorizar seu negócio?</h2>
            <p>Deixe seus dados para entendermos sua necessidade e entrarmos em contato.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="nome">Nome completo</label>
              <input id="nome" name="nome" autoComplete="name" placeholder="Como podemos chamar você?" minLength={2} maxLength={100} required aria-invalid={Boolean(errors.nome)} aria-describedby="erro-nome" />
              <small className={styles["field-error"]} id="erro-nome">{errors.nome}</small>
            </div>

            <fieldset className={`${styles.field} ${styles["phone-fieldset"]}`}>
              <legend>Telefone</legend>
              <div className={styles["phone-grid"]}>
                <div><label className={styles["sr-only"]} htmlFor="ddd">DDD</label><input type="tel" id="ddd" name="ddd" inputMode="numeric" autoComplete="tel-area-code" placeholder="DDD" maxLength={2} required aria-invalid={Boolean(errors.telefone)} aria-describedby="erro-telefone" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 2); }} /></div>
                <div><label className={styles["sr-only"]} htmlFor="telefone">Número do telefone</label><input type="tel" id="telefone" name="telefone" inputMode="numeric" autoComplete="tel-local" placeholder="Número do telefone" maxLength={9} required aria-invalid={Boolean(errors.telefone)} aria-describedby="erro-telefone" onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "").slice(0, 9); }} /></div>
              </div>
              <small className={styles["field-error"]} id="erro-telefone">{errors.telefone}</small>
            </fieldset>

            <div className={styles.field}>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" autoComplete="email" placeholder="seuemail@email.com" maxLength={160} required aria-invalid={Boolean(errors.email)} aria-describedby="erro-email" />
              <small className={styles["field-error"]} id="erro-email">{errors.email}</small>
            </div>

            <button type="submit" disabled={submitting}>
              <span>{submitting ? "Enviando seus dados..." : "Quero receber uma proposta"}</span>
              <span aria-hidden="true">→</span>
            </button>
            <p className={styles["form-message"]} role="status" aria-live="polite">{message}</p>
            <p className={styles["privacy-note"]}><span aria-hidden="true">▣</span> Seus dados serão usados apenas para retornarmos seu contato. Consulte nossa <Link href="/privacidade">Política de Privacidade</Link>.</p>
          </form>

          <Link className={styles["portfolio-link"]} href="/projetos" target="_blank">Ver projetos realizados <span aria-hidden="true">↗</span></Link>
        </div>
      )}
    </section>
  );
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
