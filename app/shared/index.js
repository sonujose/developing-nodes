
'use strict';

var AppHeaderDirective = require('./directives/headerDirective');
var DataService = require('./services/dataService');
var AppFooterDirective = require('./directives/footerDirective');
var TimelineController = require('./controllers/timelineController');
var TimelineDirective = require('./directives/timelineDirective');

angular.module('App.shared', [])
    .directive('appHeader', AppHeaderDirective)
    .directive('appFooter', AppFooterDirective)
    .controller('TimelineController', TimelineController)
    .directive('activityTimeline', TimelineDirective)
    .service('dataService', DataService)
    .name;
