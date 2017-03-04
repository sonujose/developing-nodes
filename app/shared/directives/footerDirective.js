'use strict';

function appFooterDirective() {
    return {
        restrict: 'E',
        templateUrl: 'app/shared/templates/footerTemplate.html',
        replace: true
      };
}

module.exports = appFooterDirective;