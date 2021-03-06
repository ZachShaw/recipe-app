import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    Services.name
  ])
  .config(['$locationProvider', '$uiViewScrollProvider', ($locationProvider, $uiViewScrollProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');

    //stop scrolling when router state change
    $uiViewScrollProvider.useAnchorScroll();

  }])

  .component('app', AppComponent);
