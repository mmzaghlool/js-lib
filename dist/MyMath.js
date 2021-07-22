"use strict";
exports.__esModule = true;
/**
 * Class for math operations not included in js Math Object
 * @class MyMath
 */
var MyMath = /** @class */ (function () {
    function MyMath() {
    }
    /**
     * Sum function using recursion
     * @param arr number[] array of numbers to get the sum of
     * @returns number The sum of the array numbers
     */
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
