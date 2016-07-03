import template from './singleRecipe.html';
import controller from './singleRecipe.controller';
import './singleRecipe.styl';

let singleRecipeComponent = {
  restrict: 'E',
  bindings: {
    recipe: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default singleRecipeComponent;
