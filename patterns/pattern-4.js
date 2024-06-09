/**
 *
 *      1
 *      1 2
 *      1 2 3
 *      1 2 3 4
 */

let string = '';
const rows = 4;

function pattern4(length) {
  for (let row = 0; row <= length; row++) {
    for (let col = 0; col < row; col++) {
      string += col + 1 + ' ';
    }

    string += '\n';
  }

  console.log(string);
}

pattern4(rows);
