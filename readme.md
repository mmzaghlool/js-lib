<!-- markdownlint-disable MD033 -->

# Typescript utils for js/ts

General lib to make your life easier based on typescript

[![NPM](https://img.shields.io/npm/v/mmzaghlool)](https://www.npmjs.com/package/mmzaghlool)
[![NPM](https://img.shields.io/npm/dt/mmzaghlool)](https://www.npmjs.com/package/mmzaghlool)

## Installation

```bash
npm i mmzaghlool
```

## Importing

### ES5

```javascript
const MMZaghlool = require("mmzaghlool");
const { sortingTypes } = require("mmzaghlool");
```

### ES6

```javascript
import MMZaghlool, { sortingTypes } from "mmzaghlool";
```

<!-- 1. [Math](#math) -->

1. [Recursion Sum](#recursion-sum)
2. [Sorting](#sorting)
   - [Section Sort](#section-sort)
   - [Quick Sort](#quick-sort)

<!-- ## Math -->

## Recursion Sum

Get the sum of array of numbers based on recursion algorithm it takes an array of numbers and return single number "Sum"

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.recursionSum(arr);
```

## Sorting

### Section Sort

Sort array of numbers or objects ascending or descending using selection sort algorithm

It takes an array of numbers or objects and return the sorted array

```javascript
// Sort array of numbers
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.sectionSort(arr1, sortingTypes.DESCENDING)

// Sort array of objects based on "id" attribute
const arr2 = [{ id: 5 }, { id: 7 }, { id: 3 }, { id: 2 }, { id: 9 }];
MMZaghlool.Math.sectionSort(arr2, sortingTypes.ASCENDING, "id")
```

### Quick Sort

Sort array of numbers or objects ascending or descending using quick sort algorithm

It takes an array of numbers or objects and return the sorted array

```javascript
// Sort array of numbers
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.quickSort(arr1, sortingTypes.DESCENDING)

// Sort array of objects based on "id" attribute
const arr2 = [{ id: 5 }, { id: 7 }, { id: 3 }, { id: 2 }, { id: 9 }];
MMZaghlool.Math.quickSort(arr2, sortingTypes.ASCENDING, "id")
```

## Reach Me

If you need any help or any suggestions feel free to contact me anytime

<a href="https://www.linkedin.com/in/mmzaghlool/"><img align="center" src="https://icon-library.com/images/linkedin-icon-png-transparent-background/linkedin-icon-png-transparent-background-15.jpg" alt="LinkedIn profile" height="40" width="40" /></a>
<a href="mailto:mmzaghlool52@gmail.com"><img align="center" src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png" alt="Gmai account" height="40" width="40" /></a>
