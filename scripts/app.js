import homeContainer from "./pages/homePage.js";
import addRecipeContainer from "./pages/add-recipe.js";
import editRecipeContainer from "./pages/edit-recipe.js";

const recipeList = JSON.parse(localStorage.getItem("recipe")) || [];

const showRecipe = (list) => {
  const recipesContainer = document.querySelector("#recipes-div");
  //clear container
  recipesContainer.innerHTML = "";

  list.map((recipe, index) => {
    const item = document.createElement("a");
    item.href = "/edit-recipes";
    item.innerHTML = `
        <h4 class="list-item">${recipe.name}</h4>
        <h5 class="list-item__title">
        You have<span> all </span>
        the ingredients</h5>
        `;
    recipesContainer.append(item);
    //click for edit item
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navTo(item.href);
      getEditData(recipe, index);
    });
  });
};

//direct to the selected page
const navTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = () => {
  const routes = [
    {
      path: "/",
      view: homeContainer(),
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
  document.querySelector("#app").innerHTML = isMatch.view;

  //add & edit get data
  if (isMatch.path == "/add-recipes") getAddData();
};

//get data in add recipe container
const getAddData = () => {
  const recipeName = document.querySelector("#recipe-name");
  const recipeDescription = document.querySelector("#recipe-description");
  const addRecipe = document.querySelector("#add-recipe");

  addRecipe.addEventListener("click", () => {
    const newRecipe = {
      name: recipeName.value,
      description: recipeDescription.value,
    };
    saveData(newRecipe);
  });
};

//get data in edit recipe container
const getEditData = (recipe, index) => {
  console.log(recipe, index);
};

//sava in local storage and push in recipeList
const saveData = (newRecipe) => {
  recipeList.push(newRecipe);
  localStorage.setItem("recipe", JSON.stringify(recipeList));
  navTo("/");
  showRecipe();
};

// filter recipe
const searchRecipe = (e) => {
  const resultSearch = e.target.value.toLowerCase();

  const filterList = recipeList.filter((item) =>
    item.name.toLowerCase().includes(resultSearch)
  );

  showRecipe(filterList);
};

router();

document.querySelector("#add-recipe-button").addEventListener("click", (e) => {
  e.preventDefault();
  navTo(e.target.href);
});

document.querySelector("#search-bar").addEventListener("input", searchRecipe);

showRecipe(recipeList);
