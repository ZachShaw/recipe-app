import template from './modal.html';
import controller from './modal.controller';
import './modal.styl';

let modalComponent = {
  restrict: 'E',
  transclude: true,
  bindings: {
    show: '='
  },
  controller,
  controllerAs: 'vm',
  template,
};

export default modalComponent;
