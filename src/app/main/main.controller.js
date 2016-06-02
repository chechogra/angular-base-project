(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $stateParams, sidenavLinks, responseVideos, vimeoConfig, $log) {
    var vm = this;
    vm.sidenavLinks = sidenavLinks;
    vm.totalItems = (responseVideos && responseVideos.data) ? responseVideos.data.total : 0;
    vm.page = $stateParams.page;
    vm.maxPaginatorSize = vimeoConfig.MAX_PAGINATOR_SIZE;
    vm.itemsPerPage = vimeoConfig.PER_PAGE;

    vm.pageChanged = function () {
      $state.go('.', { page: vm.page});
    };

    $log.info(responseVideos);
  }
})();
