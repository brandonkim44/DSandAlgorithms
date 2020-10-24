import { appendFileSync } from 'fs';
// implement an algorithm to determine if a string has all unique characters
// what if you cannot use additional DS?
import { PerformanceObserver, performance } from 'perf_hooks';

let t0 = performance.now();
const isUnique = (str) => {
    let array = str.split("");
    let obj = {};
    array.forEach(element => {
        obj[element] = true;   
    });
    if (Object.keys(obj).length === str.length) return true;
    return false;
};
let t1 = performance.now();

// console.log("Call for isUnique took " + `${t1 - t0}` + " milliseconds.")

//Big O time complexity: O(n)
// space complexity: O(n)


// console.log(isUnique("abcdefg"));
// console.log(isUnique("aaa"));
// console.log(isUnique("a2130"));
// console.log(isUnique("a2132"));

// without using additional DS

//assume chars in str are all letters

// O(nlogn) => doing a binary search in the rest of the array

//first sort the string
// then iterate through array and do a binary search, if it returns true, then break out of for loop and return false
// at the end, if no duplicate was found, return true

const isUniqueNoDS = (str) => {
    let dupExists = null;
    // this is O(N * (N/2 + ((N/2)log(N/2)))) => O(N^2)
    for (let index = 0; index < str.length-1; index++) {
        let restOfStr = str.slice(index+1);
        dupExists = checkForDup(restOfStr, str[index]);
        if (dupExists) { break; }
    }
    if (dupExists) return false;
    return true;
};

const checkForDup = function (str, target) {
  if (binarySearch(str, target)) {
    return true;
  } else {
      return false;
  }
};

const binarySearch = (str, value) => {
    if (str <= 1) return false;
    let midIndex = Math.floor(str.length / 2);
    if (str[midIndex] === value) {
        return true;
    } else if (str[midIndex] < value) {
        let right = str.slice(midIndex+1);
        if (binarySearch(right, value)) {
            return true;
        } else {
            return false;
        }
    } else if (str[midIndex] > value) {
        let left = str.slice(0, midIndex);
        if (binarySearch(left, value)) {
            return true;
        } else {
            return false;
        }
    }
};

// let strTest = ["a", "b", "c", "e", "f", "g"];
// let strTest2 = ["a", "b", "c", "e", "f", "g", "h"];
// console.log(binarySearch(strTest, "b"));
// console.log(binarySearch(strTest2, "l"));

// console.log(binarySearch("abcdefg", "b"));

console.log(isUniqueNoDS("abcdefg"));
console.log(isUniqueNoDS("aaa"));