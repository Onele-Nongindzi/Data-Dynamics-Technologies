document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel if it exists
  const carouselElement = document.getElementById('testimonialCarousel');
  if (carouselElement) {
    new bootstrap.Carousel(carouselElement, {
      interval: 5000,
      pause: 'hover',
      wrap: true
    });
  }
});
