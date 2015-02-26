angular
    .module("d2armory")
    .filter("gender", genderFilter);

function genderFilter() {
    return function (gender) {
        if (gender == 0) {
            return "male";
        } else {
            return "female";
        };
    };
};
