angular
    .module("d2armory")
    .filter("split", splitFilter);

function splitFilter() {
    return function (value, index) {
        if (!value) {
            return value;
        }

        var array = value.split(' ');

        switch (index) {
            case 'first':
                return array[0];
            case 'second':
                return array[1];
            default:
                return value;
        }
    }
};


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