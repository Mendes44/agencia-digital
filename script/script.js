document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        method: "WhatsApp",
        event_callback: () => {}
      });
    }
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.getElementById("main-nav");

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

mainNav?.querySelectorAll("a, button").forEach((item) => {
  item.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!mainNav?.classList.contains("is-open")) return;
  if (!mainNav.contains(event.target) && !menuToggle?.contains(event.target)) closeMenu();
});

const modal = document.getElementById("contact-modal");
const firstField = document.getElementById("lead-name");
let lastFocusedElement = null;

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
  if (event.key === "Escape") closeMenu();
  if (event.key === "Escape" && modal && !modal.hidden) closeContactModal();
});

document.getElementById("lead-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("lead-name")?.value.trim();
  const contact = document.getElementById("lead-contact")?.value.trim();
  const business = document.getElementById("lead-business")?.value.trim();
  const service = document.getElementById("lead-service")?.value;
  const message = document.getElementById("lead-message")?.value.trim();

  const text = [
    "Olá! Vim pelo site da Dev Mendes e quero uma proposta.",
    "",
    `Nome: ${name}`,
    `Contato: ${contact}`,
    `Negócio: ${business}`,
    `Serviço: ${service}`,
    message ? `Objetivo: ${message}` : ""
  ].filter(Boolean).join("\n");

  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { method: "Formulário para WhatsApp" });
  }

  window.open(`https://wa.me/61450764125?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  closeContactModal();
});
