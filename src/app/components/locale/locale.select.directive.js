(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .directive('ngTranslateLanguageSelect', ngTranslateLanguageSelect);

  /** @ngInject */
  function ngTranslateLanguageSelect(LocaleService) {

    return {
      restrict: 'A',
      replace: true,
      template: ''+
      '<div class="language-select" ng-if="visible">'+
      '<label>'+
      '{{"global.SELECT_LANGUAGE" | translate}}:'+
      '<select ng-model="currentLocaleDisplayName"'+
      'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
      'ng-change="changeLanguage(currentLocaleDisplayName)">'+
      '</select>'+
      '</label>'+
      '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
          $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }
    };

  }

})();
