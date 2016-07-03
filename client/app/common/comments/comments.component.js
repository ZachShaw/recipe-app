import template from './comments.html';
import controller from './comments.controller';
import './comments.styl';

let commentsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default commentsComponent;
