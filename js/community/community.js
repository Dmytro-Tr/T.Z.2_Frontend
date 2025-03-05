document.addEventListener('DOMContentLoaded', function () {
  const communitySlides = document.querySelectorAll('.community_slide');
  const communityHashButtons = document.querySelectorAll(
    '.community_hash-button'
  );

  // Function to show a specific slide
  function showCommunitySlide(slideNumber) {
    // Hide all slides
    communitySlides.forEach(slide => {
      slide.classList.remove('community_active');
    });

    // Show the selected slide
    document
      .getElementById(`community_slide${slideNumber}`)
      .classList.add('community_active');
  }

  // Add click event listeners to hash buttons
  communityHashButtons.forEach(button => {
    button.addEventListener('click', function () {
      const slideNumber = this.getAttribute('data-slide');
      showCommunitySlide(slideNumber);
    });
  });
});
