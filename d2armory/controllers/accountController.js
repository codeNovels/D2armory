var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .constant('apiUrl', 'http://us.battle.net/api/d3/')
    .controller("accountController", accountController);

accountController.$inject = ['$scope', '$http', 'apiUrl'];

function accountController($scope, $http, apiUrl) {
    $scope.battleTag = "Billy-1739";

    $scope.slots = ['head', 'torso', 'feet', 'hands', 'shoulders', 'legs', 'bracers', 'mainHand', 'offHand', 'waist', 'rightFinger', 'leftFinger', 'neck'];

    $scope.items = {};

    var slotMap = { 'shoulder': 'shoulders', 'chest': 'torso' }; // object that identifies slot discrepancies between hero details and item details

    //ACCOUNT
    var onUserComplete = function (response) {
        $scope.account = response.data;
    };

    var onUserSelect = function (heroDetails) {
        $scope.heroDetails = heroDetails.data;
    };

    var onError = function () {
        $scope.error = "No results found."
    };

    $scope.search = function (battleTag) {
        $http.get("http://us.battle.net/api/d3/profile/" + battleTag + "/")
            .then(onUserComplete, onError);
    };

    $scope.chooseHero = function (battleTag, heroID) {
        $http.get(apiUrl + "profile/" + battleTag + "/hero/" + heroID)
            .then(onUserSelect, onError);
    };

    var onItemDetailsComplete = function (itemDetails) {
        var data = itemDetails.data; // redefined itemDetails to the data
        var itemTooltip = data.tooltipParams;
        var itemSlots = data.slots; // slots item can be put in

        angular.forEach(itemSlots, function (slot) {
            if (slotMap[slot]) {
                slot = slotMap[slot];
            }

            if ($scope.heroDetails.items[slot] && $scope.heroDetails.items[slot].tooltipParams === itemTooltip) {
                $scope.items[slot + 'Details'] = data;
                return; // stop looping
            }
        });
    }

    var getItemDetails = function (itemId) {
        $http.get(apiUrl + "data/" + itemId)
            .then(onItemDetailsComplete, onError);
    }

    $scope.getDetails = function (battleTag, heroID) {
        $scope.chooseHero(battleTag, heroID);
    };

    $scope.$watch("heroDetails", function (newValue, oldValue) {
        if (newValue) {
            angular.forEach($scope.slots, function (slot) {
                if ($scope.heroDetails.items[slot]) {
                    getItemDetails($scope.heroDetails.items[slot].tooltipParams);
                }
                else {
                    $scope.items[slot + "Details"] = '';
                }
            });
        }
    }
 )
};