document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".hero-carousel-track");
  const slides = document.querySelectorAll(".hero-slide");
  const dotsContainer = document.querySelector(".hero-carousel-dots");
  let index = 0;

  // Criar as bolinhas dinamicamente
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("hero-dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
      resetInterval();
    });

    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".hero-dot");

  function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
  }

  let interval = setInterval(nextSlide, 4500);

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 4500);
  }
});
