import addRecipeContainer from "./pages/add-recipe.js";
import editRecipeContainer from "./pages/edit-recipe.js";

const recipeList = JSON.parse(localStorage.getItem("recipe")) || [];

const appContainer = document.querySelector("#app");
const addRecipeButton = document.querySelector("#add-recipe-button");




//page
const navTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = [
    {
      path: "/",
      view: console.log("home"),
    },
    {
      path: "/add-recipes",
      view: addRecipeContainer(),
    },
    {
      path: "/edit-recipes",
      view: editRecipeContainer(),
    },
  ];

  const isMatch = routes.find((route) => route.path == location.pathname);
  appContainer.innerHTML = isMatch.view;
};

addRecipeButton.addEventListener("click", (e) => {
  e.preventDefault();
  navTo(e.target.href);
});
