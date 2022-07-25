import * as modal from './model';
import recipeView from './views/recipeView';

import 'core-js/stable'; // polifiling every thing
import 'regenerator-runtime/runtime'; //polifiling async/await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

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
// controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
