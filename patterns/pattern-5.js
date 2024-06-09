/**
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 *      * * * * *
 *      * * * *
 *      * * *
 *      * *
 *      *
 */

let string = '';

function pattern5(length) {
  let breakPoint = Math.round(length / 2);

  for (let row = 1; row <= length; row++) {
    if (row <= breakPoint) {
      for (let col = 1; col <= row; col++) {
        string += '* ';
      }
    } else {
      for (let col = 1; col <= length - row + 1; col++) {
        string += '* ';
      }
    }

    string += '\n';
  }

  console.log(string);
}

pattern5(20);
