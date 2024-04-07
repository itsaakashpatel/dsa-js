//https://takeuforward.org/arrays/implement-lower-bound-bs-2/

//Problem Statement: Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

//Lower bound is the first element which is greater than equal to given number.

function lowerBound(range, target) {
  let left = 0;
  let right = range.length - 1;
  let correctIndex = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (range[mid] >= target) {
      correctIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return correctIndex;
}

let arr = [1, 2, 2, 3];
let array = [3, 5, 8, 15, 19];

let answer = lowerBound(array, 4);
console.log("Index at", answer);
