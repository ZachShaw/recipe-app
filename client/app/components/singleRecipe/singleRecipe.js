import angular from 'angular';
import uiRouter from 'angular-ui-router';
import singleRecipeComponent from './singleRecipe.component';

let singleRecipeModule = angular.module('singleRecipe', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('singleRecipe', {
      url: '/recipe/:id',
      template: '<single-recipe recipe="recipe"></single-recipe>',
      resolve: {
        recipe: (recipesService, $stateParams) => {
          return recipesService.getSingleRecipe($stateParams.id)
        }
      },
      controller: function($scope, recipe){
        $scope.recipe = recipe.data;
      }
    });
})

.component('singleRecipe', singleRecipeComponent);

export default singleRecipeModule;
