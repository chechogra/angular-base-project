(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('sidenav', sidenavDirective);

  /** @ngInject */
  function sidenavDirective($document) {
    return{
      restrict: 'E',
      scope: {
        items: '='
      },
      replace: true,
      templateUrl: 'app/components/sidenav/sidenav.html',
      link: function(scope, element){
        var toogleButtonDOM = $document[0].querySelector('.toogle-sidenav');
        var closeButtonDOM = $document[0].querySelector('.close-sidenav');
        var toogleButton, closeButton;

        var toogleSidenav = function () {
          if(element.hasClass('open')){
            element.removeClass('open');
          }else{
            element.addClass('open');
          }
        };

        if(toogleButtonDOM){
          toogleButton = angular.element(toogleButtonDOM);
          toogleButton.on('click', toogleSidenav);

        }

        var closeSidenav = function () {
          if(element.hasClass('open')){
            element.removeClass('open');
          }
        };

        if(closeButtonDOM){
          closeButton = angular.element(closeButtonDOM);
          closeButton.on('click', closeSidenav);

        }

        scope.$on('$destroy', function () {
          if(toogleButton){
            toogleButton.off('click', toogleSidenav);
          }

          if(closeButton){
            closeButton.off('click', closeSidenav);
          }

        });

      }
    }
  }
})();
