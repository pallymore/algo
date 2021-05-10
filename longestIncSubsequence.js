import test from "ava";

function longestIncreasingSeq(arr) {
  // return lis(arr, -Infinity, 0);
  const memo = {};
  const r = lis_memo(arr, -1, 0, memo);
  return r;
}

// function lis(nums, prev, currentIndex) {
//   if (currentIndex === nums.length) return 0;
//   let withCurrent = 0;
//   if (nums[currentIndex] > prev) {
//     withCurrent = 1 + lis(nums, nums[currentIndex], currentIndex + 1);
//   }
//   let withoutCurrent = lis(nums, prev, currentIndex + 1);

//   return Math.max(withCurrent, withoutCurrent);
// }

function lis_memo(nums, prevIndex, currentIndex, memo) {
  if (currentIndex === nums.length) return 0;
  let withCurrent = 0;

  if (memo[`${prevIndex + 1}-${currentIndex}`])
    return memo[`${prevIndex + 1}-${currentIndex}`];

  const prev = nums[prevIndex];
  if (prevIndex < 0 || nums[currentIndex] > prev) {
    withCurrent = 1 + lis_memo(nums, currentIndex, currentIndex + 1, memo);
  }
  let withoutCurrent = lis_memo(nums, prevIndex, currentIndex + 1, memo);
  const result = Math.max(withCurrent, withoutCurrent);
  memo[`${prevIndex + 1}-${currentIndex}`] = result;

  return result;
}

test("longest increasing seq", (t) => {
  // t.assert(longestIncreasingSeq([1, 2, 0, 5]) === 3, `Expected ${3}`);
  //
  const result = longestIncreasingSeq([
    0,
    8,
    4,
    12,
    2,
    10,
    6,
    14,
    1,
    9,
    5,
    13,
    3,
    11,
    7,
    15,
  ]);
  t.assert(result === 6, `Expected 6, got ${result}`);
});
