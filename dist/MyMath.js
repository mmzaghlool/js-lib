"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.sortingTypes = void 0;
var sortingTypes;
(function (sortingTypes) {
    sortingTypes[sortingTypes["ASCENDING"] = 0] = "ASCENDING";
    sortingTypes[sortingTypes["DESCENDING"] = 1] = "DESCENDING";
})(sortingTypes = exports.sortingTypes || (exports.sortingTypes = {}));
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
    MyMath.min = function (arr, compareBy) {
        if (compareBy === void 0) { compareBy = ""; }
        var lowest = Number.POSITIVE_INFINITY;
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            var temp = this.getTemp(element, compareBy);
            if (temp < lowest) {
                lowest = temp;
                index = i;
            }
        }
        return { index: index, element: arr[index] };
    };
    MyMath.max = function (arr, compareBy) {
        if (compareBy === void 0) { compareBy = ""; }
        var highest = Number.NEGATIVE_INFINITY;
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
            var temp = this.getTemp(element, compareBy);
            if (temp > highest) {
                highest = temp;
                index = i;
            }
        }
        return { index: index, element: arr[index] };
    };
    MyMath.getTemp = function (element, compareBy) {
        if (compareBy === void 0) { compareBy = ""; }
        if (typeof element === "number")
            return element;
        else
            return element[compareBy];
    };
    MyMath.sectionSort = function (arr, sortingType, compareBy) {
        if (compareBy === void 0) { compareBy = ""; }
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        else if (typeof arr[0] === "object" && compareBy === undefined) {
            throw new Error("compareBy is required in the case of array of objects");
        }
        var sorted = Array(len);
        var _loop_1 = function (i) {
            var e = void 0;
            if (sortingType === sortingTypes.ASCENDING)
                e = this_1.min(arr, compareBy);
            else
                e = this_1.max(arr, compareBy);
            var index = e.index, element = e.element;
            arr = arr.filter(function (v, ind) { return ind !== index; });
            sorted[i] = element;
        };
        var this_1 = this;
        for (var i = 0; i < len; i++) {
            _loop_1(i);
        }
        return sorted;
    };
    MyMath.quickSort = function (arr, sortingType, compareBy) {
        if (compareBy === void 0) { compareBy = ""; }
        var len = arr.length;
        if (len < 2) {
            return arr;
        }
        else if (typeof arr[0] === "object" && compareBy === undefined) {
            throw new Error("compareBy is required in the case of array of objects");
        }
        else {
            var pivot = typeof arr[0] === "object" ? arr[0][compareBy] : arr[0];
            var pElement = arr[0];
            var leftPartition = [];
            var rightPartition = [];
            for (var i = 1; i < len; i++) {
                var c = typeof arr[i] === "object" ? arr[i][compareBy] : arr[i];
                var cElement = arr[i];
                if (sortingType === sortingTypes.ASCENDING) {
                    if (c < pivot)
                        leftPartition.push(cElement);
                    else
                        rightPartition.push(cElement);
                }
                else {
                    if (c > pivot)
                        leftPartition.push(cElement);
                    else
                        rightPartition.push(cElement);
                }
            }
            leftPartition = this.quickSort(leftPartition, sortingType, compareBy);
            rightPartition = this.quickSort(rightPartition, sortingType, compareBy);
            return __spreadArray(__spreadArray(__spreadArray([], leftPartition), [pElement]), rightPartition);
        }
    };
    return MyMath;
}());
exports["default"] = MyMath;
