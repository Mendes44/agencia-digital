document.addEventListener("DOMContentLoaded", function(){
  const slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  function showNext() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNext, 3500); // troca a cada 3.5s
});
