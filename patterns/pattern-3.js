/**
 *
 *      * * * *
 *      * * *
 *      * *
 *      *
 */

let string = "";
const rows = 4;

function pattern3(length) {
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length - row; col++) {
      string += "* ";
    }

    string += "\n";
  }

  console.log(string);
}

pattern3(rows);
