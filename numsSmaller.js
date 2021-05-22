// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

import test from "ava";

function smallerNumbersThanCurrent(nums) {
  const results = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    for (let j = 0; j < nums.length; j++) {
      if (number > nums[j]) {
        results[i]++;
      }
    }
  }

  return results;
}

function smallerWithHash(nums) {
  const sorted = [...nums].sort((a, b) => (a > b ? 1 : -1));

  const hash = {};
  for (let i = 0; i < sorted.length; i++) {
    const number = sorted[i];
    if (hash[number] != null) {
      continue;
    }

    hash[number] = i;
  }

  return nums.map((n) => hash[n]);
}

test("smaller than each i", (t) => {
  t.deepEqual(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
});

test("smaller than each i with hash", (t) => {
  const actual = smallerWithHash([8, 1, 2, 2, 3]);
  console.log(actual);
  t.deepEqual(smallerWithHash([8, 1, 2, 2, 3]), [4, 0, 1, 1, 3]);
});
