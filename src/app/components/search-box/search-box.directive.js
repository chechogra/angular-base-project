(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('searchBox', searchBox);

  /** @ngInject */
  function searchBox() {
    return{
      restrict: 'E',
      scope: {},
      replace: true,
      templateUrl: 'app/components/search-box/search-box.html',
      link: function ($scope) {
        $scope.sample = '';
      }
    }
  }
})();
