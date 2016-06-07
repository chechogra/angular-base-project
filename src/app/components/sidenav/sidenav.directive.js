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

        scope.toogleSidenav = function () {
          if(element.hasClass('open')){
            element.removeClass('open');
          }else{
            element.addClass('open');
          }
        };

        if(toogleButtonDOM){
          toogleButton = angular.element(toogleButtonDOM);
          toogleButton.on('click', scope.toogleSidenav);

        }

        scope.closeSidenav = function () {
          if(element.hasClass('open')){
            element.removeClass('open');
          }
        };

        if(closeButtonDOM){
          closeButton = angular.element(closeButtonDOM);
          closeButton.on('click', scope.closeSidenav);

        }

        scope.$on('$destroy', function () {
          if(toogleButton){
            toogleButton.off('click', scope.toogleSidenav);
          }

          if(closeButton){
            closeButton.off('click', scope.closeSidenav);
          }

        });

      }
    }
  }
})();
