(function () {
  'use strict';

  angular
    .module('angularBaseProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $http, $state, vimeoConfig) {

    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;

    var deregisterationStateChangeError = $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if (error) {
          event.preventDefault();
        }
      });

    var deregisterationSearchEvent = $rootScope.$on('searchEvent', function (event, data) {
      $state.go('main.search', { query: data });
    });

    $rootScope.$on('$destroy', function () {
      deregisterationStateChangeError();
      deregisterationSearchEvent();
    });
  }

})();
