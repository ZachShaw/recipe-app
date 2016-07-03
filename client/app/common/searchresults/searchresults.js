import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchresultsComponent from './searchresults.component';

let searchresultsModule = angular.module('searchresults', [
  uiRouter
])

.component('searchresults', searchresultsComponent);

export default searchresultsModule;
