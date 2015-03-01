var app = angular.module('includeDirectives', []);


app.directive("heroSelector", function () {
    return {
        restrict: 'E',
        templateUrl: "hero-Selector.html"
    };
});

app.directive("profileSheet", function () {
    return {
        restrict: 'E',
        templateUrl: "profile-Sheet.html"
    };
});

app.directive("searchBar", function () {
    return {
        restrict: 'E',
        templateUrl: "search-Bar.html"
    };
});