const aboutContainer = document.querySelector(".about");
const contents = document.querySelectorAll(".content");
const tabBtnS = document.querySelectorAll(".tab-btn");

aboutContainer.addEventListener("click", (e) => {
  const btnClick = e.target.dataset.id;

  //REMOVE CLASS ACTIVE
  if (btnClick) {
    tabBtnS.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    //ADD CLASS ACTIVE
    e.target.classList.add("active");
    document.querySelector(`#${btnClick}`).classList.add("active");
  }
});
