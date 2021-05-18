// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

import test from "ava";

function validPalindrome(s, deletes = 1) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      if (deletes < 1) return false;
      return (
        validPalindrome(s.slice(i + 1, j + 1), 0) ||
        validPalindrome(s.slice(i, j), 0)
      );
    } else {
      i++;
      j--;
    }
  }

  return true;
}

test("valid palindrome", (t) => {
  t.assert(validPalindrome("aba"));
  t.assert(validPalindrome("abca"));
  t.assert(!validPalindrome("abc"));
});
