import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'current time';
const playerEl = document.querySelector('#vimeo-player');

const currentTime = getCurrentTime();

const player = new Player(playerEl);

player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(time) {
  localStorage.setItem(KEY_TIME, time.seconds);
}

function getCurrentTime() {
  return Number(localStorage.getItem(KEY_TIME));
}
