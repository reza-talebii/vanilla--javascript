const hands = document.querySelectorAll(".hand");
const btnReload = document.querySelector("#btn-reload");
const resultTitle = document.querySelector("#result-title");
const handsContainer = document.querySelector(".hands");
const resultContainer = document.querySelector(".result");

let listChoose = ["rock", "paper", "scissors"];
//PLAYER CHOOSE
let user = "";
//USER POINT
let score = 0;

hands.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    user = e.currentTarget.id;
    //SELECT COMPUTER
    let computer = listChoose[Math.trunc(Math.random() * listChoose.length)];
    hideHandsContent();
    showResultContent(computer);
    checkWinner(computer);
  });
});

const hideHandsContent = () => handsContainer.classList.add("hide");

//SHOW HANDS CHOOSE
const showResultContent = (computer) => {
  resultContainer.classList.remove("hide");

  //USER CHOOSE
  const userChoose = document.querySelector("#user-img-result");
  userChoose.setAttribute("src", `images/${user}.png`);
  //COMPUTER CHOOSE
  const computerChoose = document.querySelector("#computer-img-result");
  computerChoose.setAttribute("src", `images/${computer}.png`);
};

const checkWinner = (computer) => {
  if (user == "rock" && computer == "scissors") {
    messagePlayerWin("win");
  } else if (user == "paper" && computer == "rock") {
    messagePlayerWin("win");
  } else if (user == "scissors" && computer == "paper") {
    messagePlayerWin("win");
  } else if (user == computer) {
    resultTitle.innerHTML = "DRAW";
  } else {
    resultTitle.innerHTML = "YOU ARE LOSE";
  }
};

//UPDATE SCORE
const updateScore = (score) => {
  document.querySelector("#point").innerHTML = score;
};

const messagePlayerWin = () => {
  updateScore(++score);
  resultTitle.innerHTML = `YOU ARE WIN`;
};

const restartGame = () => {
  handsContainer.classList.remove("hide");
  resultContainer.classList.add("hide");
};

btnReload.addEventListener("click", restartGame);
