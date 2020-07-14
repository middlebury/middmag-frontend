function createVideoFromImg(img) {
  // init a config var which will be populated by JSON.parse
  var config = {};

  // wrapped in try/catch because this can throw an error if string is invalid format
  try {
    var dataConfig = img.getAttribute('data-video-config');
    config = JSON.parse(dataConfig);
  } catch (e) {
    console.log(e);
    // do nothing if config fails to parse
    return;
  }

  // set the parent container of the picture element so we can change its children
  var container = img.parentElement;

  var video = document.createElement('video');
  var source = document.createElement('source');

  source.src = img.getAttribute('data-video-mp4');
  source.type = 'video/mp4';

  video.appendChild(source);

  for (var key in config) {
    video[key] = config[key];
  }

  // remove the picture element
  container.removeChild(img);

  // insert the new video element into the original picture element's parent element
  container.appendChild(video);
}

const img = document.querySelector('.js-entry-featured-video img');

if (img && window.matchMedia('(min-width: 768px)').matches) {
  createVideoFromImg(img);
}
