/**
 * Class for math operations not included in js Math Object
 * @class MyMath
 */
export default class MyMath {
    /**
     * Sum function using recursion
     * @param arr number[] array of numbers to get the sum of
     * @returns number The sum of the array numbers
     *
     * @example MMZaghlool.Math.recursionSum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    static recursionSum(arr: number[]): number;
    /**
     * Sort array of numbers ascending using selection sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.sectionSortAsc([6, 7, 8, 9, 5, 6, 7, 3, 2, 1]);
     */
    static sectionSortAsc(arr: number[]): number[];
    /**
     * Sort array of numbers descending using selection sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.sectionSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    static sectionSortDesc(arr: number[]): number[];
    /**
     * Sort array of numbers ascending using quick sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.quickSortAsc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    static quickSortAsc(arr: number[]): number[];
    /**
     * Sort array of numbers descending using quick sort algorithm
     * @param arr number[] array of numbers to get get sorted
     * @returns number[] The sorted array
     *
     * @example MMZaghlool.Math.quickSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
     */
    static quickSortDesc(arr: number[]): number[];
}
