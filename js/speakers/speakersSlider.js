let currentSpeakersSlide = 0;
const speakersSlider = document.getElementById('speakersSlider');
const speakersSlides = speakersSlider.querySelectorAll('.speakers_slide');
const totalSpeakersSlides = speakersSlides.length;

function updateSpeakersNavButtons() {
  const prevButtons = speakersSlider.querySelectorAll(
    '.speakers_nav-button.prev'
  );
  const nextButtons = speakersSlider.querySelectorAll(
    '.speakers_nav-button.next'
  );
  const indicators = speakersSlider.querySelectorAll(
    '.speakers_slide-indicator'
  );

  prevButtons.forEach(btn => (btn.disabled = currentSpeakersSlide === 0));
  nextButtons.forEach(
    btn => (btn.disabled = currentSpeakersSlide === totalSpeakersSlides - 1)
  );
  indicators.forEach((indicator, index) => {
    indicator.textContent = `${
      currentSpeakersSlide + 1
    }/${totalSpeakersSlides}`;
  });
}

function changeSpeakersSlide(direction) {
  currentSpeakersSlide += direction;
  if (currentSpeakersSlide < 0) currentSpeakersSlide = 0;
  if (currentSpeakersSlide >= totalSpeakersSlides)
    currentSpeakersSlide = totalSpeakersSlides - 1;
  speakersSlider.querySelector(
    '.speakers_slider'
  ).style.transform = `translateX(-${currentSpeakersSlide * 33.333}%)`;
  updateSpeakersNavButtons();
}

function changeSpeakersText(slideIndex, buttonIndex) {
  const containerSpeakers = document.getElementById(
    `textSpeakersContainer${slideIndex}`
  );
  const headingSpeakers = document.getElementById(
    `speakers_textHeading${slideIndex}`
  );
  const descriptionSpeakers = document.getElementById(
    `speakers_textDescription${slideIndex}`
  );
  const buttonsSpeakers = containerSpeakers.parentElement.querySelectorAll(
    '.speakers_buttons_btn'
  );

  buttonsSpeakers.forEach(btn => btn.classList.remove('active'));
  buttonsSpeakers[buttonIndex - 1].classList.add('active');

  const content = {
    1: {
      1: {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      2: {
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      3: {
        title: 'SaaS Products',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      4: {
        title: 'Apps Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      5: {
        title: 'SEO Services',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      6: {
        title: 'Data Analysis',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
    },
    2: {
      1: {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      2: {
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      3: {
        title: 'SaaS Products',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      4: {
        title: 'Apps Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      5: {
        title: 'SEO Services',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      6: {
        title: 'Data Analysis',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
    },
    3: {
      1: {
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      2: {
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      3: {
        title: 'SaaS Products',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      4: {
        title: 'Apps Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      5: {
        title: 'SEO Services',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
      6: {
        title: 'Data Analysis',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.',
      },
    },
  };

  headingSpeakers.textContent = content[slideIndex][buttonIndex].title;
  descriptionSpeakers.textContent = content[slideIndex][buttonIndex].desc;
}

updateSpeakersNavButtons();
