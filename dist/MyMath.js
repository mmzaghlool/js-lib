"use strict";
exports.__esModule = true;
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    MyMath.recursionSum = function (arr) {
        var len = arr.length;
        if (len > 1) {
            var middle = Math.ceil(len / 2);
            return this.recursionSum(arr.slice(0, middle)) + this.recursionSum(arr.slice(middle, len));
        }
        else {
            return arr[0] || 0;
        }
    };
    return MyMath;
}());
exports["default"] = MyMath;
