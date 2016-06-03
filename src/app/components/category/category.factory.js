(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .factory('CategoryFactory', CategoryFactory);

  /** @ngInject */
  function CategoryFactory($http, vimeoConfig) {
    var categoryFactory = {};

    categoryFactory.getCategories = function(){
      return $http.get(vimeoConfig.API_HOST + 'categories');
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

    categoryFactory.generateCategoryLinks = function(categories){
      var categoryLinks = [];

      if(categories && categories.length > 0){
        categoryLinks = categories.map(function(category){
          var categoryLink = {};
          categoryLink.label = category.name;
          categoryLink.state = 'main.category';
          categoryLink.params = {categoryId: category.id};
          return categoryLink;
        });
      }

      return categoryLinks;
    };
    
    return categoryFactory;
  }
})();
