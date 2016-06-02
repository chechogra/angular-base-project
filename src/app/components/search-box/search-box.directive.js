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
      link: function (scope) {
        scope.fireSearch = function (keyEvent) {
          if(keyEvent.which === 13){
            var searchValue = keyEvent.target.value;
            if(searchValue){
              $rootScope.$broadcast('searchEvent', searchValue);
            }
          }
        };
      }
    }
  }
})();
