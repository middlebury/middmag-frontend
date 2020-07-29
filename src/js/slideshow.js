import Swiper from './swiper';

function makeSlideshow(elem) {
  const showMultiple = elem.classList.contains('slideshow--many');

  let config = {
    a11y: true,
    speed: 800,
    navigation: {
      nextEl: elem.querySelector('.slideshow__btn--next'),
      prevEl: elem.querySelector('.slideshow__btn--prev')
    },
    slideNextClass: 'slideshow__item--next',
    slidePrevClass: 'slideshow__item--prev',
    slideActiveClass: 'slideshow__item--active',
    grabCursor: true,
    slidesPerView: 1.2,
    centeredSlides: true
  };

  if (showMultiple) {
    config = Object.assign({}, config, {
      centeredSlides: false,
      breakpoints: {
        500: {
          slidesPerView: 2.2
        },
        700: {
          slidesPerView: 3.2
        },
        1000: {
          slidesPerView: 4.2
        },
        1440: {
          slidesPerView: 5.2
        },
        2000: {
          slidesPerView: 6.2
        }
      }
    });
  }

  const slideshow = new Swiper(elem, config);

  const imgs = elem.querySelectorAll('.slideshow__list img');

  [].forEach.call(imgs, img => {
    img.addEventListener('click', function() {
      if (img.parentNode.classList.contains('slideshow__item--next')) {
        slideshow.slideNext();
      }
      if (img.parentNode.classList.contains('slideshow__item--prev')) {
        slideshow.slidePrev();
      }
    });
  });
}

// initialize swiper galleries
var galleries = document.querySelectorAll('.js-slideshow');
[].forEach.call(galleries, makeSlideshow);
