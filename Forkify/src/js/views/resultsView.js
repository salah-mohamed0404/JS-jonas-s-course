import View from "./View.js";
import icons from "../../img/icons.svg";

class ResaultView extends View {
  _parantElement = document.querySelector(".results");
  _errorMessage = "No recipes found to your query! Please try again";
  _Message = "";

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            
          </div>
        </a>
      </li>
    `;
  }
}

export default new ResaultView();
