export declare enum sortingTypes {
    ASCENDING = 0,
    DESCENDING = 1
}
export default class MyMath {
    static recursionSum(arr: number[]): number;
    private static min;
    private static max;
    private static getTemp;
    static sectionSort(arr: any[], sortingType: sortingTypes, compareBy?: string): any[];
    static quickSort(arr: any[], sortingType: sortingTypes, compareBy?: string): any[];
}
