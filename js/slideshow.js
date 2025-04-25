const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const slideInterval = 7000; // 7 seconds between slides

function showHeroSlide(index) {
  heroSlides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextHeroSlide() {
  currentSlide = (currentSlide + 1) % heroSlides.length;
  showHeroSlide(currentSlide);
}

// Start on first slide
document.addEventListener('DOMContentLoaded', () => {
  showHeroSlide(currentSlide);
  setInterval(nextHeroSlide, slideInterval);
});
