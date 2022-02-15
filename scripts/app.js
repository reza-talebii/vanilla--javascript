const menu = document.querySelector(".menu-humbugger__list");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const operationBtnS = document.querySelectorAll(".operations__btn");
const openModalBtn = document.querySelectorAll(".open-modal");
const modalCloseBtn = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//FUNCTIONS
const addEventElements = (elements, event, func) => {
  elements.forEach((element) => {
    element.addEventListener(event, func);
  });
};

const openMenu = () => menu.classList.add("show-menu");
const closeMenu = () => menu.classList.remove("show-menu");

const operationShowContent = (e) => {
  const btnDataset = e.target.dataset.active;

  //get active class elements
  const activeOperationBtn = document.querySelector(".operations__btn.active");
  const activeOperation = document.querySelector(
    ".operations__container.active"
  );
  const operationContainer = document.querySelector(
    `#operations-${btnDataset}`
  );
  if (!operationContainer.classList.contains("active")) {
    activeOperationBtn.classList.remove("active");
    e.target.classList.add("active");
    //container
    activeOperation.classList.remove("active");
    operationContainer.classList.add("active");
  }
};

const toggleModal = (e) => {
  e.preventDefault();
  overlay.classList.toggle("hide");
  modal.classList.toggle("hide");
};

//LISTENERS
menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
addEventElements(operationBtnS, "click", operationShowContent);
addEventElements(openModalBtn, "click", toggleModal);
modalCloseBtn.addEventListener("click", toggleModal);
