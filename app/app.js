'use strict';

require('./components');
require('./shared');
require('./styles/app.scss');

var appModule = angular.module('App', ['App.components', 'App.shared', 'ui.router']);

appModule.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {

    $stateProvider
        .state('home', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController',
            url: '/'
        })
        .state('about', {
            templateUrl: 'app/components/about/about.html',
            controller: 'AboutController',
            url: '/about'
        });
    
    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true);
}]);
