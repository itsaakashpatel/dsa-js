/**
 *
 *
 *  Print pattern like this using recursion
 *
 *  * * * *
 *  * * *
 *  * *
 *  *
 *
 *
 */

let string = "";

function pattern(row, col) {
  if (row === 0) {
    return "Empty!";
  }

  if (row > col) {
    string = string + " * ";
    pattern(row, col + 1);
  } else {
    console.log(string + " \n");
    string = "";
    pattern(row - 1, 0);
  }
}

console.log(pattern(4, 0));
