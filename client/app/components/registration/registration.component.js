import template from './registration.html';
import controller from './registration.controller';
import './registration.styl';

let registrationComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default registrationComponent;
