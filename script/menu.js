// menu.js

// ===============================
// MENU MOBILE
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) return;

  const menuLinks = mobileMenu.querySelectorAll("a");

  function closeMenu() {
    toggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    toggle.setAttribute("aria-label", "Abrir menu");
  }

  function openMenu() {
    toggle.classList.add("active");
    mobileMenu.classList.add("open");
    toggle.setAttribute("aria-label", "Fechar menu");
  }

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = toggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});