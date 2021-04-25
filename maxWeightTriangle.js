// You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers. For example, [[1], [2, 3], [1, 5, 1]] represents the triangle:

//   1
//  2 3
// 1 5 1
// We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

// Write a program that returns the weight of the maximum weight path.

import test from "ava";

function maxWeight(input, lastIndex = 0) {
  if (input.length === 0) return 0;
  const row = input[0];
  const idx1 = lastIndex;
  const idx2 = lastIndex + 1 >= row.length ? -1 : lastIndex + 1;

  const remainingRows = input.slice(1);

  if (idx2 < 0) return row[idx1] + maxWeight(remainingRows, idx1);

  return Math.max(
    row[idx1] + maxWeight(remainingRows, idx1),
    row[idx2] + maxWeight(remainingRows, idx2)
  );
}

test("maxWeight", (t) => {
  const input = [[1], [2, 3], [1, 5, 1]];
  const expected = 9;
  const actual = maxWeight(input);
  t.assert(actual === expected, `Expected ${expected}, got: ${actual}`);
});
