let newRecipe = [];

const getRecipeEdit = (recipe) => (newRecipe = recipe);

const editRecipeContainer = () => {
  const container = `
  <div class="actions">
  <div class="actions__container">
      <h2>Edit Recipe</h2>
  </div>       
</div>
<div class="container">
  <div>
          <input class="input" type="text" id="recipe-name" placeholder="Add a recipe name" value="${newRecipe.name}">
      </div>
      <div>
          <textarea id="recipe-description" placeholder="Recipe Steps" rows="10" cols="80%">${newRecipe.description}</textarea>
      </div>
      <div id="ingredients-container">
          <h2>Ingredients</h2>
          <h4>After adding your ingredient, use the checkbox to indicate if you have it in stock.</h4>
          <div id="ingredients-section">

          </div>
          <div>   
              <form id="ingredient-form">

                  
              <input class="input" type="text" name="ingredient-name" placeholder="Add ingredient">
              <button class="button" id="add-ingredient-button">Add Ingredient</button>
              </form>
          <div id="ingredients-list">
              </div>
          </div>
      </div>
      <div id="controls">
          <button class="button" id="update-recipe">Update Recipe</button>
      </div>
      <div>
          <h2>Danger zone</h2>
          <button class="button-danger" id="delete-recipe-button">Delete Recipe</button>
      </div>
    </div>
  `;
  return container;
};

export { getRecipeEdit, editRecipeContainer };
