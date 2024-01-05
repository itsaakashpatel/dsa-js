/**
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 */

let string = "";
function pattern1(length) {
  for (let row = 1; row <= length; row++) {
    for (let col = 1; col <= row; col++) {
      string += "* ";
    }

    string += "\n";
  }

  console.log(string);
}

pattern1(4);
