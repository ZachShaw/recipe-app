import template from './searchresults.html';
import SearchResultsController from './searchresults.controller';
import './searchresults.styl';

let searchresultsComponent = {
  restrict: 'E',
  bindings: {
    data: '='
  },
  controller: SearchResultsController,
  controllerAs: 'vm',
  template
};

export default searchresultsComponent;
