import angular from 'angular';
import recipesService from './recipesService';
import searchbarService from './searchbarService';

export default angular
  .module('app.services', [])
  .service({
    recipesService,
    searchbarService
  })
