(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state, $stateParams, sidenavLinks, responseVideos, vimeoConfig, VideoFactory, $log) {
    var vm = this;
    vm.sidenavLinks = sidenavLinks;
    vm.totalItems = (responseVideos && responseVideos.data) ? responseVideos.data.total : 0;
    vm.page = $stateParams.page;
    vm.maxPaginatorSize = vimeoConfig.MAX_PAGINATOR_SIZE;
    vm.itemsPerPage = vimeoConfig.PER_PAGE;

    vm.videos = (responseVideos && responseVideos.data && responseVideos.data.data) ? VideoFactory.resolveVideosId(responseVideos.data.data) : [];

    vm.angularGridoptions = {
      cssGrid : false,
      refreshOnImgLoad: false,
      gridWidth: 295,
      gutterSize: 15
    };

    vm.goToVideo = function(){

    };

    $log.info(vm.videos);

    vm.pageChanged = function () {
      $state.go('.', { page: vm.page});
    };

    $log.info(responseVideos);
  }
})();
