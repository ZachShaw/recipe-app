import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uploadRecipeComponent from './uploadRecipe.component';

let uploadRecipeModule = angular.module('uploadRecipe', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('uploadRecipe', {
      url: '/upload-recipe',
      template: '<upload-recipe></upload-recipe>'
    });
})

.component('uploadRecipe', uploadRecipeComponent);

export default uploadRecipeModule;
