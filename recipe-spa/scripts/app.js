import homeContainer from "./pages/homePage.js";
import addRecipeContainer from "./pages/add-recipe.js";
import { getRecipeEdit, editRecipeContainer } from "./pages/edit-recipe.js";

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
      //send recipe value in input edit container
      getRecipeEdit(recipe);
      //go to page
      navTo(item.href);
      //edit & delete recipe
      EditData(index);
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
  if (isMatch.path == "/add-recipes") AddData();
};

//get data in add recipe container
const AddData = () => {
  const recipeName = document.querySelector("#recipe-name");
  const recipeDescription = document.querySelector("#recipe-description");
  const addRecipe = document.querySelector("#add-recipe");

  addRecipe.addEventListener("click", () => {
    const newRecipe = {
      name: recipeName.value,
      description: recipeDescription.value,
    };

    recipeList.push(newRecipe);
    saveData(recipeList);
  });
};

//get data in edit recipe container
const EditData = (index) => {
  const recipe = recipeList[index];
  const deleteRecipeBtn = document.querySelector("#delete-recipe-button");
  const updateRecipe = document.querySelector("#update-recipe");

  //delete recipe
  deleteRecipeBtn.addEventListener("click", () => {
    recipeList.splice(index, 1);
    saveData(recipeList);
  });

  //edit recipe
  updateRecipe.addEventListener("click", () => {
    const recipeName = document.querySelector("#recipe-name");
    const recipeDescription = document.querySelector("#recipe-description");

    (recipe.name = recipeName.value),
      (recipe.description = recipeDescription.value),
      saveData(recipeList);
  });
};

//sava in local storage and push in recipeList
const saveData = (newRecipe) => {
  localStorage.setItem("recipe", JSON.stringify(newRecipe));
  navTo("/");
  showRecipe(newRecipe);
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
