document.addEventListener('DOMContentLoaded', () => {
  const carouselWrapperReviews = document.querySelector('.reviews_slider');
  const prevButtonReviews = document.querySelector(
    '.reviews_carousel-button.reviews_prev'
  );
  const nextButtonReviews = document.querySelector(
    '.reviews_carousel-button.reviews_next'
  );

  let currentIndexReviews = 0;

  const updateCarouselReviews = () => {
    const slides = carouselWrapperReviews.children;
    const totalSlides = slides.length;
    const visibleSlides = 3;

    // Ensure currentIndex stays within bounds
    if (currentIndexReviews < 0) {
      currentIndexReviews = totalSlides - visibleSlides;
    } else if (currentIndexReviews >= totalSlides - visibleSlides + 1) {
      currentIndexReviews = 0;
    }

    const offset = -(currentIndexReviews * (100 / visibleSlides));
    carouselWrapperReviews.style.transform = `translateX(${offset}%)`;
  };

  prevButtonReviews.addEventListener('click', () => {
    currentIndexReviews--;
    updateCarouselReviews();
  });

  nextButtonReviews.addEventListener('click', () => {
    currentIndexReviews++;
    updateCarouselReviews();
  });

  updateCarouselReviews();
});
