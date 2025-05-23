const slides = document.querySelectorAll('.fade-slide');
let currentSlide = 0;
const totalSlides = slides.length;
const interval = 8000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
  });
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, interval);
