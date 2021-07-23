export enum sortingTypes {
  ASCENDING,
  DESCENDING,
}

export default class MyMath {
  static recursionSum(arr: number[]): number {
    const len = arr.length;

    if (len > 1) {
      const middle = Math.ceil(len / 2);
      return this.recursionSum(arr.slice(0, middle)) + this.recursionSum(arr.slice(middle, len));
    } else {
      return arr[0] || 0;
    }
  }

  private static min(arr: any[], compareBy: string = ""): { index: number; element: any } {
    let lowest = Number.POSITIVE_INFINITY;
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const temp = this.getTemp(element, compareBy);

      if (temp < lowest) {
        lowest = temp;
        index = i;
      }
    }

    return { index, element: arr[index] };
  }

  private static max(arr: any[], compareBy: string = ""): { index: number; element: any } {
    let highest = Number.NEGATIVE_INFINITY;
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const temp = this.getTemp(element, compareBy);

      if (temp > highest) {
        highest = temp;
        index = i;
      }
    }

    return { index, element: arr[index] };
  }

  private static getTemp(element: any, compareBy: string = "") {
    if (typeof element === "number") return element;
    else return element[compareBy];
  }

  static sectionSort(arr: any[], sortingType: sortingTypes, compareBy: string = ""): any[] {
    const len = arr.length;

    if (len < 2) {
      return arr;
    } else if (typeof arr[0] === "object" && compareBy === undefined) {
      throw new Error("compareBy is required in the case of array of objects");
    }

    let sorted: any[] = Array(len);
    for (let i = 0; i < len; i++) {
      let e: { index: number; element: any };
      if (sortingType === sortingTypes.ASCENDING) e = this.min(arr, compareBy);
      else e = this.max(arr, compareBy);
      const { index, element } = e;

      arr = arr.filter((v, ind) => ind !== index);
      sorted[i] = element;
    }

    return sorted;
  }

  static quickSort(arr: any[], sortingType: sortingTypes, compareBy: string = ""): any[] {
    const len = arr.length;

    if (len < 2) {
      return arr;
    } else if (typeof arr[0] === "object" && compareBy === undefined) {
      throw new Error("compareBy is required in the case of array of objects");
    } else {
      const pivot = typeof arr[0] === "object" ? arr[0][compareBy] : arr[0];
      const pElement = arr[0];
      let leftPartition = [];
      let rightPartition = [];

      for (let i = 1; i < len; i++) {
        const c = typeof arr[i] === "object" ? arr[i][compareBy] : arr[i];
        const cElement = arr[i];

        if (sortingType === sortingTypes.ASCENDING) {
          if (c < pivot) leftPartition.push(cElement);
          else rightPartition.push(cElement);
        } else {
          if (c > pivot) leftPartition.push(cElement);
          else rightPartition.push(cElement);
        }
      }

      leftPartition = this.quickSort(leftPartition, sortingType, compareBy);
      rightPartition = this.quickSort(rightPartition, sortingType, compareBy);

      return [...leftPartition, pElement, ...rightPartition];
    }
  }
}
