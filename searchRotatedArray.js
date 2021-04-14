/*
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
 */

import test from "ava";

function searchInRotatedSortedArray(nums, target) {
  if (nums.length === 0) return false;

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const left = nums[i];
    const right = nums[j];

    if (left === target || right === target) return true;
    if (target < left && target > right) return false;

    if (target > left) i++;
    if (target < right) j--;
  }

  return false;
}

const testCases = [
  {
    input: [[2, 5, 6, 0, 0, 1, 2], 0],
    expected: true,
  },
  {
    input: [[2, 5, 6, 0, 0, 1, 2], 3],
    expected: false,
  },
];

test("searchInRotatedSortedArray", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = searchInRotatedSortedArray(...input);
    t.assert(expected === actual);
  });
});
