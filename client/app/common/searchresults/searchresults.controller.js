class SearchResultsController {
  constructor() {
    'ngInject';
    this.hideShowMore = false;
    this.upvoteValue = 0;
  }

  submitUpvote() {
      // Simple for now until POST is working
      this.upvoteValue = ++this.upvoteValue;
      return this.upvoteValue;
  }

}

export default SearchResultsController;
