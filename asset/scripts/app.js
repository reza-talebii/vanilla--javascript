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

//CREAT ITEM OF MUSIC LIST *bug*
const creatItemMusicList = () => {
  const listMusics = document.querySelector("#lists-music");
  listMusics.innerHTML = "";

  listMusic.map((music) => {
    const item = document.createElement("li");
    item.className = "list-music-item active";
    item.innerHTML = `
    <audio
      src="asset/audios/${music.src}" class="music-list-1">
      </audio>
    <div class="list-music-name">
      <h4>${music.name}</h4>
      <span>${music.artist}</span>
    </div>
    <span id="list-music-time">0:00</span>
    `;

    listMusics.append(item);
  });
};

const showListMusic = () => {
  creatItemMusicList();
  const musicList = document.querySelector(".music-list");
  const closeList = document.querySelector("#close-list");
  //SHOW
  musicList.classList.add("show");
  // HIDE
  closeList.addEventListener("click", () => musicList.classList.remove("show"));
};

//*******EVENT LISTENER*******
window.addEventListener("load", () => loadMusic(indexMusic));
playBtn.addEventListener("click", playMusic);
moreMusicBtn.addEventListener("click", showListMusic);
// prevBtn.addEventListener("click",prevMusic)
// nextBtn.addEventListener("click",nextMusic)
