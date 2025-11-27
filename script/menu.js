// ===============================
// MENU MOBILE – Controle do Toggle
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = mobileMenu.querySelectorAll("a");

  // Abre/Fecha menu ao clicar no botão
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  // Fecha menu ao clicar em um link
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });

  // Fecha se clicar fora do menu
  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      toggle.classList.remove("active");
      mobileMenu.classList.remove("open");
    }
  });
});
