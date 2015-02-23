var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .controller("accountController", accountController);

accountController.$inject = ['$scope', '$http'];

function accountController($scope, $http) {
    //$scope.battleTag = "Billy-1739";
    //$scope.heroID = 0;

    var onUserComplete = function (response) {
        $scope.account = response.data;
    };
    
    var onUserSelect = function (response) {
        $scope.heroDetails = response.data;
    };

    //var onRepos = function (reponse) {
    //    $scope.repos = response.data;
    //};

    var onError = function () {
        $scope.error = "No results found."
    };

    $scope.search = function (battleTag) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/")
            .then(onUserComplete, onError);
    };

    $scope.chooseHero = function (battleTag, heroID) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/hero/" + heroID)
            .then(onUserSelect, onError);
    };










}