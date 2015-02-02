'use strict';

/**
 * @ngdoc overview
 * @name animateTalkApp
 * @description
 * # animateTalkApp
 *
 * Main module of the application.
 */
angular
  .module('animateTalkApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hljs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
