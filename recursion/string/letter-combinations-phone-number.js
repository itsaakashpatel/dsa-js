//https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const letterMapping = {
    1: '',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const output = [];

  combinations('', digits, letterMapping);
  return output;

  function combinations(pStr, uStr, letterMapping) {
    if (uStr.length === 0) {
      output.push(pStr);
      return;
    }

    const char = uStr.charAt(0);
    const letters = letterMapping[char];

    for (let i = 0; i < letters.length; i++) {
      combinations(pStr + letters[i], uStr.slice(1), letterMapping);
    }
  }
};

console.log(letterCombinations(''));
