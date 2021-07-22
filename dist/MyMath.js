"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
     *
     * @example MMZaghlool.Math.recursionSum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
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
    /**
     * Sort array of numbers ascending using selection sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.sectionSortAsc([6, 7, 8, 9, 5, 6, 7, 3, 2, 1]);
     */
    MyMath.sectionSortAsc = function (arr) {
        var len = arr.length;
        var sorted = Array(len);
        var _loop_1 = function (i) {
            var min = Math.min.apply(Math, arr);
            var index = arr.indexOf(min);
            arr = arr.filter(function (v, ind) { return ind !== index; });
            sorted[i] = min;
        };
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        return sorted;
    };
    /**
     * Sort array of numbers descending using selection sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.sectionSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    MyMath.sectionSortDesc = function (arr) {
        var len = arr.length;
        var sorted = Array(len);
        var _loop_2 = function (i) {
            var min = Math.max.apply(Math, arr);
            var index = arr.indexOf(min);
            arr = arr.filter(function (v, ind) { return ind !== index; });
            sorted[i] = min;
        };
        for (var i = 0; i < len; i++) {
            _loop_2(i);
        }
        return sorted;
    };
    /**
     * Sort array of numbers ascending using quick sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.quickSortAsc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    MyMath.quickSortAsc = function (arr) {
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        else {
            var pivot = arr[0];
            var leftPartition = [];
            var rightPartition = [];
            for (var i = 1; i < len; i++) {
                var element = arr[i];
                if (element < pivot) {
                    leftPartition.push(element);
                }
                else {
                    rightPartition.push(element);
                }
            }
            leftPartition = this.quickSortAsc(leftPartition);
            rightPartition = this.quickSortAsc(rightPartition);
            return __spreadArray(__spreadArray(__spreadArray([], leftPartition), [pivot]), rightPartition);
        }
    };
    /**
     * Sort array of numbers descending using quick sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.quickSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    MyMath.quickSortDesc = function (arr) {
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        else {
            var pivot = arr[0];
            var leftPartition = [];
            var rightPartition = [];
            for (var i = 1; i < len; i++) {
                var element = arr[i];
                if (element > pivot) {
                    leftPartition.push(element);
                }
                else {
                    rightPartition.push(element);
                }
            }
            leftPartition = this.quickSortDesc(leftPartition);
            rightPartition = this.quickSortDesc(rightPartition);
            return __spreadArray(__spreadArray(__spreadArray([], leftPartition), [pivot]), rightPartition);
        }
    };
    return MyMath;
}());
exports["default"] = MyMath;
