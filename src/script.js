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
  // Add shadow to header on scroll
  window.addEventListener('scroll', () => {
    document.querySelector('.sticky-header').classList.toggle('scrolled', window.scrollY > 10);
});
});
