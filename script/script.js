// MENU MOBILE
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.getElementById("menu-links");

menuToggle.addEventListener("click", () => {
  menuLinks.classList.toggle("open");
});

// BOTÕES "AGENDAR"
document.querySelectorAll(".js-scroll-agendar").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector("#agendamento").scrollIntoView({ behavior: "smooth" });
  });
});

// NÚMERO DO WHATSAPP
const WHATSAPP_NUMERO = "5511999999999"; // <-- coloque o seu número aqui!

function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome")?.value || "";
  const negocio = document.getElementById("negocio")?.value || "";
  const data = document.getElementById("data")?.value || "";
  const hora = document.getElementById("hora")?.value || "";
  const mensagem = document.getElementById("mensagem")?.value || "";

  let texto = "Olá! Vim do site da Dev Mendes.%0A%0A";

  if (nome) texto += "Nome: " + nome + "%0A";
  if (negocio) texto += "Negócio: " + negocio + "%0A";
  if (data) texto += "Data desejada: " + data + "%0A";
  if (hora) texto += "Horário desejado: " + hora + "%0A";
  if (mensagem) texto += "%0AMensagem:%0A" + encodeURIComponent(mensagem);

  return texto;
}

function enviarWhatsAppFormulario() {
  const texto = montarMensagemWhatsApp();
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${texto}`;
  window.open(url, "_blank");
}

// Botão flutuante
document.querySelector(".js-whatsapp").addEventListener("click", () => {
  window.open(
    `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Quero conversar sobre um site.`,
    "_blank"
  );
});
