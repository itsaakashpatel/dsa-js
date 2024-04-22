/**
 *
 * https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/lectures/14-recursion/Backtracking.pdf
 */

/**
 *
 * @param {Int} row
 * @param {Int} col
 * @returns {Int}
 */
function count(row, col) {
  //If row and col are 1 means we reached at the last step
  if (row === 1 || col === 1) {
    return 1;
  }

  const left = count(row - 1, col);
  const right = count(row, col - 1);

  return left + right;
}

/**
 * Print path of maze
 * @param {Int} row
 * @param {Int} col
 *
 */

function path(row, col) {
  return printPath("", row, col);

  function printPath(str, row, col) {
    if (row === 1 && col === 1) {
      console.log(str);
      return;
    }

    if (row > 1) printPath(str + "D", row - 1, col);
    if (col > 1) printPath(str + "R", row, col - 1);
  }
}

function pathDiagonal(row, col) {
  return printPath("", row, col);

  function printPath(str, row, col) {
    if (row === 1 && col === 1) {
      console.log(str);
      return;
    }

    if (row > 1) printPath(str + "D", row - 1, col);

    if (col > 1) printPath(str + "R", row, col - 1);

    if (row > 1 && col > 1) printPath(str + "C", row - 1, col - 1);
  }
}

console.log(pathDiagonal(3, 3));
