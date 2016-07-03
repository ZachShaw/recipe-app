import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Modal from './modal/modal';
import Search from './search/search';
import Searchbar from './searchbar/searchbar';
import Searchresults from './searchresults/searchresults';
import Comments from './comments/comments';
import Login from './login/login';


let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Modal.name,
  Search.name,
  Searchresults.name,
  Searchbar.name,
  Comments.name,
  Login.name
]);

export default commonModule;
