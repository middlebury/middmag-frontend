function createVideoFromImg(img) {
  const video = document.createElement('video');
  const source = document.createElement('source');

  const videoSrc = img.getAttribute('data-video');

  if (videoSrc && videoSrc.indexOf('mp4') !== -1) {
    return;
  }

  // try getting the lazy data-src first since img.src sould be placeholder svg
  video.poster = img.getAttribute('data-src') || img.src;
  video.loop = true;
  video.muted = true;
  video.autoplay = true;
  video.preload = 'auto';

  source.src = videoSrc;
  source.type = 'video/mp4';

  video.appendChild(source);

  // set the parent container of the img element so we can change its children
  const container = img.parentElement;

  // remove img and noscript
  container.removeChild(img);

  // insert the new video element into the original picture element's parent element
  container.appendChild(video);
}

const img = document.querySelector('.js-video-bg');

if (img && window.matchMedia('(min-width: 768px)').matches) {
  createVideoFromImg(img);
}
