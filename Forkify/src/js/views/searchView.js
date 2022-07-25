class SearchView {
  #parantElement = document.querySelector(".search");

  getQuery() {
    const query = this.#parantElement.querySelector(".search__field").value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parantElement.querySelector(".search__field").value = "";
  }

  addHandlerSearch(handler) {
    this.#parantElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
