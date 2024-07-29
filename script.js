// script.js

let currentIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const thumbnails = document.querySelectorAll('.thumbnails img');
const body = document.body;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentIndex) {
            slide.classList.add('active');
        }
    });
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

    // Update background image with a fade effect
    const currentSlideImage = slides[currentIndex].querySelector('img').src;
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentSlideImage})`;
}

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showSlide(index);
    });
});

// Initial display setup
showSlide(currentIndex);

// Auto-slide functionality (optional)
setInterval(() => {
    showSlide(currentIndex + 1);
}, 7000); // Change slide every 3 seconds
