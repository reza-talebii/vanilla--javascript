const listMusic = [
  {
    id: Math.random() * 1000,
    name: "Mahaal",
    artist: "Shadmehr Aghili",
    src: "Shadmehr Aghili - Mahaal.mp3",
    image: "Shadmehr Aghili - Mahaal.jpg",
    time: { minute: 4, seconde: 15 },
  },
  {
    id: Math.random() * 1000,
    name: "khafan",
    artist: "ho3in",
    src: "Ho3ein - Khafan.mp3",
    image: "Ho3ein - Khafan.jpg",
    time: { minute: 4, seconde: 32 },
  },
  {
    id: Math.random() * 1000,
    name: "Behet Ghol Midam",
    artist: "Mohsen Yeganeh ",
    src: "Mohsen Yeganeh - Behet Ghol Midam.mp3",
    image: "Mohsen Yeganeh - Behet Ghol Midam.jpg",
    time: { minute: 3, seconde: 37 },
  },
];
// import { listMusic } from "./list-music.js";

let indexMusic = localStorage.getItem("index") || 0;
const audio = document.querySelector("#audio");

//CONTROLS VARIABLE
const playBtn = document.querySelector(".play"),
  prevBtn = document.querySelector("#prev"),
  nextBtn = document.querySelector("#next"),
  repeatListBtn = document.querySelector("#repeat-plist"),
  moreMusicBtn = document.querySelector("#more-music");
//PROGRESS VARIABLE
const ProgressParent = document.querySelector(".progress__parent");
const progressChild = document.querySelector(".progress__child");

//*******FUNCTIONS*******
const loadMusic = (index) => {
  const music = listMusic[index];
  const coverMusic = document.querySelector("#music-cove"),
    musicName = document.querySelector("#music-name"),
    artistName = document.querySelector("#artist-name"),
    duration = document.querySelector("#max-duration");
  //MUSIC COVER
  coverMusic.src = `asset/images/${music.image}`;
  // MUSIC NAME
  musicName.innerHTML = music.name;
  // MUSIC ARTIST NAME
  artistName.innerHTML = music.artist;
  //MUSIC DURATION
  duration.innerHTML = `${listMusic[index].time.minute}:${listMusic[index].time.seconde}`;
  // MUSIC ADDRESS
  audio.src = `asset/audios/${music.src}`;
  audio.setAttribute("data-id", music.id);
};

const playMusic = () => {
  localStorage.setItem("index", indexMusic);
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "pause";
  } else {
    audio.pause();
    playBtn.innerHTML = "play_arrow";
  }
};

//CREAT ITEM OF MUSIC LIST
const creatItemMusicList = () => {
  const listMusics = document.querySelector("#lists-music");
  listMusics.innerHTML = "";
  //CREAT ITEM
  listMusic.map((music, index) => {
    const item = document.createElement("li");
    item.className = "list-music-item";
    item.innerHTML = `
    <audio
      src="asset/audios/${music.src}" class="music-list-1">
      </audio>
    <div class="list-music-name">
      <h4>${music.name}</h4>
      <span>${music.artist}</span>
    </div>
    <span id="list-music-time">${music.time.minute}:${music.time.seconde}</span>
    `;
    //SELECT ITEM MUSIC
    item.addEventListener("click", () => {
      loadMusic(index);
      playMusic();
      //CLEAR CLASS ACTIVE IN ITEMS
      document.querySelectorAll(".list-music-item").forEach((item) => {
        item.classList.remove("active");
      });
      // ADD CLASS ACTIVE IN CLICKED ITEM
      item.classList.add("active");
    });

    //played item active
    if (music.id == audio.dataset.id) item.classList.add("active");

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

const prevMusic = () => {
  indexMusic = indexMusic < 1 ? listMusic.length - 1 : --indexMusic;
  loadMusic(indexMusic);
  playMusic();
};

const nextMusic = () => {
  indexMusic = indexMusic == 2 ? 0 : ++indexMusic;
  loadMusic(indexMusic);
  playMusic();
};

// ****PROGRESS TIME****
const timeUpdate = () => {
  const currentTime = document.querySelector("#current-time");
  let seconds = audio.currentTime;
  //TIME FORMAT
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  //SHOW TIME
  currentTime.innerHTML = `${minutes}:${seconds}`;
  progressTime();
};

const progressTime = () => {
  progressChild.style.width = (audio.currentTime / audio.duration) * 100 + "%";
};

const changeProgressTime = (e) => {
  let progressWidth = ProgressParent.clientWidth; //getting width of progress bar
  let clickedOffsetX = e.offsetX; //getting offset x value
  let songDuration = audio.duration; //getting song total duration
  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
};

//REPEAT LIST
const repeatList = () => {
  const textBtn = repeatListBtn.innerText;

  switch (textBtn) {
    case "repeat":
      repeatListBtn.innerHTML = "repeat_one";
      audio.setAttribute("loop", true);
      audio.removeEventListener("click", endMusic);
      break;
    case "repeat_one":
      repeatListBtn.innerHTML = "shuffle";
      let randIndex = Math.floor(Math.random() * listMusic.length);
      do {
        randIndex = Math.floor(Math.random() * listMusic.length);
      } while (indexMusic == randIndex);
      indexMusic = randIndex;
      audio.removeAttribute("loop");
      break;
    case "shuffle":
      repeatListBtn.innerHTML = "repeat";
      audio.removeAttribute("loop");
      break;

    default:
      break;
  }
};

const endMusic = () => nextMusic();

//*******EVENT LISTENER*******
window.addEventListener("load", () => loadMusic(indexMusic));
playBtn.addEventListener("click", playMusic);
moreMusicBtn.addEventListener("click", showListMusic);
prevBtn.addEventListener("click", prevMusic);
nextBtn.addEventListener("click", nextMusic);
audio.addEventListener("timeupdate", timeUpdate);
ProgressParent.addEventListener("click", changeProgressTime);
repeatListBtn.addEventListener("click", repeatList);
audio.addEventListener("ended", endMusic);


//line 169 have bug it is'n random