/**
 *      *
 *     * *
 *    * * *
 *   * * * *
 *  * * * * *
 *   * * * *
 *    * * *
 *     * *
 *      *
 */

let string = '';

function pattern6(length) {
  let breakPoint = Math.round(length / 2);

  for (let row = 1; row <= length; row++) {
    const noOfSpaces = row <= breakPoint ? length - row + 1 : row;
    const noOfCols = row <= breakPoint ? row : length - row + 1;

    for (let space = 1; space <= noOfSpaces; space++) {
      string += ' ';
    }

    for (let col = 1; col <= noOfCols; col++) {
      string += '* ';
    }

    string += '\n';
  }

  console.log(string);
}

pattern6(9);
