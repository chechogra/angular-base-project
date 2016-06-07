(function() {
  'use strict';

  angular
    .module('angularBaseProject')
    .factory('VideoFactory', VideoFactory);

  /** @ngInject */
  function VideoFactory($http, vimeoConfig) {
    var videoFactory = {};

    videoFactory.resolveVideosId = function(videos){

      if(videos){
        return videos.map(function(video){
          video.id =  video.uri.split('/').pop();
          return video;
        });
      }else {
        return videos;
      }

    };


    videoFactory.getVideosByCategoryId = function (categoryId, params) {
      var config = {};

      if(params){
        config.params = params;
      }

      return $http.get(vimeoConfig.API_HOST + 'categories/' + categoryId + '/videos', config);
    };

    videoFactory.getVideosByQuery = function (params) {
      var config = {};

      if(params){
        config.params = params;
      }

      return $http.get(vimeoConfig.API_HOST + 'videos', config);
    };

    videoFactory.getVideoById = function (videoId) {
      return $http.get(vimeoConfig.API_HOST + 'videos/' + videoId);
    };

    videoFactory.getVideoSearchConfiguration = function (query, page, perPage, sortDirection) {
      var videoSearchConfig = {};
      if(query){
        videoSearchConfig.query = query;
      }

      videoSearchConfig.page = page ? page : 1;
      videoSearchConfig.per_page = perPage ? perPage : vimeoConfig.PER_PAGE;
      videoSearchConfig.direction = sortDirection ? sortDirection : vimeoConfig.SORT_DIRECTION;
      return videoSearchConfig;
    };

    return videoFactory;
  }
})();
