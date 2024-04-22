/**
 *
 * Throwing a dice give target value, list out possible combinations of sum equal to target value.
 *
 * Dice number: [1, 2, 3, 4,5,6]
 *
 * Target: 4
 *
 * Result: [
  '1111', '112',
  '121',  '13',
  '211',  '22',
  '31',   '4'
]
 */

function diceSum(target) {
  const numbers = [1, 2, 3, 4, 5, 6];

  const output = [];
  combinations("", target);
  return output;

  function combinations(str, target) {
    if (target === 0) {
      output.push(str);
      return;
    }

    for (let i = 1; i < numbers.length && i <= target; i++) {
      combinations(str + i, target - i);
    }
  }
}

console.log(diceSum(4));
