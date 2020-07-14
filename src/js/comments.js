const DISQUS_NAME = 'middlebury-magazine';

const commentsButton = document.querySelector('.js-comments-button');

function handleCommentButtonClick(e) {
  e.preventDefault()
  const script = document.createElement('script');
  script.src = `//${DISQUS_NAME}.disqus.com/embed.js`;
  script.async = true;
  document.body.appendChild(script);

  commentsButton.style.display = 'none';
}

if(commentsButton) {
  commentsButton.addEventListener('click', handleCommentButtonClick);
}
