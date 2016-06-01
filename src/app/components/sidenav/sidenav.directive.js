(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('sidenav', sidenavDirective);

  /** @ngInject */
  function sidenavDirective() {
    return{
      restrict: 'E',
      replace: true,
      templateUrl: 'app/components/sidenav/sidenav.html'
    }
  }
})();
