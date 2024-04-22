//Given a string, skip character a.

function skipCharacter(str, target) {
  if (str === "") return "";

  const arrayStr = str.split("");

  return skip(arrayStr, 0, target);
}

function skip(array, index, target) {
  if (index >= array.length) return "";

  const element = array[index];
  if (element !== target) {
    return element + skip(array, index + 1, target);
  } else return skip(array, index + 1, target);
}

console.log(skipCharacter("Aakash", "A"));
