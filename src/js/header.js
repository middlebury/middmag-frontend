import Headroom from 'headroom.js';

// init headroom
const siteHeader = document.querySelector('.js-header');

if (siteHeader) {
  const headerHeight = siteHeader.offsetHeight;

  document
    .querySelector(':root')
    .style.setProperty('--header-height', headerHeight + 'px');

  const headroom = new Headroom(siteHeader, {
    offset: headerHeight
  });
  headroom.init();
}
