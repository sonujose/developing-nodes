'use strict';

require('./components');
require('./shared');
require('./styles/app.scss');

var appModule = angular.module('App', ['App.components', 'App.shared', 'ui.router']);

appModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController',
            url: '/home'
        })
        .state('about', {
            templateUrl: 'app/components/about/about.html',
            controller: 'AboutController',
            url: '/about'
        });
    $locationProvider.html5Mode(true);
}]);
