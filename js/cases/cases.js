let currentCasesSlide = 0;
const casesSlider = document.getElementById('casesSlider');
const casesSlides = casesSlider.querySelectorAll('.cases_slide');
const totalCasesSlides = casesSlides.length;

function updateCasesNavButtons() {
  const prevButtons = casesSlider.querySelectorAll('.cases_nav-button.prev');
  const nextButtons = casesSlider.querySelectorAll('.cases_nav-button.next');
  const indicators = casesSlider.querySelectorAll('.cases_slide-indicator');

  prevButtons.forEach(btn => (btn.disabled = currentCasesSlide === 0));
  nextButtons.forEach(
    btn => (btn.disabled = currentCasesSlide === totalCasesSlides - 1)
  );
  indicators.forEach((indicator, index) => {
    indicator.textContent = `${currentCasesSlide + 1}/${totalCasesSlides}`;
  });
}

function changeCasesSlide(direction) {
  currentCasesSlide += direction;
  if (currentCasesSlide < 0) currentCasesSlide = 0;
  if (currentCasesSlide >= totalCasesSlides)
    currentCasesSlide = totalCasesSlides - 1;
  casesSlider.querySelector('.cases_slider').style.transform = `translateX(-${
    currentCasesSlide * 8.333 //Треба змінити
  }%)`;
  updateCasesNavButtons();
}

function changeCasesText(slideIndex, buttonIndex) {
  const containerCases = document.getElementById(
    `textCasesContainer${slideIndex}`
  );
  const headingCases = document.getElementById(
    `cases_textHeading${slideIndex}`
  );
  const descriptionCases = document.getElementById(
    `cases_textDescription${slideIndex}`
  );
  const buttonsCases =
    containerCases.parentElement.querySelectorAll('.cases_buttons_btn');

  buttonsCases.forEach(btn => btn.classList.remove('active'));
  buttonsCases[buttonIndex - 1].classList.add('active');

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
    9: {
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
    10: {
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
    11: {
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
    12: {
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

  headingCases.textContent = content[slideIndex][buttonIndex].title;
  descriptionCases.textContent = content[slideIndex][buttonIndex].desc;
}

updateCasesNavButtons();
