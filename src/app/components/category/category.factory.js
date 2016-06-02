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

    categoryFactory.getVideosByCategoryId = function (categoryId, params) {
      var config = {};

      if(params){
        config.params = params;
      }

      return $http.get(vimeoConfig.API_HOST + 'categories/' + categoryId + '/videos', config);
    };

    categoryFactory.getVideosByQuery = function (params) {
      var config = {};

      if(params){
        config.params = params;
      }

      return $http.get(vimeoConfig.API_HOST + 'videos', config);
    };

    categoryFactory.getVideoSearchConfiguration = function (query, page, perPage, sortDirection) {
      var videoSearchConfig = {};
      if(query){
        videoSearchConfig.query = query;
      }

      videoSearchConfig.page = page ? page : 1;
      videoSearchConfig.per_page = perPage ? perPage : vimeoConfig.PER_PAGE;
      videoSearchConfig.direction = sortDirection ? sortDirection : vimeoConfig.SORT_DIRECTION;
      return videoSearchConfig;
    };

    return categoryFactory;
  }
})();
