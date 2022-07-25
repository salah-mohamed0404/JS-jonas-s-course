import * as modal from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";

import "core-js/stable"; // polifiling every thing
import "regenerator-runtime/runtime"; //polifiling async/await
import { async } from "regenerator-runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) loading recipe
    await modal.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(modal.state.recipe);
  } catch (err) {
    // console.error(err);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // 1) get search quary
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await modal.loadSearchResults(query);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
