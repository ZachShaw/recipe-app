import template from './uploadRecipe.html';
import controller from './uploadRecipe.controller';
import './uploadRecipe.styl';

let uploadRecipeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default uploadRecipeComponent;
