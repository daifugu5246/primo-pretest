"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function radixSort(collection) {
    var table = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] };
    var min = Math.min.apply(Math, collection);
    // map item - min to get the positive value
    var result = collection.map(function (item) { return item - min; });
    var maxDigit = 0;
    for (var i = 0; i < collection.length; i++) {
        var digit = Math.ceil(Math.log(collection[i]));
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
    for (var i = 0; i < maxDigit; i++) {
        for (var j = 0; j < result.length; j++) {
            var digit = Math.floor((result[j] % Math.pow(10, (i + 1))) / Math.pow(10, i));
            table[digit].push(result[j]);
        }
        result = [];
        for (var j = 0; j < 10; j++) {
            if (table[j].length === 0) {
                continue;
            }
            result = __spreadArray(__spreadArray([], result, true), table[j], true);
            table[j] = [];
        }
    }
    // map item + min to get the original value
    result = result.map(function (item) { return item + min; });
    return result;
}
function merge(collection_1, collection_2, collection_3) {
    var mergedCollection = __spreadArray(__spreadArray(__spreadArray([], collection_1, true), collection_2, true), collection_3, true);
    var result = radixSort(mergedCollection);
    return result;
}
var collection_1 = [-1, 2, -3, 4, 5, 6, 7, 8, 9, 10];
var collection_2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];
var collection_3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
console.log(merge(collection_1, collection_2, collection_3));
