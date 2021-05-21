import test from "ava";

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

function waysDP(A) {
  if (A.charAt(0) === "0") return 0;
  if (A.length === 1) return 1;

  const ways = new Array(A.length + 1).fill(0);
  ways[0] = 1;
  ways[1] = 1; // at least one way

  for (let i = 2; i <= A.length; i++) {
    const char = A.charAt(i - 1);
    if (Number(char) >= 1) {
      ways[i] = ways[i - 1];
    }
    const prevChar = A.charAt(i - 2);
    if (prevChar === "1" || (prevChar === "2" && Number(char) < 7)) {
      // prev char is also valid
      ways[i] += ways[i - 2];
    }
  }

  return ways[A.length];
}

test("ways to decode", (t) => {
  t.is(ways("8"), 1);
  t.is(ways("12"), 2);
  t.is(ways("226"), 3);

  t.is(waysDP("8"), 1);
  t.is(waysDP("12"), 2);
  t.is(waysDP("226"), 3);
  t.is(waysDP("875361268549483279131"), 6);
});
