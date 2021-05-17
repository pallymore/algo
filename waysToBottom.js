// There is an N by M matrix of zeroes. Given N and M, write a function to count the number of ways of starting at the top-left corner and getting to the bottom-right corner. You can only move right or down.
// For example, given a 2 by 2 matrix, you should return 2, since there are two ways to get to the bottom-right:
// Right, then down
// Down, then right
// Given a 5 by 5 matrix, there are 70 ways to get to the bottom-right.

import test from "ava";

function waysToBottom(m, n) {
  if (m < 1 || n < 1) return 0;
  if (m === 1 || n === 1) return 1;

  return waysToBottom(m - 1, n) + waysToBottom(m, n - 1);
}

// memo = { `m-n`: number };
function waysToBottomDP(m, n, memo = {}) {
  if (m < 1 || n < 1) return 0;
  if (m === 1 || n === 1) return 1;

  const key = [m, n].join("-");
  if (memo[key] != null) return memo[key];

  memo[key] = waysToBottomDP(m - 1, n) + waysToBottomDP(m, n - 1);
  return memo[key];
}

test("ways to bottom", (t) => {
  t.is(waysToBottom(0, 0), 0);
  t.is(waysToBottom(1, 1), 1);
  t.is(waysToBottom(2, 2), 2);
  t.is(waysToBottom(5, 5), 70);

  t.is(waysToBottomDP(0, 0), 0);
  t.is(waysToBottomDP(1, 1), 1);
  t.is(waysToBottomDP(2, 2), 2);
  t.is(waysToBottomDP(5, 5), 70);
});
