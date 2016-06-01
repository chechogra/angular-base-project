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
          categoriesResponse: function (CategoryFactory) {
            return CategoryFactory.getCategories();
          },
          /* @ngInject */
          categories: function(CategoryFactory, categoriesResponse){
            var categories;
            if(categoriesResponse && categoriesResponse.data && categoriesResponse.data.data
              && categoriesResponse.data.data.length > 0){
              categories = CategoryFactory.resolveCategoriesId(categoriesResponse.data.data);
            }else{
              categories = [];
            }
            return categories;
          }
        }
      })
      .state('main.category', {
        url: '/category/:categoryId',
        resolve: {/* @ngInject */

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
            controllerAs: 'mainCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/category/');
  }

})();
