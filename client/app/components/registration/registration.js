import angular from 'angular';
import uiRouter from 'angular-ui-router';
import registrationComponent from './registration.component';

let registrationModule = angular.module('registration', [
  uiRouter
])

.component('registration', registrationComponent);

export default registrationModule;
