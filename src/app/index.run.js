(function () {
  'use strict';

  angular
    .module('angularBaseProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $http, $state, vimeoConfig) {

    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;


    var deregisterationStateChangeStart = $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('state:loading', '');
      }
    });
    var deregisterationStateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function(event, toState) {
      if (toState.resolve) {
        $rootScope.$broadcast('state:loaded', '');
      }
    });


    var deregisterationStateChangeError = $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if (error) {
          $rootScope.$broadcast('state:loaded', '');
          event.preventDefault();
        }
      });

    var deregisterationSearchEvent = $rootScope.$on('search-box:query', function (event, data) {
      $state.go('main.search', { query: data, page: 1 });
    });

    $rootScope.$on('$destroy', function () {
      deregisterationStateChangeStart();
      deregisterationStateChangeSuccess();
      deregisterationStateChangeError();
      deregisterationSearchEvent();
    });
  }

})();
