let currentProgramSlide = 0;
const programSlider = document.getElementById('programSlider');
const programSlides = programSlider.querySelectorAll('.program_slide');
const totalProgramSlides = programSlides.length;

function updateProgramNavButtons() {
  const prevButtons = programSlider.querySelectorAll(
    '.program_nav_button.prev'
  );
  const nextButtons = programSlider.querySelectorAll(
    '.program_nav_button.next'
  );
  const indicators = programSlider.querySelectorAll('.program_slide_indicator');

  prevButtons.forEach(btn => (btn.disabled = currentProgramSlide === 0));
  nextButtons.forEach(
    btn => (btn.disabled = currentProgramSlide === totalProgramSlides - 1)
  );
  indicators.forEach((indicator, index) => {
    indicator.textContent = `${currentProgramSlide + 1}`;
  });
}

function changeProgramSlide(direction) {
  currentProgramSlide += direction;
  if (currentProgramSlide < 0) currentProgramSlide = 0;
  if (currentProgramSlide >= totalProgramSlides)
    currentProgramSlide = totalProgramSlides - 1;
  programSlider.querySelector(
    '.program_slider'
  ).style.transform = `translateX(-${
    currentProgramSlide * 12.5 //Треба змінити
  }%)`;
  updateProgramNavButtons();
}

function changeProgramText(slideIndex, buttonIndex) {
  const containerProgram = document.getElementById(
    `textProgramContainer${slideIndex}`
  );
  const headingProgram = document.getElementById(
    `program_textHeading${slideIndex}`
  );
  const descriptionProgram = document.getElementById(
    `program_textDescription${slideIndex}`
  );
  const buttonsProgram = containerProgram.parentElement.querySelectorAll(
    '.program_buttons_btn'
  );

  buttonsProgram.forEach(btn => btn.classList.remove('active'));
  buttonsProgram[buttonIndex - 1].classList.add('active');

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
    4: {
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
    5: {
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
    6: {
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
    7: {
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
    8: {
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

  headingProgram.textContent = content[slideIndex][buttonIndex].title;
  descriptionProgram.textContent = content[slideIndex][buttonIndex].desc;
}

updateProgramNavButtons();
