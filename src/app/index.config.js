(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $logProvider, toastrConfig, LOCALES, tmhDynamicLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    //Angular translate configuration
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/lang/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'es'], LOCALES.localesMap)
      .determinePreferredLanguage() // or use $translateProvider.preferredLanguage(LOCALES.preferredLocale);
      .fallbackLanguage(LOCALES.preferredLocale);

    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escape');
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

  }

})();
