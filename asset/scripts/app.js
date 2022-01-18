import { listMusic } from "./list-music.js";
const indexMusic = 0;

const audio = document.querySelector("#audio");
//*****CONTROLS BUTTONS*******
const playBtn = document.querySelector(".play"),
  prevBtn = document.querySelector("#prev"),
  nextBtn = document.querySelector("#next"),
  repeatListBtn = document.querySelector("#repeat-plist"),
  moreMusicBtn = document.querySelector("#more-music");

//*******FUNCTIONS*******
const loadMusic = (index) => {
  const music = listMusic[index];
  const coverMusic = document.querySelector("#music-cove"),
    musicName = document.querySelector("#music-name"),
    artistName = document.querySelector("#artist-name");
  //MUSIC COVER
  coverMusic.src = `asset/images/${music.image}`;
  // MUSIC NAME
  musicName.innerHTML = music.name;
  // MUSIC ARTIST NAME
  artistName.innerHTML = music.artist;
  // MUSIC ADDRESS
  audio.src = `asset/audios/${music.src}`;
};

const playMusic = () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "pause";
  } else {
    audio.pause();
    playBtn.innerHTML = "play_arrow";
  }
};

const showListMusic = ()=>{}
//*******EVENT LISTENER*******
window.addEventListener("load", () => loadMusic(indexMusic));
moreMusicBtn.addEventListener("click",showListMusic);
// prevBtn.addEventListener("click",prevMusic)
// nextBtn.addEventListener("click",nextMusic)
playBtn.addEventListener("click", playMusic);
