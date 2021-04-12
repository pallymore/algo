// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

import test from "ava";

const testCases = [
  {
    input: [-4, -1, 0, 3, 10],
    expected: [0, 1, 9, 16, 100],
  },
  {
    input: [-7, -3, 2, 3, 11],
    expected: [4, 9, 9, 49, 121],
  },
];

test("sortedSquares", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = sortedSquares(input);
    t.deepEqual(
      actual,
      expected,
      `Expected: [${expected.join(", ")}]\n Got: [${actual.join(", ")}]`
    );
  });
});

function sortedSquares(nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    nums[i] = num * num;
  }

  return nums.sort((a, b) => (a > b ? 1 : -1));
}
