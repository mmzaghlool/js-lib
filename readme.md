# Typescript lib

## Installing

```bash
npm i mmzaghlool
```

## Importing

### ES5

```javascript
const MMZaghlool = require("mmzaghlool");
```

### ES6

```javascript
import MMZaghlool from "mmzaghlool";
```

1. [recursionSum](#recursion-sum)
2. [sectionSortDesc](#section-sort-desc)
3. [sectionSortAsc](#section-sort-asc)

### Recursion Sum

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Sum function using recursion
 * @param arr number[] array of numbers to get the sum of
 * @returns number The sum of the array numbers
 */
MMZaghlool.Math.recursionSum(arr);
```

### Section Sort Desc

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/**
 * Sort array of numbers descending using selection sort algorithm
 * @param arr number[] array of numbers to get get sorted
 * @returns number[] The sorted array
 */
MMZaghlool.Math.sectionSortDesc(arr);
```

### Section Sort Asc

```javascript
const arr = [6, 7, 8, 9, 5, 6, 7, 3, 2, 1];
/**
 * Sort array of numbers ascending using selection sort algorithm
 * @param arr number[] array of numbers to get get sorted
 * @returns number[] The sorted array
 */
MMZaghlool.Math.sectionSortAsc(arr);
```
