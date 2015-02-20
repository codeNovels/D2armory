var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];

function MainController($scope, $http) {
    $scope.battleTag = "Billy-1739";


    var onUserComplete = function (response) {
        $scope.account = response.data;

    };

    var onRepos = function (reponse) {
        $scope.repos = response.data;
    };

    var onError = function () {
        $scope.error = "No results found."
    };

    $scope.search = function (battleTag) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/")
            .then(onUserComplete, onError);
    };

}