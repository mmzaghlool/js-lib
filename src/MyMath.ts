/**
 * Class for math operations not included in js Math Object
 * @class MyMath
 */
export default class MyMath {
  /**
   * Sum function using recursion
   * @param arr number[] array of numbers to get the sum of
   * @returns number The sum of the array numbers
   */
  static recursionSum(arr: number[]): number {
    const len = arr.length;

    if (len > 1) {
      const middle = Math.ceil(len / 2);
      return this.recursionSum(arr.slice(0, middle)) + this.recursionSum(arr.slice(middle, len));
    } else {
      return arr[0] || 0;
    }
  }
}
