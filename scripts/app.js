const menu = document.querySelector(".menu-humbugger__list");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");

const openMenu = () => menu.classList.add("show-menu");
const closeMenu = () => menu.classList.remove("show-menu");

menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
