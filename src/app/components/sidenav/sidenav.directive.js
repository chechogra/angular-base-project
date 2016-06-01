(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('sidenav', sidenavDirective);

  /** @ngInject */
  function sidenavDirective() {
    return{
      restrict: 'E',
      scope: {
        items: '='
      },
      replace: true,
      templateUrl: 'app/components/sidenav/sidenav.html',
      link: function ($scope) {
        $scope.sample = '';
      }
    }
  }
})();
