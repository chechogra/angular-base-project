(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .factory('CategoryFactory', CategoryFactory);

  /** @ngInject */
  function CategoryFactory($http, vimeoConfig) {
    var categoryFactory = {};

    categoryFactory.getCategories = function(){
      return $http.get(vimeoConfig.API_HOST + vimeoConfig.CATEGORIES_URL);
    };

    categoryFactory.resolveCategoriesId = function(categories){
      if(categories){
        return categories.map(function(category){
          category.id =  category.uri.split('/').pop();
          return category;
        });
      }else {
        return categories;
      }

    };

    return categoryFactory;
  }
})();
