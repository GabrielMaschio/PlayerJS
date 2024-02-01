const buttonPlayPauseEl = document.querySelector("#play-pause");
const backwardButtonEl = document.querySelector("#anterior");
const forwardButtonEl = document.querySelector("#proximo");
const audioCapituloEl = document.querySelector("#audio-capitulo");
const capituloTextEl = document.querySelector("#capitulo");

const chaptersNumbers = 10;
let isPlaying = 0;
let currentChapter = 1;

function playAudio() {
    audioCapituloEl.play();
    buttonPlayPauseEl.classList.remove("bi-play-fill");
    buttonPlayPauseEl.classList.add("bi-pause-fill");
    isPlaying = 1;
}

function pauseAudio() {
    audioCapituloEl.pause();
    buttonPlayPauseEl.classList.remove("bi-pause-fill");
    buttonPlayPauseEl.classList.add("bi-play-fill");
    isPlaying = 0;
}

function forwardAudio() {
    currentChapter === chaptersNumbers ? currentChapter = 1 : currentChapter++;
    audioCapituloEl.src = `books/dom-casmurro/${currentChapter}.mp3`;
    capituloTextEl.innerText = `Capítulo ${currentChapter}`
    playAudio();
    isPlaying = 1;
}

function backwardAudio() {
    currentChapter === 1 ? currentChapter = 10 : currentChapter--;
    audioCapituloEl.src = `books/dom-casmurro/${currentChapter}.mp3`;
    capituloTextEl.innerText = `Capítulo ${currentChapter}`
    playAudio();
    isPlaying = 1;
}


buttonPlayPauseEl.addEventListener("click", () => isPlaying == 1 ? pauseAudio() : playAudio());
forwardButtonEl.addEventListener("click", forwardAudio)
backwardButtonEl.addEventListener("click", backwardAudio)