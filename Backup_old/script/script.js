/**
 * Dev Mendes - interações compartilhadas entre a landing page e o portfólio.
 * O arquivo não depende de bibliotecas externas para preservar o desempenho.
 */

const WHATSAPP_NUMBER = "5531987340462";

// Elementos globais usados pelo menu e pelo formulário modal.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");
const modal = document.getElementById("contact-modal");
const firstField = document.getElementById("lead-name");
const leadForm = document.getElementById("lead-form");

let lastFocusedElement = null;

// Mantém o ano do rodapé atualizado sem exigir manutenção manual.
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

/** Registra uma intenção de lead quando Google Tag ou GTM estiverem instalados. */
function trackLead(method) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", lead_method: method });

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { method });
  }
}

// ------------------------------
// Menu sanduíche
// ------------------------------

function closeMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav?.classList.toggle("is-open") || false;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu após uma escolha para liberar novamente a área de conteúdo.
mainNav?.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  const clickedOutsideMenu =
    mainNav?.classList.contains("is-open") &&
    !mainNav.contains(event.target) &&
    !menuToggle?.contains(event.target);

  if (clickedOutsideMenu) closeMenu();
});

// ------------------------------
// Modal de captação de leads
// ------------------------------

function openContactModal() {
  if (!modal) return;

  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => firstField?.focus(), 20);
}

function closeContactModal() {
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", openContactModal);
});

document.querySelectorAll("[data-close-contact]").forEach((button) => {
  button.addEventListener("click", closeContactModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  closeMenu();
  if (modal && !modal.hidden) closeContactModal();
});

// ------------------------------
// Conversões e envio para WhatsApp
// ------------------------------

// Mede também os CTAs que levam diretamente ao WhatsApp.
document.querySelectorAll(".whatsapp-link, .model-whatsapp").forEach((link) => {
  link.addEventListener("click", () => trackLead("WhatsApp direto"));
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("lead-name")?.value.trim();
  const contact = document.getElementById("lead-contact")?.value.trim();
  const business = document.getElementById("lead-business")?.value.trim();
  const service = document.getElementById("lead-service")?.value;
  const message = document.getElementById("lead-message")?.value.trim();

  // Monta uma mensagem legível para reduzir o tempo do primeiro atendimento.
  const text = [
    "Olá! Vim pelo site da Dev Mendes e quero uma proposta.",
    "",
    `Nome: ${name}`,
    `Contato: ${contact}`,
    `Negócio: ${business}`,
    `Serviço: ${service}`,
    message ? `Objetivo: ${message}` : ""
  ]
    .filter(Boolean)
    .join("\n");

  trackLead("Formulário para WhatsApp");
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener"
  );
  closeContactModal();
});
