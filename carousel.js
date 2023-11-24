let currentIndex = 0;

function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    index = (index + totalItems) % totalItems; // Ensure the index is within bounds

    currentIndex = index;
    const translateValue = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Automatically rotate through the featured products every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);
