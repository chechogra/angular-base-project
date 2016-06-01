(function () {
  'use strict';

  angular
    .module('angularBaseProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $http, vimeoConfig) {

    $http.defaults.headers.common.Authorization = 'Bearer ' + vimeoConfig.ACCESS_TOKEN;

    var deregisterationstateChangeError = $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if (error) {
          event.preventDefault();
        }
      });

    $rootScope.$on('$destroy', deregisterationstateChangeError);
  }

})();
