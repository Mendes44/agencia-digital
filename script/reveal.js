console.log("Reveal.js carregado!");

const reveals = document.querySelectorAll(".reveal");
console.log("Quantidade de .reveal encontrados:", reveals.length);

function handleReveal() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight * 0.85;

    if (rect < windowHeight) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);
