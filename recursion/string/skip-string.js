//Given a string, skip string aak.

function skipString(str, target) {
  if (str.length <= 0) return '';
  return skip(str, 0, target);
}

function skip(str, index = 0, target) {
  if (str.substring(index).startsWith(target)) {
    return skip(str.substring(target.length - 1), index, target);
  } else return str[index] + skip(str.substring(index + 1), index, target);
}

console.log(skipString('Aakash', 'hh'));
