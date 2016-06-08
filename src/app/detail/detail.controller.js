(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($scope, sidenavLinks, videoDetails, $sce, $log) {
    var vm = this;
    vm.sidenavLinks = sidenavLinks;
    vm.videoDetails = videoDetails;
    vm.videoDetails.htmlVideo = $sce.trustAsHtml(vm.videoDetails.embed.html);
    $log.info(vm.videoDetails);
  }
})();
