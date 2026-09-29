// carousel.js

// ===============================
// CARROSSEL DE TEXTOS DA HERO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".hero-carousel-track");
  const dotsContainer = document.querySelector(".hero-carousel-dots");

  if (!track || !dotsContainer) return;

  const slides = Array.from(track.children);

  if (!slides.length) return;

  let index = 0;
  let intervalId;

  dotsContainer.innerHTML = "";

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("hero-dot");
    dot.setAttribute("type", "button");
    dot.setAttribute("aria-label", `Ir para destaque ${i + 1}`);

    if (i === 0) {
      dot.classList.add("active");
    }

    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function updateCarousel(newIndex) {
    index = newIndex;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));

    if (dots[index]) {
      dots[index].classList.add("active");
    }
  }

  function startAutoPlay() {
    intervalId = setInterval(() => {
      index = (index + 1) % slides.length;
      updateCarousel(index);
    }, 4500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(intervalId);
      updateCarousel(i);
      startAutoPlay();
    });
  });

  startAutoPlay();
});