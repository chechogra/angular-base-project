(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        params: {
          page : '1'
        },
        resolve: {
          /* @ngInject */
          categories: function (CategoryFactory) {
            return CategoryFactory.getCategories().then(function (categoriesResponse) {
              var categories;
              if(categoriesResponse && categoriesResponse.data && categoriesResponse.data.data
                && categoriesResponse.data.data.length > 0){
                categories = CategoryFactory.resolveCategoriesId(categoriesResponse.data.data);
              }else{
                categories = [];
              }
              return categories;
            });
          },
          /* @ngInject */
          sidenavLinks: function(CategoryFactory, categories){
            return CategoryFactory.generateCategoryLinks(categories);
          }
        }
      })
      .state('main.category', {
        url: '/category/:categoryId?page',
        resolve: {
          /* @ngInject */
          responseVideos: function ($stateParams, VideoFactory) {
            if(!$stateParams.categoryId){
              return null;
            }

            var videoSearchConfig = VideoFactory.getVideoSearchConfiguration();
            videoSearchConfig.page = $stateParams.page;
            return VideoFactory.getVideosByCategoryId($stateParams.categoryId, videoSearchConfig);
          }
        },
        onEnter: function($state, $stateParams, categories){
          if (!$stateParams.categoryId && categories.length > 0) {
            $state.go('main.category', {'categoryId': categories[0].id, 'page': 1 });
          }
        },
        views: {
          'content@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        }
      })
      .state('main.search', {
        url: '/search?query&page',
        resolve: {
          /* @ngInject */
          responseVideos: function ($stateParams, VideoFactory) {
            var videoSearchConfig = VideoFactory.getVideoSearchConfiguration();
            videoSearchConfig.page = $stateParams.page;
            videoSearchConfig.query = $stateParams.query;
            return VideoFactory.getVideosByQuery(videoSearchConfig);
          }
        },
        views: {
          'content@': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
