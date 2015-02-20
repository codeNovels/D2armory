var app = angular.module("d2armory", []);

angular
    .module("d2armory")
    .controller("MainController", MainController);

MainController.$inject = ['$scope', '$http'];