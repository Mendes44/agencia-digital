// script.js

// ===============================
// CONFIGURAÇÕES GERAIS
// ===============================
const WHATSAPP_NUMERO = "5531987340462";

const MARKET_CONFIG = {
  br: {
    label: "Brasil",
    greeting: "Olá! Vim pelo site da Dev Mendes e quero um orçamento.",
    localeKeywords: ["pt-BR", "BR"]
  },
  pt: {
    label: "Portugal",
    greeting: "Olá! Vim pelo site da Dev Mendes e quero um orçamento para Portugal.",
    localeKeywords: ["pt-PT", "PT"]
  }
};

// ===============================
// UTILITÁRIOS
// ===============================
function getCurrentMarket() {
  return document.body.dataset.market || "br";
}

function getMarketLabel() {
  const market = getCurrentMarket();
  return MARKET_CONFIG[market]?.label || "Brasil";
}

function encodeText(text) {
  return encodeURIComponent(text);
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeText(message)}`;
  window.open(url, "_blank");
}

// ===============================
// DETECTAR BRASIL / PORTUGAL
// ===============================
function detectMarket() {
  const savedMarket = localStorage.getItem("devmendes-market");

  if (savedMarket === "br" || savedMarket === "pt") {
    return savedMarket;
  }

  const language = navigator.language || "";
  const languages = navigator.languages || [];
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

  const userLocales = [language, ...languages].join(" ").toLowerCase();

  if (
    userLocales.includes("pt-pt") ||
    timezone.toLowerCase().includes("lisbon") ||
    timezone.toLowerCase().includes("madeira")
  ) {
    return "pt";
  }

  return "br";
}

function setMarket(market) {
  const selectedMarket = market === "pt" ? "pt" : "br";

  document.body.dataset.market = selectedMarket;
  localStorage.setItem("devmendes-market", selectedMarket);

  const label = document.getElementById("market-label");
  if (label) {
    label.textContent = MARKET_CONFIG[selectedMarket].label;
  }

  document.querySelectorAll(".market-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.marketOption === selectedMarket);
  });

  document.querySelectorAll(".js-price").forEach((element) => {
    const newPrice = selectedMarket === "pt"
      ? element.dataset.pricePt
      : element.dataset.priceBr;

    if (newPrice) {
      element.textContent = newPrice;
    }
  });
}

// ===============================
// SCROLL PARA CONTATO
// ===============================
function setupScrollButtons() {
  document.querySelectorAll(".js-scroll-agendar").forEach((btn) => {
    btn.addEventListener("click", () => {
      const section = document.querySelector("#agendamento");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===============================
// WHATSAPP – FORMULÁRIO
// ===============================
function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome")?.value.trim() || "";
  const negocio = document.getElementById("negocio")?.value.trim() || "";
  const objetivo = document.getElementById("objetivo")?.value.trim() || "";
  const interesse = document.getElementById("interesse")?.value.trim() || "";
  const mensagem = document.getElementById("mensagem")?.value.trim() || "";

  const market = getCurrentMarket();
  const marketLabel = getMarketLabel();

  let texto = MARKET_CONFIG[market].greeting + "\n\n";
  texto += `Mercado selecionado: ${marketLabel}\n`;

  if (nome) texto += `Nome: ${nome}\n`;
  if (negocio) texto += `Negócio: ${negocio}\n`;
  if (objetivo) texto += `Objetivo do site: ${objetivo}\n`;
  if (interesse) texto += `Interesse: ${interesse}\n`;
  if (mensagem) texto += `\nMensagem:\n${mensagem}`;

  return texto;
}

function enviarWhatsAppFormulario() {
  const texto = montarMensagemWhatsApp();
  openWhatsApp(texto);
}

// Deixa a função disponível para o onsubmit do HTML
window.enviarWhatsAppFormulario = enviarWhatsAppFormulario;

// ===============================
// WHATSAPP – BOTÕES DE PLANO
// ===============================
function setupPlanButtons() {
  document.querySelectorAll(".js-plan-whatsapp").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan || "um site";
      const marketLabel = getMarketLabel();

      const message =
        `Olá! Vim pelo site da Dev Mendes.\n\n` +
        `Tenho interesse no plano: ${plan}.\n` +
        `Mercado: ${marketLabel}.\n\n` +
        `Gostaria de receber uma proposta.`;

      openWhatsApp(message);
    });
  });
}

// ===============================
// WHATSAPP – BOTÃO FLUTUANTE
// ===============================
function setupFloatingWhatsApp() {
  const button = document.querySelector(".js-whatsapp");

  if (!button) return;

  button.addEventListener("click", () => {
    const marketLabel = getMarketLabel();

    const message =
      `Olá! Vim pelo site da Dev Mendes.\n\n` +
      `Quero conversar sobre a criação de um site ou landing page.\n` +
      `Mercado: ${marketLabel}.`;

    openWhatsApp(message);
  });
}

// ===============================
// SELETOR DE MERCADO
// ===============================
function setupMarketButtons() {
  document.querySelectorAll(".market-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const market = button.dataset.marketOption;
      setMarket(market);
    });
  });
}

// ===============================
// INICIALIZAÇÃO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  setMarket(detectMarket());
  setupMarketButtons();
  setupScrollButtons();
  setupPlanButtons();
  setupFloatingWhatsApp();
});