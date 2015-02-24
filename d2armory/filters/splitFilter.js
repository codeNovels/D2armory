angular
    .module("d2armory")
    .filter("split", splitFilter);

function splitFilter() {
    return function (value, index) {
        if (!value) {
            return value;
        }

        var array = value.split();

        switch (index) {
            case 'first':
                return array[0];
            case 'second':
                return array[1];
            case 'third':
                return array[2];
            default:
                return value;
        }
    }
};