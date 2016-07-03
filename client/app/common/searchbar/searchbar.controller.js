class SearchbarController {
  constructor() {

    this.submitMockData = () => {
      this.searchCtrl.getMockSearchResults();
    };

    this.submitQuery = (query) => {
      this.searchCtrl.getSearchResults(query);
    }

  }
}

export default SearchbarController;
