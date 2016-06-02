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
        params: {
          page : '1'
        },
        resolve: {
          /* @ngInject */
          responseVideos: function ($stateParams, CategoryFactory) {
            if(!$stateParams.categoryId){
              return [];
            }

            var videoSearchConfig = CategoryFactory.getVideoSearchConfiguration();
            videoSearchConfig.page = $stateParams.page;
            return CategoryFactory.getVideosByCategoryId($stateParams.categoryId, videoSearchConfig);
          }
        },
        onEnter: function($state, $stateParams, categories){
          if (!$stateParams.categoryId && categories.length > 0) {
            $state.go('main.category', {'categoryId': categories[0].id });
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
