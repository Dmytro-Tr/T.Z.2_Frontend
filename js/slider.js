let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateNavButtons() {
  const prevButtons = document.querySelectorAll('.nav-button.prev');
  const nextButtons = document.querySelectorAll('.nav-button.next');
  const indicators = document.querySelectorAll('.slide-indicator');

  prevButtons.forEach(btn => (btn.disabled = currentSlide === 0));
  nextButtons.forEach(btn => (btn.disabled = currentSlide === totalSlides - 1));
  indicators.forEach((indicator, index) => {
    indicator.textContent = `${index + 1}/${totalSlides}`;
  });
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
  document.querySelector('.slider').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
  updateNavButtons();
}

function changeText(slideIndex, buttonIndex) {
  const container = document.getElementById(`textContainer${slideIndex}`);
  const heading = document.getElementById(`speakers_textHeading${slideIndex}`);
  const description = document.getElementById(
    `speakers_textDescription${slideIndex}`
  );
  const buttons = container.parentElement.querySelectorAll(
    '.speakers_buttons_btn'
  );

  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[buttonIndex - 1].classList.add('active');

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

  heading.textContent = content[slideIndex][buttonIndex].title;
  description.textContent = content[slideIndex][buttonIndex].desc;
}

updateNavButtons();
