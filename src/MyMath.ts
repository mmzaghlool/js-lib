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
  static recursionSum(arr: number[]): number {
    const len = arr.length;

    if (len > 1) {
      const middle = Math.ceil(len / 2);
      return this.recursionSum(arr.slice(0, middle)) + this.recursionSum(arr.slice(middle, len));
    } else {
      return arr[0] || 0;
    }
  }

  /**
   * Sort array of numbers ascending using selection sort algorithm
   * @param arr number[] array of numbers to get get sorted
   * @returns number[] The sorted array
   *
   * @example MMZaghlool.Math.sectionSortAsc([6, 7, 8, 9, 5, 6, 7, 3, 2, 1]);
   */
  static sectionSortAsc(arr: number[]): number[] {
    const len = arr.length;
    let sorted: number[] = Array(len);

    for (let i = 0; i < len; i++) {
      const min = Math.min(...arr);
      const index = arr.indexOf(min);
      arr = arr.filter((v, ind) => ind !== index);
      sorted[i] = min;
    }

    return sorted;
  }

  /**
   * Sort array of numbers descending using selection sort algorithm
   * @param arr number[] array of numbers to get get sorted
   * @returns number[] The sorted array
   *
   * @example MMZaghlool.Math.sectionSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   */
  static sectionSortDesc(arr: number[]): number[] {
    const len = arr.length;
    let sorted: number[] = Array(len);

    for (let i = 0; i < len; i++) {
      const min = Math.max(...arr);
      const index = arr.indexOf(min);
      arr = arr.filter((v, ind) => ind !== index);
      sorted[i] = min;
    }

    return sorted;
  }

  /**
   * Sort array of numbers ascending using quick sort algorithm
   * @param arr number[] array of numbers to get get sorted
   * @returns number[] The sorted array
   *
   * @example MMZaghlool.Math.quickSortAsc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   */
  static quickSortAsc(arr: number[]): number[] {
    const len = arr.length;

    if (len < 2) {
      return arr;
    } else {
      const pivot = arr[0];
      let leftPartition = [];
      let rightPartition = [];

      for (let i = 1; i < len; i++) {
        const element = arr[i];

        if (element < pivot) {
          leftPartition.push(element);
        } else {
          rightPartition.push(element);
        }
      }

      leftPartition = this.quickSortAsc(leftPartition);
      rightPartition = this.quickSortAsc(rightPartition);

      return [...leftPartition, pivot, ...rightPartition];
    }
  }

  /**
   * Sort array of numbers descending using quick sort algorithm
   * @param arr number[] array of numbers to get get sorted
   * @returns number[] The sorted array
   *
   * @example MMZaghlool.Math.quickSortDesc([1, 2, 3, 4, 5, 6, 7, 8, 9]);
   */
  static quickSortDesc(arr: number[]): number[] {
    const len = arr.length;

    if (len < 2) {
      return arr;
    } else {
      const pivot = arr[0];
      let leftPartition = [];
      let rightPartition = [];

      for (let i = 1; i < len; i++) {
        const element = arr[i];

        if (element > pivot) {
          leftPartition.push(element);
        } else {
          rightPartition.push(element);
        }
      }

      leftPartition = this.quickSortDesc(leftPartition);
      rightPartition = this.quickSortDesc(rightPartition);

      return [...leftPartition, pivot, ...rightPartition];
    }
  }
}
