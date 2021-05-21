import test from "ava";

function minJumps(nums, start = 0, memo = {}) {
  if (nums.length === 0 || start === nums.length - 1) return 0;

  if (memo[start] != null) return memo[start];

  const jumps = nums[start];
  if (jumps === 0) {
    return -1;
  }

  if (start + jumps >= nums.length - 1) return 1;

  let min = Infinity;
  for (let i = 1; i <= jumps; i++) {
    const minFromI = minJumps(nums, start + i, memo);
    if (minFromI !== -1) {
      min = Math.min(min, minFromI);
    }
  }

  if (!Number.isFinite(min)) {
    return -1;
  }

  memo[start] = min + 1;

  return memo[start];
}

function minJumpsDP(nums) {
  if (nums.length === 0) return 0;
  if (nums[0] === 0) return -1;

  const minJumps = new Array(nums.length).fill(Infinity);
  minJumps[0] = 0; // no jumps needed to reach the first number

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      const jumps = nums[j];
      const canReachI = jumps + j >= i;
      if (canReachI) {
        minJumps[i] = Math.min(1 + minJumps[j], minJumps[i]);
        break;
      }
    }
  }

  return minJumps[nums.length - 1];
}

test("min jumps", (t) => {
  t.assert(minJumps([]) === 0);
  t.assert(minJumps([1]) === 0);
  t.assert(minJumps([1, 2]) === 1);
  t.assert(minJumps([2, 1, 1]) === 1);
  t.assert(minJumps([2, 3, 1, 1, 4]) === 2);
  t.assert(minJumpsDP([2, 3, 1, 1, 4]) === 2);
  t.assert(
    minJumpsDP([
      33,
      21,
      50,
      0,
      0,
      46,
      34,
      3,
      0,
      12,
      33,
      0,
      31,
      37,
      15,
      17,
      34,
      18,
      0,
      4,
      12,
      41,
      18,
      35,
      37,
      34,
      0,
      47,
      0,
      39,
      32,
      49,
      5,
      41,
      46,
      26,
      0,
      2,
      49,
      35,
      4,
      19,
      2,
      27,
      23,
      49,
      19,
      38,
      0,
      33,
      47,
      1,
      21,
      36,
      18,
      33,
      0,
      1,
      0,
      39,
      0,
      22,
      0,
      9,
      36,
      45,
      31,
      4,
      14,
      48,
      2,
      33,
      0,
      39,
      0,
      37,
      48,
      44,
      0,
      11,
      24,
      16,
      10,
      23,
      22,
      41,
      32,
      14,
      22,
      16,
      23,
      38,
      42,
      16,
      15,
      0,
      39,
      23,
      0,
      42,
      15,
      25,
      0,
      41,
      2,
      48,
      28,
    ]) === 3
  );
});
