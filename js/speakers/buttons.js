let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideIndicator = document.getElementById('slideIndicator');

function updateNavButtons() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
  slideIndicator.textContent = `${currentSlide + 1}/${totalSlides}`;
}

function changeSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  document.querySelector('.slider').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

function changeText(slideIndex, buttonIndex) {
  const container = document.getElementById(
    `speakers_textContainer${slideIndex}`
  );
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
        desc: 'Creating responsive and dynamic websites using modern technologies.',
      },
      2: {
        title: 'Digital Marketing',
        desc: 'Promoting brands and products through various online channels.',
      },
      3: {
        title: 'SaaS Products',
        desc: 'Developing cloud-based software solutions for businesses.',
      },
      4: {
        title: 'Apps Development',
        desc: 'Building mobile applications for iOS and Android platforms.',
      },
      5: {
        title: 'SEO Services',
        desc: 'Optimizing websites to rank higher in search engine results.',
      },
      6: {
        title: 'Data Analysis',
        desc: 'Interpreting complex data sets to drive business decisions.',
      },
    },
    2: {
      1: {
        title: 'Social Media',
        desc: 'Managing brand presence across various social platforms.',
      },
      2: {
        title: 'Content Marketing',
        desc: 'Creating valuable content to attract and engage target audiences.',
      },
      3: {
        title: 'Email Campaigns',
        desc: 'Designing and executing effective email marketing strategies.',
      },
      4: {
        title: 'PPC Advertising',
        desc: 'Managing pay-per-click campaigns for maximum ROI.',
      },
      5: {
        title: 'Analytics',
        desc: 'Tracking and analyzing digital marketing performance metrics.',
      },
      6: {
        title: 'Brand Strategy',
        desc: 'Developing comprehensive strategies to build strong brand identities.',
      },
    },
    3: {
      1: {
        title: 'Social Media',
        desc: 'Managing brand presence across various social platforms.',
      },
      2: {
        title: 'Content Marketing',
        desc: 'Creating valuable content to attract and engage target audiences.',
      },
      3: {
        title: 'Email Campaigns',
        desc: 'Designing and executing effective email marketing strategies.',
      },
      4: {
        title: 'PPC Advertising',
        desc: 'Managing pay-per-click campaigns for maximum ROI.',
      },
      5: {
        title: 'Analytics',
        desc: 'Tracking and analyzing digital marketing performance metrics.',
      },
      6: {
        title: 'Brand Strategy',
        desc: 'Developing comprehensive strategies to build strong brand identities.',
      },
    },
  };

  heading.textContent = content[slideIndex][buttonIndex].title;
  description.textContent = content[slideIndex][buttonIndex].desc;
}
