var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .controller("accountController", accountController);

accountController.$inject = ['$scope', '$http'];

function accountController($scope, $http) {
    $scope.battleTag = "Talentz-1274";

    var onUserComplete = function (response) {
        $scope.account = response.data;
    };

    var onUserSelect = function (heroDetails) {
        $scope.heroDetails = heroDetails.data;
    };

    var onItemComplete = function (itemDetails) {
        $scope.itemDetails = itemDetails.data;
    }

    var onError = function () {
        $scope.error = "No results found."
    };

    var mySplit = function (word) {
        var word = word;
        var split = word.split();
        $scope.split;
    }

    $scope.search = function (battleTag) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/")
            .then(onUserComplete, onError);
    };

    $scope.chooseHero = function (battleTag, heroID) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/hero/" + heroID)
            .then(onUserSelect, onError);
    };

    $scope.getItemDetails = function (itemID) {
        $http.get("http://us.battle.net/api/d3/data/" + itemID)
            .then(onItemComplete, onError);
    };

    $scope.$watch("heroDetails", function (newValue, oldValue) {
        if (newValue) {
            $scope.getItemDetails($scope.heroDetails.items.head.tooltipParams)
        }
    });

    $scope.getDetails = function (battleTag, heroID, itemID) {

        //$scope.chooseHero = function (battleTag, heroID) {
        //    $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/hero/" + heroID)
        //        .then(onUserSelect, onError);
        //};

        //$scope.getItemDetails = function (itemID) {
        //    $http.get("http://us.battle.net/api/d3/data/" + itemID)
        //        .then(onItemComplete, onError);
        //};


        $scope.chooseHero(battleTag, heroID);
        $scope.getItemDetails(itemID);


        //$scope.mySplit = function (one) { 
        //    $scope.b = one.split(" ");
        //}
    };
}