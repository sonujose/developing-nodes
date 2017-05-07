'use strict';

var AppHeaderDirective = require('./directives/headerDirective');
var DataService = require('./services/dataService');
var AppFooterDirective = require('./directives/footerDirective');

angular.module('App.shared', [])
    .directive('appHeader', AppHeaderDirective)
    .directive('appFooter', AppFooterDirective)
    .service('dataService', DataService)
    .name;
