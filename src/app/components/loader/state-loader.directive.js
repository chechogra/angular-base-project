(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('stateLoader', stateLoader);

  /** @ngInject */
  function stateLoader() {
    return{
      restrict: 'E',
      scope: {},
      replace: true,
      template: '<div id="loader_parent"><div id="loader_wrapper"><div id="loader"></div><div class="loader-section section-left"></div><div class="loader-section section-right"></div></div></div>',
      link: function (scope, element) {

        scope.$on('state:loading', function () {

          if(element.hasClass('loaded')){
            element.removeClass('loaded');
          }

          if(!element.hasClass('loading')){
            element.addClass('loading');
          }
        });

        scope.$on('state:loaded', function () {
          if(element.hasClass('loading')){
            element.removeClass('loading');
          }

          if(!element.hasClass('loaded')){
            element.addClass('loaded');
          }
        });

      }
    }
  }
})();
