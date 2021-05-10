// Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

// For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".

import test from "ava";

const testCases = [
  {
    input: "aabcdcb",
    expected: "bcdcb",
  },
  {
    input: "bananas",
    expected: "anana",
  },
];

test("LPS", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = lps(input);
    t.assert(actual === expected, `Expected ${expected}, but got ${actual}`);
  });
});

test("isPalindrome", (t) => {
  t.assert(isPalindrome("anana"), `Expected anana to be a palindrome`);
  t.assert(isPalindrome("abccba"));
});

// O(n^2)
function lps(str) {
  if (isPalindrome(str)) return str;
  const lpsFromLeft = lps(str.slice(1));
  const lpsFromRight = lps(str.slice(0, str.length - 1));

  return lpsFromLeft.length > lpsFromRight.length ? lpsFromLeft : lpsFromRight;
}

// O(n)
function isPalindrome(str) {
  if (str.length < 2) return true;
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str.charAt(i) !== str.charAt(j)) return false;

    i++;
    j--;
  }

  return true;
}
