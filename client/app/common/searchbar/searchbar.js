import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchbarComponent from './searchbar.component';

let searchbarModule = angular.module('searchbar', [
  uiRouter
])

.component('searchbar', searchbarComponent);

export default searchbarModule;
