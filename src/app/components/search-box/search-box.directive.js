(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('searchBox', searchBox);

  /** @ngInject */
  function searchBox($rootScope) {
    return{
      restrict: 'E',
      scope: {},
      replace: true,
      templateUrl: 'app/components/search-box/search-box.html',
      link: function (scope, element) {

        scope.broadcastEvent = function () {
          var searchElement = element[0].querySelector('input[type=search]');
          if(searchElement && searchElement.value){
            $rootScope.$broadcast('search-box:query', searchElement.value);
          }
        };

        scope.fireSearch = function (keyEvent) {
          if(keyEvent.which === 13){
            scope.broadcastEvent();
          }
        };
      }
    }
  }
})();
