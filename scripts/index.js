import { RadioPlayerInit } from './radioPlayer.js';
import { VideoPlayerInit } from './videoPlayer.js';
import { MusicPlayerInit } from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');



const deactivationPlayer = (i) => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
}

playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    }));


RadioPlayerInit();
VideoPlayerInit();
MusicPlayerInit();