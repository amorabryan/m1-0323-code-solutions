let buttonClickTime = 0;

const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function () {
  buttonClickTime++;
  clickCount.textContent = 'Clicks: ' + buttonClickTime;
  if (buttonClickTime < 4) {
    hotButton.className = 'hot-button ' + 'cold';
  } else if (buttonClickTime < 7) {
    hotButton.className = 'hot-button ' + 'cool';
  } else if (buttonClickTime < 10) {
    hotButton.className = 'hot-button ' + 'tepid';
  } else if (buttonClickTime < 13) {
    hotButton.className = 'hot-button ' + 'warm';
  } else if (buttonClickTime < 16) {
    hotButton.className = 'hot-button ' + 'hot';
  } else if (buttonClickTime > 16) {
    hotButton.className = 'hot-button ' + 'nuclear';
  }
});
