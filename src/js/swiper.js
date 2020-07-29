import { Swiper, Navigation, A11y } from 'swiper';

// ie11 polyfill
// https://github.com/nolimits4web/swiper/issues/3698
Number.isNaN =
  Number.isNaN ||
  function(value) {
    return typeof value === 'number' && isNaN(value);
  };

Swiper.use([Navigation, A11y]);

export default Swiper;
