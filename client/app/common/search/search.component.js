import template from './search.html';
import SearchController from './search.controller';
import './search.styl';

let searchComponent = {
  restrict: 'E',
  bindings: {},
  controller: SearchController,
  controllerAs: 'vm',
  template: template
};

export default searchComponent;