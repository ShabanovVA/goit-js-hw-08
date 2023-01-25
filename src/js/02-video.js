import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function timeUpdateValue(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
};

player.on('timeupdate',
    throttle(timeUpdateValue, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(currentTime);
