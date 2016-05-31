(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
