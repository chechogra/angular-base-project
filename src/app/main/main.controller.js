(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sidenavLinks) {
    var vm = this;
    vm.sidenavLinks = sidenavLinks;
  }
})();
