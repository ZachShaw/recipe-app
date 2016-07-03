import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import SingleRecipe from './singleRecipe/singleRecipe';
import UploadRecipe from './uploadRecipe/uploadRecipe';
import ErrorNotFound from './error/error';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  SingleRecipe.name,
  UploadRecipe.name,
  ErrorNotFound.name
]);

export default componentModule;
