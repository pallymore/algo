// Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".

import test from "ava";

function lkd(s = "", k = 1) {
  let longest = 1;
  let start = 0;
  let end = 0;
  let seen = {};
  let charSet = new Set();

  let runningSize = 0;
  while (end < s.length) {
    let newChar = s.charAt(end);
    charSet.add(newChar);
    seen[newChar] = (seen[newChar] || 0) + 1;

    if (charSet.size > k) {
      while (charSet.size > k && start < end) {
        const beginningChar = s.charAt(start);
        seen[beginningChar]--;
        if (seen[beginningChar] === 0) {
          charSet.delete(beginningChar);
        }
        start++;
      }
      runningSize = end - start;
    }

    runningSize++;
    if (runningSize > longest) {
      longest = runningSize;
    }
    end++;
  }

  return longest;
}

test("lkd", (t) => {
  t.assert(lkd("abcba", 2) === 3, `${lkd("abcba", 2)}`);
  t.assert(lkd("aabbcc", 2) === 4);
  t.assert(lkd("aabbcc", 1) === 2);
  t.assert(lkd("aabbcc", 3) === 6);
  t.assert(lkd("aabacbebebe", 3) === 7);
});
