// https://leetcode.com/problems/longest-increasing-subsequence/
//
// Given an integer array nums, return the length of the longest strictly increasing subsequence.

import test from "ava";

function maxIncSub(nums) {
  // array of max length at the corresponding index.
  const maxAtIndex = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        maxAtIndex[i] = Math.max(maxAtIndex[i], maxAtIndex[j] + 1);
      }
    }
  }

  let max = maxAtIndex[0];
  for (let i = 1; i < maxAtIndex.length; i++) {
    max = Math.max(max, maxAtIndex[i]);
  }

  return max;
}

test("max inc subsequence", (t) => {
  const input = [10, 9, 2, 5, 3, 7, 101, 18];
  const expected = 4;
  const actual = maxIncSub(input);
  t.is(actual, expected);
});

test("max inc subsequence - 2", (t) => {
  const input = [7, 7, 7, 7, 7, 7, 7];
  const expected = 1;
  const actual = maxIncSub(input);
  t.is(actual, expected);
});

test("max inc subsequence - 3", (t) => {
  const input = [0, 1, 0, 3, 2, 3];
  const expected = 4;
  const actual = maxIncSub(input);
  t.is(actual, expected);
});
