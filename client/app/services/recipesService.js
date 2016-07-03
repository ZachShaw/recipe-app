import * as API_CONST from '../constants/api.js';

export default class recipesService {
  constructor($http, $q) {
    'ngInject';
    this.$http = $http;
    this.$q = $q;
  }

  /*
  //createRecipe
  //accepts recipe object
  //posts object to recipes endpoint
  */

  createRecipe(recipe) {
    let deferred = this.$q.defer();

    let httpReturn = this.$http({
      url: API_CONST.URL_DEV + API_CONST.URL_RECIPES_POST,
      method: 'POST',
      data: recipe
    });

    deferred.resolve(httpReturn);
    return deferred.promise;
  }

  /*
  //getSingleRecipe
  //accepts recipe id
  //returns recipe object
  */

  getSingleRecipe(recipeId) {
    let deferred = this.$q.defer();

    let httpReturn = this.$http({
      url: API_CONST.URL_DEV + API_CONST.URL_RECIPES_SINGLE + recipeId,
      method: 'GET'
    });

    deferred.resolve(httpReturn);
    return deferred.promise;
  }

  /*
  //getRecipesFilterByTitle
  //accepts recipe id
  //returns recipe object
  */

  getFilterByTitle(title) {
    let deferred = this.$q.defer();

    let httpReturn = this.$http({
      url: API_CONST.URL_DEV + API_CONST.URL_RECIPES_ALL_FILTER_TITLE + title,
      method: 'GET'
    });

    deferred.resolve(httpReturn);
    return deferred.promise;
  }

}
