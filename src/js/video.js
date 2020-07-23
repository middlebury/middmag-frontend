function createLoadableVideo(elem) {
  const link = elem.querySelector('a');

  function handleClick(event) {
    event.preventDefault();

    const iframe = document.createElement('iframe');
    iframe.src = link.href;
    iframe.allow = 'autoplay;fullscreen';
    iframe.allowFullscreen = true;

    elem.innerHTML = '';
    elem.appendChild(iframe);
  }

  link.addEventListener('click', handleClick);
}

const videos = document.querySelectorAll('.js-video');
[].forEach.call(videos, createLoadableVideo);
