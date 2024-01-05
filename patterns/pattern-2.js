/**
 *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 *      * * * * *
 */

let string = "";
function pattern2(length) {
  for (let row = 1; row <= length; row++) {
    for (let col = 1; col <= length + 1; col++) {
      string += "* ";
    }

    string += "\n";
  }

  console.log(string);
}

pattern2(4);
