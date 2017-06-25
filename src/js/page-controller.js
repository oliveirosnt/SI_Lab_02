myApp.controller('MovieController', ["$scope", "imdbService", function ($scope, imdbService) {
    $scope.searchTitle = function (title) {
        imdbService.searchSerieRequest(angular.copy(title)).then(function successCallback(response) {
            $scope.returnDataSerie = [response.data];
        }, function errorCallback(response) {
            return {};
        });

    };
    
    $scope.checked = false;
    
    $scope.error = false;

    $scope.clickCheck = function () {
        if ($scope.checked) {
            $scope.checked = false;
        } else {
            $scope.checked = true;
        }
    }

    $scope.checkEquals = function (returnDataSerie, array) {
        for (i = 0; i < array.length; i++) {
            if (array[i].Title == returnDataSerie.Title) {
                return false;
            }
        }
        return true;

    }

    $scope.seriesProfile = [
    ];

    $scope.seriesWatchList = [
    ];

    $scope.addToMyProfile = function (returnDataSerie) {
        if ($scope.checkEquals(returnDataSerie, $scope.seriesProfile)) {
            $scope.seriesProfile.push(angular.copy(returnDataSerie));
            $scope.error = false;
        } else {
            $scope.error = true;
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.error = false;
                });
            }, 1000);
        }
    }

    $scope.removeToMyProfile = function (index) {
        $scope.seriesProfile.splice(index, 1);
    }

    $scope.addToMyWatchList = function (returnDataSerie) {
        if ($scope.checkEquals(returnDataSerie, $scope.seriesProfile) && $scope.checkEquals(returnDataSerie, $scope.seriesWatchList)) {
            $scope.seriesWatchList.push(angular.copy(returnDataSerie));
            $scope.error = false;
        } else {
            $scope.error = true;
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.error = false;
                });
            }, 1000);
        }
    }

}]);