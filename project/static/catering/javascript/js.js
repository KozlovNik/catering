let humburgerMenu = document.getElementById('toggle');
// console.log(humburgerMenu);

let h = document.getElementsByClassName('main-nav__list');

humburgerMenu.addEventListener('click', function (event) {
    if (h[0].style.display === 'block') {
        h[0].style.display = 'none';
    }
    else {
        h[0].style.display = 'block';
        h[0].style.zIndex = '10';
    }
});


$('.main-nav__link').on('click', function(){
    $('.main-nav__link').removeClass('main-nav__link--pressed');
    $(this).addClass('main-nav__link--pressed');
});



const slides = document.querySelectorAll('.slider__content');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.slider__content--current');
  // Remove current class
  current.classList.remove('slider__content--current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('slider__content--current');
  } else {
    // Add current to start
    slides[0].classList.add('slider__content--current');
  }
  setTimeout(() => current.classList.remove('slider__content--current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.slider__content--current');
  // Remove current class
  current.classList.remove('slider__content--current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('slider__content--current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('slider__content--current');
  }
  setTimeout(() => current.classList.remove('slider__content--current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
