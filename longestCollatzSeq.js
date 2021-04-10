import test from "ava";

let cache = { 1: 1 };

const longest = (n) => {
  let longest = 0;
  for (let i = 1; i <= n; i++) {
    let k = 1; // at least one
    let num = i;
    while (num > 1) {
      if (cache[num] != null) {
        k = k + cache[num] - 1; // prevent double counting 1
        break;
      }
      k++;
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
    }
    cache[i] = k;
    if (k > longest) {
      longest = k;
    }
  }
  return longest;
};

test("longestCollatzSeq", (t) => {
  t.assert(longest(1000000) === 525);
});
