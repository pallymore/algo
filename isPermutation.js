// given strings a, b
// check if one is a permutation of the other
import test from "ava";

function isPermutation(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");
  return sortedA === sortedB;
}

test("isPermutation", (t) => {
  t.assert(isPermutation("foo", "ofo") === true);
  t.assert(isPermutation("fo0", "ofo") === false);
  t.assert(isPermutation("of", "ofo") === false);
});
