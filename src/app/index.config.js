(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Angular translate configuration
    $translateProvider.preferredLanguage('en');

    $translateProvider.useStaticFilesLoader({
      prefix: 'app/lang/',
      suffix: '.json'
    });

    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
      'en_SG': 'en',
      'en_UK': 'en',
      'en_US': 'en',
      'es_145': 'es',
      'es_ES': 'es'
    });

    $translateProvider.useLocalStorage();

    $translateProvider.determinePreferredLanguage(function () {
      return 'en';
    }).fallbackLanguage('en');

    $translateProvider.useSanitizeValueStrategy('escape');
  }

})();
