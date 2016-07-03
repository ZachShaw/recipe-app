import template from './error.html';
import controller from './error.controller';
import './error.styl';

let errorComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default errorComponent;
