var slideIndex = [];

function showSlides(sliderIndex, slideOffset) {
  var slider = document.querySelectorAll('.slider')[sliderIndex];
  var slides = slider.querySelectorAll('.slides img');

  // Initialize slideIndex for the current slider if not defined
  if (!slideIndex[sliderIndex]) {
    slideIndex[sliderIndex] = 0;
  }
  
  // Update slideIndex for the active slider
  slideIndex[sliderIndex] = (slideIndex[sliderIndex] + slideOffset + slides.length) % slides.length;
  
  // Hide all slides in the active slider
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  // Show the current slide
  slides[slideIndex[sliderIndex]].style.display = 'block';
}

function changeSlide(sliderIndex, slideOffset) {
  showSlides(sliderIndex, slideOffset);
}

// Show initial slides
var sliders = document.querySelectorAll('.slider');
for (var i = 0; i < sliders.length; i++) {
  showSlides(i, 0);
}

