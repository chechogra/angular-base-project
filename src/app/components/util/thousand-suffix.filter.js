(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .filter('thousandSuffix', thousandSuffix);

  /** @ngInject */
  function thousandSuffix() {
    return function (input, decimals) {
      var exp,
        suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

      if(!angular.isNumber(input)) {
        return null;
      }

      if(input < 1000) {
        return input;
      }

      exp = Math.floor(Math.log(input) / Math.log(1000));

      return (input / Math.pow(1000, exp)).toFixed(decimals) + suffixes[exp - 1];
    };

  }
})();
