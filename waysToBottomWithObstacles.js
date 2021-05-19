// Given a grid of size m * n, lets assume you are starting at (1,1) and your goal is to reach (m,n). At any instance, if you are on (x,y), you can either go to (x, y + 1) or (x + 1, y).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?
// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// Example :
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.

import test from "ava";

// memo = { `m-n`: number };
function uniquePathsWithObstacles(A) {
  if (A.length === 0) return 0;
  const m = 0;
  const n = 0;

  const canMove = (x, y) => {
    return A[x] && A[x][y] === 0;
  };

  if (!canMove(m, n) || !canMove(A.length - 1, A[0].length - 1)) return 0;

  function waysToBottomDP(m, n, memo = {}) {
    if (m > A.length - 1 || n > A[0].length - 1) return 0;
    if (m === A.length - 1 && n === A[0].length - 1) return 1;

    const key = [m, n].join("-");
    if (memo[key] != null) return memo[key];

    const left = canMove(m + 1, n) ? waysToBottomDP(m + 1, n) : 0;
    const top = canMove(m, n + 1) ? waysToBottomDP(m, n + 1) : 0;
    memo[key] = left + top;
    return memo[key];
  }

  return waysToBottomDP(m, n);
}

test("ways to bottom", (t) => {
  const A = [
    [0, 0],
    [0, 0],
    [0, 0],
    [1, 0],
    [0, 0],
  ];

  t.assert(uniquePathsWithObstacles(A) === 3);
  t.assert(uniquePathsWithObstacles([[1, 0]]) === 0);
  t.assert(uniquePathsWithObstacles([[0, 1]]) === 0);
  t.assert(
    uniquePathsWithObstacles([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]) === 2
  );
});
