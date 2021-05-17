import test from "ava";

// const getMapping = () => {
//   let mapping = {};
//   for (let i = 1; i <= 26; i++) {
//     const char = String.fromCharCode(64 + i);
//     mapping[char] = `${i}`;
//   }
//   return mapping;
// };

// const MAPPING = getMapping();

function ways(A, i = 0, memo = {}) {
  if (i === A.length) return 1;
  if (A.charAt(i) === "0") return 0;
  if (i === A.length - 1) return 1;
  if (memo[i] != null) return memo[i];

  let total = ways(A, i + 1, memo);
  if (Number(A.substring(i, i + 2)) <= 26) {
    total += ways(A, i + 2, memo);
  }

  memo[i] = total;

  return total;
}

test("ways to decode", (t) => {
  t.is(ways("8"), 1);
  t.is(ways("12"), 2);
  t.is(ways("226"), 3);
});

// Given encoded message "8", it could be decoded as only "H" (8).
// The number of ways decoding "8" is 1.

// Given encoded message "12", it could be decoded as "AB" (1, 2) or "L" (12).
// The number of ways decoding "12" is 2.
