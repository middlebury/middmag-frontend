import 'lazysizes';

import objectFitImages from 'object-fit-images';

import './object-assign';
import './toggler';
import './header';
import './slideshow';
// import './comments';
import './video';
import './video-swapper';
import './dispatches';

// Naively detects touch device and adds body class
// so we can add inertia scrolling on overflow areas and prevent scrollbar from showing up by default
// due to using overflow: scroll (required by -webkit-overflow-scrolling: touch;)
const isTouchDevice = 'ontouchstart' in document.documentElement;
if (isTouchDevice) {
  document.documentElement.classList.add('touch');
}

// HACK: Closes the open mobile nav when Recent Stories link is clicked/tapped.
// We should extend toggler functionality to handle this use case instead of hacking it in.
const jumplink = document.querySelector('.js-recent');

jumplink.addEventListener('click', e => {
  document.querySelector('.header__btn').click();
});

objectFitImages();
