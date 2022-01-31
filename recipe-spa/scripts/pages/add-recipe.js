const addRecipeContainer = () => {
  const container = `
    <div class="actions">
    <div class="actions__container">
        <h2>Add Recipe</h2>
    </div>       
        </div>
        <div class="container">
            <input class="input" type="text" id="recipe-name" placeholder="Add a recipe name">
            <div >
            <textarea class="description" id="recipe-description" placeholder="Recipe Steps" rows="10" cols="80%"></textarea>
            </div>
        <div id="ingredients-container">
            <h2>Ingredients</h2>
            <h4>After adding your ingredient, use the checkbox to indicate if you have it in stock.</h4>
            <div id="ingredients-section">
        
            </div>
            <div>
                <form id="ingredient-form">
                    <input class="input" type="text" name="ingredient-name" placeholder="Add ingredient">
                    <button class="button--add" id="add-ingredient-button">Add Ingredient</button>
                </form>
                <div id="ingredients-list">
                </div>
            </div>
        </div>
        <div id="controls">
            <button class="button" id="add-recipe">Add New Recipe</button>
        </div>
        
        </div>
    
    `;
  return container;
};

export default addRecipeContainer;
