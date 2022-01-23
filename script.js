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
  //Identify the player
  if (e.target.className == "playerX") {
    player = "X";
    AI = "O";
  } else {
    AI = "X";
    player = "O";
  }
  // hide boxes
  document.querySelector(".select-box").classList.add("hide");
  document.querySelector(".play-board").classList.add("show");

  clickCells();
};

const clickPLayer = () => {
  const cells = [...document.querySelectorAll(".cell")];

  cells.map((cell) => {
    cell.addEventListener("click", () => {
      cell.innerHTML = player;
      //Specify that it is clicked
      cell.setAttribute("data-click", true);
      //To check winIndex
      cell.classList.add(`player${player}`);
      //AI select
      setTimeout(selectAI, 200);
    });
  });
};

//event
options.addEventListener("click", selectOptions);
