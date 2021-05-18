// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

import test from "ava";

function product(nums) {
  let leftProducts = new Array(nums.length).fill(1);
  let rightProducts = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
    const rightIndex = nums.length - i - 1;
    rightProducts[rightIndex] =
      nums[rightIndex + 1] * rightProducts[rightIndex + 1];
  }

  return leftProducts.map((left, i) => left * rightProducts[i]);
}

test("product except i", (t) => {
  t.deepEqual(product([1, 2, 3, 4]), [
    2 * 3 * 4,
    1 * 3 * 4,
    1 * 2 * 4,
    1 * 2 * 3,
  ]);
  t.deepEqual(product([-1, 1, 0, -3, 3]), [-0, 0, 9, -0, 0]);
});
