/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 *
 *Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:

Input: piles = [3,6,7,11], h = 8
Output: 4
Example 2:

Input: piles = [30,11,23,4,20], h = 5
Output: 30
Example 3:

Input: piles = [30,11,23,4,20], h = 6
Output: 23
 */
var minEatingSpeed = function (piles, h) {
  let low = 1; //Minimum one banana koko can eat
  let high = Math.max(...piles); //Max banana can eat

  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);

    //If koko can eat all banana given speed and hours, that will reduce the search space to within that range.
    if (canEatAll(piles, mid, h)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

var canEatAll = function (piles, speed, h) {
  let totalTime = 0;

  for (const bananas of piles) {
    totalTime += Math.ceil(bananas / speed);
    if (totalTime > h) return false;
  }

  return true;
};

let piles = [3, 6, 7, 11],
  h = 8;

console.log(minEatingSpeed(piles, h));
