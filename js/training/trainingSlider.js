let currentTrainingSlide = 0;
const trainingSlider = document.getElementById('trainingSlider');
const trainingSlides = trainingSlider.querySelectorAll('.training_slide');
const totalTrainingSlides = trainingSlides.length;

function updateTrainingNavButtons() {
  const prevButtons = trainingSlider.querySelectorAll(
    '.training_nav-button.prev'
  );
  const nextButtons = trainingSlider.querySelectorAll(
    '.training_nav-button.next'
  );
  const indicators = trainingSlider.querySelectorAll(
    '.training_slide-indicator'
  );

  prevButtons.forEach(btn => (btn.disabled = currentTrainingSlide === 0));
  nextButtons.forEach(
    btn => (btn.disabled = currentTrainingSlide === totalTrainingSlides - 1)
  );
  indicators.forEach((indicator, index) => {
    indicator.textContent = `${
      currentTrainingSlide + 1
    }/${totalTrainingSlides}`;
  });
}

function changeTrainingSlide(direction) {
  currentTrainingSlide += direction;
  if (currentTrainingSlide < 0) currentTrainingSlide = 0;
  if (currentTrainingSlide >= totalTrainingSlides)
    currentTrainingSlide = totalTrainingSlides - 1;
  trainingSlider.querySelector(
    '.training_slider'
  ).style.transform = `translateX(-${currentTrainingSlide * 25}%)`;
  updateTrainingNavButtons();
}

updateTrainingNavButtons();
