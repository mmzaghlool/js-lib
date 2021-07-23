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
```

### ES6

```javascript
import MMZaghlool from "mmzaghlool";
```

<!-- 1. [Math](#math) -->

1. [Recursion Sum](#recursion-sum)
2. [Sorting](#sorting)
   - [Section Sort descending](#section-sort-descending)
   - [Section Sort ascending](#section-sort-ascending)
   - [Quick Sort descending](#quick-sort-descending)
   - [Quick Sort ascending](#quick-sort-ascending)

<!-- ## Math -->

## Recursion Sum

Get the sum of array of numbers based on recursion algorithm it takes an array of numbers and return single number "Sum"

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.recursionSum(arr);
```

## Sorting

### Section Sort descending

Sort array of numbers descending using selection sort algorithm it takes an array of numbers and return the sorted array

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.sectionSortDesc(arr);
```

### Section Sort ascending

Sort array of numbers ascending using selection sort algorithm it takes an array of numbers and return the sorted array

```javascript
const arr = [6, 7, 8, 9, 5, 6, 7, 3, 2, 1];

MMZaghlool.Math.sectionSortAsc(arr);
```

### Quick Sort descending

Sort array of numbers descending using quick sort algorithm it takes an array of numbers and return the sorted array

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

MMZaghlool.Math.quickSortDesc(arr);
```

### Quick Sort ascending

Sort array of numbers ascending using quick sort algorithm it takes an array of numbers and return the sorted array

```javascript
const arr = [6, 7, 8, 9, 5, 6, 7, 3, 2, 1];

MMZaghlool.Math.quickSortAsc(arr);
```

## Reach Me

If you need any help or any suggestions feel free to contact me anytime

<a href="https://www.linkedin.com/in/mmzaghlool/"><img align="center" src="https://icon-library.com/images/linkedin-icon-png-transparent-background/linkedin-icon-png-transparent-background-15.jpg" alt="LinkedIn profile" height="40" width="40" /></a>
<a href="mailto:mmzaghlool52@gmail.com"><img align="center" src="https://cdn.iconscout.com/icon/free/png-256/gmail-2981844-2476484.png" alt="Gmai account" height="40" width="40" /></a>
