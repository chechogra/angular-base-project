(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('videoItem', videoItem);

  /** @ngInject */
  function videoItem() {
    return{
      restrict: 'E',
      scope: {
        imageSrc: '@',
        captionText: '@'
      },
      replace: true,
      templateUrl: 'app/components/video-item/video-item.html',
      link: function (scope) {
        scope.handleVideoClick = function () {

        };
      }
    }
  }
})();
