'use strict';

function appHeaderDirective() {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/templates/headerTemplate.html',
        replace: true,
      };
}

module.exports = appHeaderDirective;

