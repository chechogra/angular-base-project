(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController(sidenavLinks, videoDetails, $log) {
    var vm = this;
    vm.sidenavLinks = sidenavLinks;
    vm.videoDetails = videoDetails;
    $log.info(vm.videoDetails);
  }
})();
