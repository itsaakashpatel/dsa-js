/**
 * https://leetcode.com/problems/happy-number/
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n;
  let fast = n;
  do {
    slow = findSquare(slow);
    fast = findSquare(findSquare(fast));
  } while (slow !== fast);

  if (slow === 1) {
    return true;
  }

  return false;
};

function findSquare(n) {
  let ans = 0;

  while (n > 0) {
    const rem = n % 10;
    ans = ans + rem * rem;
    n = Math.floor(n / 10);
  }

  return ans;
}
