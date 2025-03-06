document.addEventListener('DOMContentLoaded', () => {
  const tuitionWrappers = document.querySelectorAll('.tuition_content_wrapper');
  const selectTuitionButtons = document.querySelectorAll('.tuition_button');
  const headersTuition = document.querySelectorAll('.tuition_content_h5');
  const tuitionContentList = document.querySelectorAll('.tuition_content_list');
  const tuitionColumnOnePrice = document.querySelectorAll(
    '.tuition_column_one_price'
  );
  const tuitionTwoAsidePriceText = document.querySelectorAll(
    '.tuition_two_aside_price_text'
  );
  const tuitionContentSubtitle = document.querySelectorAll(
    '.tuition_content_subtitle'
  );
  const tuitionAsideText = document.querySelectorAll('.tuition_aside_text');
  const tuitionAsideText2 = document.querySelectorAll('.tuition_aside_text2');
  const tuitionTapt = document.querySelectorAll(
    '.tuition_two_aside_price_text2'
  );

  // Function to update classes
  const updateClasses = index => {
    tuitionWrappers.forEach((wrapper, i) => {
      if (i === index) {
        wrapper.classList.add('active');
        headersTuition[i].classList.add('active-header');
        tuitionContentList[i].classList.add('active-cit');
        tuitionColumnOnePrice[i].classList.add('active-cop');
        tuitionTwoAsidePriceText[i].classList.add('active-tapt');
        tuitionContentSubtitle[i].classList.add('active-cs');
        tuitionAsideText[i].classList.add('active-at');
        tuitionAsideText2[i].classList.add('active-at2');
        tuitionTapt[i].classList.add('active-tapt');
      } else {
        wrapper.classList.remove('active');
        headersTuition[i].classList.remove('active-header');
        tuitionContentList[i].classList.remove('active-cit');
        tuitionColumnOnePrice[i].classList.remove('active-cop');
        tuitionTwoAsidePriceText[i].classList.remove('active-tapt');
        tuitionContentSubtitle[i].classList.remove('active-cs');
        tuitionAsideText[i].classList.remove('active-at');
        tuitionAsideText2[i].classList.remove('active-at2');
        tuitionTapt[i].classList.remove('active-tapt');
      }
    });
  };

  // Set initial active state
  updateClasses(1);

  // Add click event listener to each select button
  selectTuitionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      updateClasses(index);
    });
  });
});
