const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
let activeSlide = 0;

const slideShow = (activeSlideNumber) => {
  for (const sliderItem of sliderItems) {
    sliderItem.classList.remove('slider__item_active');
  }

  for (const dot of dots) {
    dot.classList.remove('slider__dot_active');
  }

  sliderItems[activeSlideNumber].classList.add('slider__item_active');
  dots[activeSlideNumber].classList.add('slider__dot_active');
};

slideShow(activeSlide);

prev.addEventListener('click', function () {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = dots.length - 1;
  }
  slideShow(activeSlide);
});

next.addEventListener('click', function () {
  activeSlide++;
  if (activeSlide >= dots.length) {
    activeSlide = 0;
  }
  slideShow(activeSlide);
});

Array.from(dots).forEach((elem, index) => {
  elem.addEventListener('click', function () {
    activeSlide = index;
    slideShow(activeSlide);
  });
});
