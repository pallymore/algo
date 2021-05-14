// Given a string A consisting of lowercase characters.

// We need to tell minimum characters to be appended (insertion at end) to make the string A a palindrome.

import test from "ava";

// function minAppends(str) {
//   if (isPalindrome(str)) return 0;

//   return 1 + minAppends(str.slice(1));
// }

// function isPalindrome(str) {
//   if (str.length < 2) return true;
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     if (str.charAt(i) !== str.charAt(j)) return false;

//     i++;
//     j--;
//   }

//   return true;
// }

function minAppends(str) {
  let count = 0;
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    const head = str.charAt(i);
    const tail = str.charAt(j);
    if (head === tail) {
      i++;
      j--;
    } else {
      count++;
      if (j === str.length - 1) {
        i++;
      } else {
        j++;
      }
    }
  }

  return count;
}

test("min appends", (t) => {
  t.assert(minAppends("mbadm") === 2);
  // t.assert(minAppends("abede") === 2);
  // t.assert(minAppends("aabb") === 2);
});
