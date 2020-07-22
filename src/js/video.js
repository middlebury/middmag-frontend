function createLoadableVideo(elem) {
  const link = elem.querySelector('a');

  function handleClick(event) {
    event.preventDefault();

    const iframe = document.createElement('iframe');
    iframe.src = link.href;
    iframe.allow = 'autoplay;fullscreen';
    iframe.allowFullscreen = true;

    // iframe.style.opacity = '0';

    elem.innerHTML = '';
    elem.appendChild(iframe);
    // elem.classList.add('video--loading');

    // iframe.onload = () => {
    //   elem.addEventListener('transitionend', () => {
    //     elem.classList.remove('video--loading');
    //     elem.classList.add('video--loaded');
    //     iframe.style.opacity = '1';
    //     console.log('done');
    //   });
    // };
  }

  link.addEventListener('click', handleClick);
}

const videos = document.querySelectorAll('.js-video');
[].forEach.call(videos, createLoadableVideo);
