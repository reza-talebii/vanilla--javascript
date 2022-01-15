const hands = document.querySelectorAll(".hand");

hands.forEach((hand) => {
  hand.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
