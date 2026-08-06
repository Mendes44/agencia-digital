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
