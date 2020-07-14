import Swiper from 'swiper';

function makeSlideshow(elem) {
  var showMultiple = elem.classList.contains('slideshow--many');

  var config = {
    speed: 800,
    navigation: {
      nextEl: elem.querySelector('.slideshow-button-next'),
      prevEl: elem.querySelector('.slideshow-button-prev')
    },
    slideNextClass: 'slideshow-item-next',
    slidePrevClass: 'slideshow-item-prev',
    slideActiveClass: 'slideshow-item-active',
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

  var slideshow = new Swiper(elem, config);

  const imgs = elem.querySelectorAll('.slideshow-list img');

  [].forEach.call(imgs, (img) => {
    img.addEventListener('click', function () {
      if (img.parentNode.classList.contains('slideshow-item-next')) {
        slideshow.slideNext();
      }
      if (img.parentNode.classList.contains('slideshow-item-prev')) {
        slideshow.slidePrev();
      }
    });
  });
}

// initialize swiper galleries
var galleries = document.querySelectorAll('.js-slideshow');
[].forEach.call(galleries, makeSlideshow);
