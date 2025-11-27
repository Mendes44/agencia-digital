// ===============================
// CARROSSEL DE TEXTOS DA HERO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".hero-carousel-track");
  const slides = Array.from(track.children);
  const dotsContainer = document.querySelector(".hero-carousel-dots");

  let index = 0;

  // Criar bolinhas
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("hero-dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateCarousel(newIndex) {
    index = newIndex;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  // Troca automática
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel(index);
  }, 4500);

  // Clique nos dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      updateCarousel(i);
    });
  });
});
