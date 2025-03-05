document.addEventListener('DOMContentLoaded', function () {
  const careerSlides = document.querySelectorAll('.career_slide');
  const careerHashButtons = document.querySelectorAll('.career_hash-button');

  // Function to show a specific slide
  function showCareerSlide(slideNumber) {
    // Hide all slides
    careerSlides.forEach(slide => {
      slide.classList.remove('career_active');
    });

    // Show the selected slide
    document
      .getElementById(`career_slide${slideNumber}`)
      .classList.add('career_active');
  }

  // Add click event listeners to hash buttons
  careerHashButtons.forEach(button => {
    button.addEventListener('click', function () {
      const slideNumber = this.getAttribute('data-slide');
      showCareerSlide(slideNumber);
    });
  });
});
