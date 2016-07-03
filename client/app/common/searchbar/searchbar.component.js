import template from './searchbar.html';
import SearchbarController from './searchbar.controller';
import './searchbar.styl';

let searchbarComponent = {
  require: {
      searchCtrl: '^search'
  },
  restrict: 'E',
  controller: SearchbarController,
  controllerAs: 'vm',
  template: template
};

export default searchbarComponent;
