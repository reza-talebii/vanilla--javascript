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
const cells = [...document.querySelectorAll(".cell")];
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

  clickPLayer();
};

const clickPLayer = () => {
  cells.map((cell) => {
    cell.addEventListener("click", () => {
      cell.innerHTML = player;
      //Specify that it is clicked
      cell.setAttribute("data-click", true);
      //To check winIndex
      cell.classList.add(`playerClick${player}`);
      //disable click again
      cell.style.pointerEvents = "none";
      //check player win
      if (checkWinner(player)) {
        console.log("player Win");
      }
      //AI select
      setTimeout(clickAI, 200);
    });
  });
};

const clickAI = () => {
  try {
    const cellNotClicked = document.querySelectorAll(
      ".cell[data-click='false']"
    );
    const randomCell = Math.trunc(Math.random() * cellNotClicked.length);

    cellNotClicked[randomCell].innerHTML = AI;
    //Specify that it is clicked
    cellNotClicked[randomCell].setAttribute("data-click", true);
    //To check winIndex
    cellNotClicked[randomCell].classList.add(`playerClick${player}`);
    //disable click again
    cellNotClicked[randomCell].style.pointerEvents = "none";
    //check AI win
    if (checkWinner(AI)) {
      console.log(AI + "win");
    }
  } catch {
    console.log("draw");
  }
};

const checkWinner = (player) => {
  const result = WinIndex.some((arr) => {
    return arr.every((index) => {
      return cells[index].classList.contains(`playerClick${player}`);
    });
  });

  return result;
};

//event
options.addEventListener("click", selectOptions);
