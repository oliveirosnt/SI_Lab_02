angular.module('myApp')
  .factory('imdbService', ["$http", function($http) {

    var searchSerieRequest = function(paramObj) {
      return $http({
        method: 'GET',
        url: "http://www.omdbapi.com/?apikey=93330d3c&t=" + paramObj,
        params: paramObj
      });
    };
    return {
        searchSerieRequest: searchSerieRequest
    };
  }]);

