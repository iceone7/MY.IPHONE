document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".carousel");

  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoplay() {
    intervalId = setInterval(nextSlide, 2400);
  }

  function stopAutoplay() {
    clearInterval(intervalId);
  }

  showSlide(currentIndex);

  startAutoplay();

  carouselContainer.addEventListener("mouseover", stopAutoplay);

  carouselContainer.addEventListener("mouseout", startAutoplay);
});
