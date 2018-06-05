// CSS
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('style.css');
(document.head||document.documentElement).appendChild(style);

// YouTube Player
var player = document.getElementsByClassName('video-stream html5-main-video')[0];

if (player) {
  displayButtons();

  var up = document.getElementsByClassName('btn-up')[0];
  var down = document.getElementsByClassName('btn-down')[0];

  up.addEventListener('click', function() {
    this.className += " animated";
    setTimeout( function() { removeAnimation(up); }, 200 );
    player.currentTime += 10;
  });

  down.addEventListener('click', function() {
    this.className += " animated";
    setTimeout( function() { removeAnimation(down); }, 200 );
    player.currentTime -= 10;
  });
}

function displayButtons() {
  let container = document.getElementById('content');
  let commentsContainer = document.getElementById('watch7-container');

  let downButton = document.createElement('img');
  downButton.className = 'btn-down';
  downButton.setAttribute('src', chrome.extension.getURL('img/left-arrow.svg'));

  let upButton = document.createElement('img');
  upButton.className = 'btn-up';
  upButton.setAttribute('src', chrome.extension.getURL('img/right-arrow.svg'));

  let imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  imgContainer.appendChild(downButton);
  imgContainer.appendChild(upButton);

  container.insertBefore(imgContainer, commentsContainer);
}

function removeAnimation(btn) {
  btn.classList.remove("animated");
}
