/**
 * Problem: Maze with obstacles
 *
 * Tip : when you hit a obstacle then simple return it and stop further recursion calls
 */

function mazeObstacle(row, col, obstacle = []) {
  if (row === 1 || col === 1) {
    return 1;
  }

  if (obstacle.length > 0 && row === obstacle[0] && col === obstacle[1]) {
    console.log('🚀 ~ mazeObstacle ~ obstacle:', obstacle);
    return 0;
  }

  const left = mazeObstacle(row - 1, col, obstacle);
  const right = mazeObstacle(row, col - 1, obstacle);

  return left + right;
}

function pathWithRestrictions(row, col, obstacle = []) {
  return printPath('', row, col, obstacle);

  function printPath(str, row, col, obstacle) {
    if (row === 1 && col === 1) {
      console.log(str);
      return;
    }

    if (obstacle.length > 0 && row === obstacle[0] && col === obstacle[1]) {
      return '';
    }

    if (row > 1) printPath(str + 'D', row - 1, col, obstacle);
    if (col > 1) printPath(str + 'R', row, col - 1, obstacle);
  }
}

console.log(pathWithRestrictions(3, 3, [1, 2]));
