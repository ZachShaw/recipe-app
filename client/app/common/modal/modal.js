import angular from 'angular';
import uiRouter from 'angular-ui-router';
import modalComponent from './modal.component';

let modalModule = angular.module('modal', [
  uiRouter
])

.component('modal', modalComponent);

export default modalModule;
