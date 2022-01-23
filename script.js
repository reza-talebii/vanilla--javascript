const WinIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let player = "",
  AI = "";

//dom variable
const options = document.querySelector(".options");

//functions
const selectOptions = (e) => {
  if (e.target.className == "playerX") {
    player = "X";
    AI = "O";
  } else {
    AI = "X";
    player = "O";
  }
  document.querySelector(".select-box").classList.add("hide");
  document.querySelector(".play-board").classList.add("show");
  clickCells()
};

const clickCells = ()=>{

}

//event
options.addEventListener("click", selectOptions);
