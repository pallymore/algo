// Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.
// For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.

import test from "ava";

function canJump(arr, start = 0, memo = {}) {
  if (arr.length - start <= 1) return true;
  const current = arr[start];

  for (let i = current; i >= 1; i--) {
    const index = start + i;
    if (memo[index] != null) return memo[index];
    if (canJump(arr, start + i, memo)) {
      memo[index] = true;
      return true;
    } else {
      memo[index] = false;
    }
  }

  memo[start] = false;

  return false;
}

test("canJump", (t) => {
  const testCases = [
    {
      input: [2, 0, 1, 0],
      expected: true,
    },
    {
      input: [1, 1, 0, 1],
      expected: false,
    },
    {
      input: [3, 2, 1, 0, 4],
      expected: false,
    },
  ];
  testCases.forEach(({ input, expected }) => {
    const actual = canJump(input);
    t.is(actual, expected, `expected [${input.join(", ")}] to be ${expected}`);
  });
});
