// Import services
import searchbarService from '../../services/searchbarService';

class SearchController {
  constructor(searchbarService, recipesService, $scope) {
    'ngInject';
    this.searchbarService = searchbarService;
    this.recipesService = recipesService;
  }

  getMockSearchResults() {
    this.searchbarService.getData()
    .then((data) => {
      this.results = data;
      return this.results;
    })
    .catch((error) => {
      this.error = error;
    });
  }

  getSearchResults = (keyword) => {
    this.promiseLoading = true;
    this.recipesService.getFilterByTitle(keyword)
    .then((data) => {
      this.results = data.data;
      this.promiseLoading = false;
      this.promiseSuccess = true;
      return this.results;
    })
    .catch((error) => {
      this.error = error;
      this.promiseLoading = false;
      this.promiseError = true;
    });
  }

}

export default SearchController;
