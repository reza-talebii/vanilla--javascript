const addEventElements = (elements, event, func) => {
  elements.forEach((element) => {
    element.addEventListener(event, func);
  });
};

///////////////////////////////////////
// ////////// MENU //////////
const menu = document.querySelector(".menu-humbugger__list");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");
const operationBtnS = document.querySelectorAll(".operations__btn");

//FUNCTIONS
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

//event handler
menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
addEventElements(operationBtnS, "click", operationShowContent);

///////////////////////////////////////
// ////////// MODAL //////////
const openModalBtn = document.querySelectorAll(".open-modal");
const modalCloseBtn = document.querySelector(".modal__close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//functions
const toggleModal = (e) => {
  e.preventDefault();
  overlay.classList.toggle("hide");
  modal.classList.toggle("hide");
};

//event handler
addEventElements(openModalBtn, "click", toggleModal);
modalCloseBtn.addEventListener("click", toggleModal);

///////////////////////////////////////
// ////////// SLIDER //////////
const slider = () => {
  const slides = document.querySelectorAll(".slide");
  const dotContainer = document.querySelector(".dots");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = () => {
    dotContainer.innerHTML = "";
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
    const dots = document.querySelectorAll(".dots__dot");
    addEventElements(dots, "click", dotGoSide);
  };

  const activeDot = () => {
    const dots = document.querySelectorAll(".dots__dot");

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[curSlide].classList.add("active");
  };

  const dotGoSide = (e) => {
    curSlide = e.target.dataset.slide;
    goToSlide(curSlide);
  };

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    activeDot();
  };

  const nextSlide = () => {
    curSlide = maxSlide - 1 == curSlide ? 0 : ++curSlide;
    goToSlide(curSlide);
  };

  const prevSlide = () => {
    curSlide = 0 == curSlide ? maxSlide - 1 : --curSlide;
    goToSlide(curSlide);
  };

  const init = () => {
    createDots();
    activeDot();
    goToSlide(curSlide);
  };
  init();

  //event handler
  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);
};
slider();

///////////////////////////////////////
// ////////// scroll handler //////////
const navigation = document.querySelector(".nav");
const section_1 = document.querySelector("#section-1");
const section_2 = document.querySelector("#section-2");
const section_3 = document.querySelector("#section-3");
const section_4 = document.querySelector("#section-4");

window.addEventListener("scroll", (e) => {
  const scrollY = window.pageYOffset;
  //navigation
  navigation.className = scrollY > 700 ? "nav sticky-nav" : "nav";
  //effect sections
  if (scrollY > 350) section_1.classList.remove("section-hidden");
  if (scrollY > 1150) section_2.classList.remove("section-hidden");
  if (scrollY > 2000) section_3.classList.remove("section-hidden");
  if (scrollY > 2700) section_4.classList.remove("section-hidden");
});
