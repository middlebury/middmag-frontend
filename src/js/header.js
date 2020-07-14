import Headroom from 'headroom.js';

// init headroom
const siteHeader = document.querySelector('.site-header');
const headerHeight = siteHeader.offsetHeight;
document.body.style.paddingTop = `${headerHeight}px`;
const headroom = new Headroom(siteHeader, {
  offset: headerHeight
});
headroom.init();
