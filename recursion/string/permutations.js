/**
 *
 * Find permutations
 *
 * String = "abc"
 *
 * Answer: abc, cba, bca, bac, cab, acb
 *
 * Permutations: 3! = 3 * 2 * 1 = 6
 */

function permutations(pStr, uStr) {
  if (uStr.length === 0) {
    console.log(pStr);
    return;
  }

  const char = uStr.charAt(0);
  //No of recursion calls  = processed str length + 1
  for (let i = 0; i <= pStr.length; i++) {
    const left = pStr.substring(0, i);
    const right = pStr.substring(i, pStr.length);

    permutations(left + char + right, uStr.substring(1));
  }
}

console.log(permutations("", "abc"));
