function createLoadableVideo(elem) {
  const link = elem.querySelector('a');

  link.setAttribute('role', 'button');

  function showVideo() {
    const iframe = document.createElement('iframe');
    iframe.src = link.href;
    iframe.allow = 'autoplay;fullscreen';
    iframe.allowFullscreen = true;

    elem.innerHTML = '';
    elem.appendChild(iframe);
  }

  function handleClick(event) {
    event.preventDefault();
    showVideo();
  }

  function handleKeyPress(event) {
    if (event.code === 'Space') {
      event.preventDefault();
      showVideo();
    }
  }

  link.addEventListener('click', handleClick);
  link.addEventListener('keydown', handleKeyPress);
}

const videos = document.querySelectorAll('.js-video');
[].forEach.call(videos, createLoadableVideo);
