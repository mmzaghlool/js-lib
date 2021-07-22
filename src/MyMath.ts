export default  class MyMath {
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
