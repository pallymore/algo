// You are given a 2-d matrix where each cell consists of either /, \, or an empty space. Write an algorithm that determines into how many regions the slashes divide the space.

// For example, suppose the input for a three-by-six grid is the following:

// \    /
//  \  /
//   \/
// Considering the edges of the matrix as boundaries, this divides the grid into three triangles, so you should return 3.

import test from "ava";

const SPACE_CHAR = 0;

function twoDArrSSpaces(matrix) {
  if (matrix.length === 0) return 0;
  let total = 0;
  let visited = new Array(matrix.length);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(matrix[0].length).fill(false);
  }

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const cell = row[colIndex];
      if (visited[rowIndex][colIndex] || cell !== SPACE_CHAR) {
        // visited or hit a wall
        continue;
      }

      // is space!
      total++;

      // greedly visit all surrounding spaces.
      markSpaces(matrix, rowIndex, colIndex, visited);
    }
  }

  return total;
}

function markSpaces(matrix, startRow, startCol, visited) {
  // right - if there is a right and it is a space,
  visited[startRow][startCol] = true;
  const leftCol = startCol - 1;
  const hasLeft = leftCol >= 0;
  const leftIsSpace = hasLeft && matrix[startRow][leftCol] === SPACE_CHAR;
  const leftNotVisited = hasLeft && !visited[startRow][leftCol];
  if (hasLeft && leftIsSpace && leftNotVisited) {
    markSpaces(matrix, startRow, leftCol, visited);
  }

  const rightCol = startCol + 1;
  const hasRight = rightCol < matrix[startRow].length;
  const rightIsSpace = hasRight && matrix[startRow][rightCol] === SPACE_CHAR;
  const rightNotVisited = hasRight && !visited[startRow][rightCol];
  if (hasRight && rightIsSpace && rightNotVisited) {
    markSpaces(matrix, startRow, rightCol, visited);
  }

  const bottomRow = startRow + 1;
  const hasBottom = bottomRow < matrix.length;
  const bottomIsSpace = hasBottom && matrix[bottomRow][startCol] === SPACE_CHAR;
  const bottomNotVisited = hasBottom && !visited[bottomRow][startCol];
  if (hasBottom && bottomIsSpace && bottomNotVisited) {
    markSpaces(matrix, bottomRow, startCol, visited);
  }
}

test("twoDArrSSpaces", (t) => {
  const input = [
    [1, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ];
  const result = twoDArrSSpaces(input);
  t.assert(result === 1);
});

test("twoDArrSSpaces - 2", (t) => {
  const input = [
    [0, 1],
    [0, 0],
  ];
  const result = twoDArrSSpaces(input);
  t.assert(result === 1);
});
