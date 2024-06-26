/**
 * @param {number[]} prices
 * @return {number}
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let maxProfit = 0;
  let left = 0;
  let right = left + 1;

  //LOGIC : BUY LOW, SELL HIGH TO MAXIMIZE THE PROFIT
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // Here left= right because we found the lowest point which is lesser than the current left ,to maximize the profit we should have lowest left and bigger right
      left = right;
    }
    right++;
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
