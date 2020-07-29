import Swiper from './swiper';

function initDispatchCarousel(elem) {
  if (!elem) return;

  const dispatchesSwiper = new Swiper(elem, {
    a11y: true,
    speed: 800,
    navigation: {
      nextEl: elem.querySelector('.js-next'),
      prevEl: elem.querySelector('.js-prev')
    },
    slideNextClass: 'dispatches-item-next',
    slidePrevClass: 'dispatches-item-prev',
    slideActiveClass: 'dispatches-item-active',
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      500: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 4
      }
    }
  });
}

var dispatches = document.querySelector('.js-dispatches');

initDispatchCarousel(dispatches);
