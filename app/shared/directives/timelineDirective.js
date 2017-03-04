'use strict';

function timelineDirective() {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/templates/timelineTemplate.html',
        replace: true,
        controller: 'TimelineController'
      };
}

module.exports = timelineDirective;