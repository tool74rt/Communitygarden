const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;
const slideInterval = 5000; // Time in milliseconds between slides

function showHeroSlide(index) {
    heroSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function setElementStyles(element, styles) {
    return new Promise((resolve) => {
        Object.keys(styles).forEach((key) => {
            element.style[key] = styles[key];
        });
        resolve();
    });
}


function nextHeroSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showHeroSlide(currentSlide);
}

// Initialize the slideshow
showHeroSlide(currentSlide);
setInterval(nextHeroSlide, slideInterval);





document.addEventListener('DOMContentLoaded', function() {
      // Your code to increase slideshow duration goes here
      async function increaseSlideshowDuration() {
        const slides = document.querySelectorAll('.hero-slide.fade');
        for (const slide of slides) {
          await setElementStyles(slide, {
            animationDuration: '15s',
            animationDelay: '10s',
          });
        }
      }

      increaseSlideshowDuration();
    });
