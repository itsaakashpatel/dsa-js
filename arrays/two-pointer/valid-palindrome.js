var isPalindrome = function (s) {
  if (s.length <= 1) return true;

  let [left, right] = [0, s.length - 1];
  let leftChar, rightChar;
  while (left < right) {
    leftChar = s[left];
    rightChar = s[right];

    // skip char if non-alphanumeric
    if (!/[a-zA-Z0-9]/.test(leftChar)) {
      left++;
    } else if (!/[a-zA-Z0-9]/.test(rightChar)) {
      right--;
    } else {
      // compare letters
      if (leftChar.toLowerCase() != rightChar.toLowerCase()) {
        return false;
      }
      left++;
      right--;
    }
  }
  return true;
};
