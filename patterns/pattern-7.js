/**
 *      1
 *    2 1 2
 *  3 2 1 2 3
 *4 3 2 1 2 3 4
 */

let string = '';

function pattern7(length) {
  for (let row = 1; row <= length; row++) {
    const noOfSpaces = length - row;

    for (let space = 1; space <= noOfSpaces; space++) {
      string += '  ';
    }

    for (let col = row; col >= 1; col--) {
      string += col + ' ';
    }

    for (let i = 2; i <= row; i++) {
      string += i + ' ';
    }

    string += '\n';
  }

  console.log(string);
}

pattern7(5);
