var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .controller("accountController", accountController);

accountController.$inject = ['$scope', '$http'];

function accountController($scope, $http) {
    $scope.battleTag = "Billy-1739";

    //ACCOUNT
    var onUserComplete = function (response) {
        $scope.account = response.data;
    };

    var onUserSelect = function (heroDetails) {
        $scope.heroDetails = heroDetails.data;
    };



    //ITEMS
    var onHeadComplete = function (headDetails) {
        $scope.headDetails = headDetails.data;   
    };
    var onTorsoComplete = function (torsoDetails){
        $scope.torsoDetails = torsoDetails.data;
    };

    var onFeetComplete = function (feetDetails){
        $scope.feetDetails = feetDetails.data;
    };

    var onHandsComplete = function(handsDetails) {
        $scope.handsDetails = handsDetails.data;
    };

    var onShouldersComplete = function(shouldersDetails) {
        $scope.shouldersDetails = shouldersDetails.data;
    };

    var onLegsComplete = function(legsDetails){
        $scope.legsDetails = legsDetails.data;
    };

    var onBracersComplete = function(bracersDetails){
        $scope.bracersDetails = bracersDetails.data;
    };

    var onMainHandComplete = function(mainHandDetails){
        $scope.mainHandDetails = mainHandDetails.data;
    };

    var onOffHandComplete = function(offHandDetails){
        $scope.offHandDetails = offHandDetails.data;
    };

    var onWaistComplete = function(waistDetails){
        $scope.waistDetails = waistDetails.data;
    };

    var onRightFingerComplete = function(rightFingerDetails){
        $scope.rightFingerDetails = rightFingerDetails.data;
    };

    var onLeftFingerComplete = function(leftFingerDetails){
        $scope.leftFingerDetails = leftFingerDetails.data;
    };

    var onNeckComplete = function(neckDetails){
        $scope.neckDetails = neckDetails.data;
    };

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

    $scope.headItemDetails = function (headItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + headItemID)
            .then(onHeadComplete, onError);
    };

    $scope.torsoItemDetails = function (torsoItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + torsoItemID)
            .then(onTorsoComplete, onError);
    };

    $scope.feetItemDetails = function (feetItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + feetItemID)
            .then(onFeetComplete, onError);
    };

    $scope.handsItemDetails = function (handsItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + handsItemID)
            .then(onHandsComplete, onError);
    };

    $scope.shouldersItemDetails = function (shouldersItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + shouldersItemID)
            .then(onShouldersComplete, onError);
    };

    $scope.legsItemDetails = function (legsItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + legsItemID)
            .then(onLegsComplete, onError);
    };

    $scope.bracersItemDetails = function (bracersItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + bracersItemID)
            .then(onBracersComplete, onError);
    };

    $scope.mainHandItemDetails = function (mainHandItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + mainHandItemID)
            .then(onMainHandComplete, onError);
    };

    $scope.offHandItemDetails = function (offHandItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + offHandItemID)
            .then(onOffHandComplete, onError);
    };

    $scope.waistItemDetails = function (waistItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + waistItemID)
            .then(onWaistComplete, onError);
    };

    $scope.rightFingerItemDetails = function (rightFingerItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + rightFingerItemID)
            .then(onRightFingerComplete, onError);
    };

    $scope.leftFingerItemDetails = function (leftFingerItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + leftFingerItemID)
            .then(onLeftFingerComplete, onError);
    };

    $scope.neckItemDetails = function (neckItemID) {
        $http.get("http://us.battle.net/api/d3/data/" + neckItemID)
            .then(onNeckComplete, onError);
    };

    $scope.getDetails = function (battleTag, heroID, headItemID, torsoItemID, feetItemID, handsItemID, shouldersItemID, legsItemID, bracersItemID, mainHandItemID, offHandItemID, waistItemID, rightFingerItemID, leftFingerItemID, neckItemID) {
        $scope.chooseHero(battleTag, heroID);
        $scope.headItemDetails(headItemID);
        $scope.torsoItemDetails(torsoItemID);
        $scope.feetItemDetails(feetItemID);
        $scope.handsItemDetails(handsItemID);
        $scope.shouldersItemDetails(shouldersItemID);
        $scope.legsItemDetails(legsItemID);
        $scope.bracersItemDetails(bracersItemID);
        $scope.mainHandItemDetails(mainHandItemID);
        $scope.offHandItemDetails(offHandItemID);
        $scope.waistItemDetails(waistItemID);
        $scope.rightFingerItemDetails(rightFingerItemID);
        $scope.leftFingerItemDetails(leftFingerItemID);
        $scope.neckItemDetails(neckItemID);
    };

    $scope.$watch("heroDetails", function (newValue, oldValue) {
        if (newValue) {
            $scope.headItemDetails($scope.heroDetails.items.head.tooltipParams);
            $scope.torsoItemDetails($scope.heroDetails.items.torso.tooltipParams);
            $scope.feetItemDetails($scope.heroDetails.items.feet.tooltipParams);
            $scope.handsItemDetails($scope.heroDetails.items.hands.tooltipParams);
            $scope.shouldersItemDetails($scope.heroDetails.items.shoulders.tooltipParams);
            $scope.legsItemDetails($scope.heroDetails.items.legs.tooltipParams);
            $scope.bracersItemDetails($scope.heroDetails.items.bracers.tooltipParams);
            $scope.mainHandItemDetails($scope.heroDetails.items.mainHand.tooltipParams);
            $scope.offHandItemDetails($scope.heroDetails.items.offHand.tooltipParams);
            $scope.waistItemDetails($scope.heroDetails.items.waist.tooltipParams)
            $scope.rightFingerItemDetails($scope.heroDetails.items.rightFinger.tooltipParams)
            $scope.leftFingerItemDetails($scope.heroDetails.items.leftFinger.tooltipParams)
            $scope.neckItemDetails($scope.heroDetails.items.neck.tooltipParams)
        }
        }

     
 )};

   
