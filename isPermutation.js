// given strings a, b
// check if one is a permutation of the other
function isPermutation(a, b) {
  if (a.length !== b.length) return false;

  const sortedA = a.split("").sort().join("");
  const sortedB = b.split("").sort().join("");
  return sortedA === sortedB;
}
