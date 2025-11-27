// ===============================
// ANIMAÇÃO REVEAL AO ROLAR A TELA
// ===============================

function revelarElementos() {
  const elementos = document.querySelectorAll(".reveal");

  elementos.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    const tamanhoTela = window.innerHeight * 0.85;

    if (posicao < tamanhoTela) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revelarElementos);
window.addEventListener("load", revelarElementos);
