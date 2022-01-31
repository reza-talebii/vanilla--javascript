const homeContainer = () => {
  const container = `
    <div class="actions">
    <div class="actions__container" id="search-bar-div">
      <input
        type="text"
        class="input"
        id="search-bar"
        placeholder="Search"
      />
    </div>
  </div>
  <div class="container">
    <div id="recipes-div"></div>
    <div>
      <a id="add-recipe-button" href="/add-recipes" class="button">
        Add Recipe
      </a>
    </div>
  </div>
    `;
  return container;
};

export default homeContainer;
