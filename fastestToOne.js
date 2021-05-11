import test from "ava";

function minStepsToOne(n, memo = {}) {
  if (n === 1) return 0;
  if (n - 1 === 1) return 1;
  if (memo[n]) return memo[n];

  let minSteps = 1 + minStepsToOne(n - 1, memo);
  let minDec = Infinity;

  for (let a = 2; a <= Math.sqrt(n); a++) {
    if (n % a === 0) {
      const b = n / a;
      const decrement = Math.max(a, b);
      const currentMin = 1 + minStepsToOne(decrement, memo);
      minDec = Math.min(minDec, currentMin);
    }
  }

  minSteps = Math.min(minDec, minSteps);
  memo[n] = minSteps;

  return minSteps;
}

test("minStepsToOne", (t) => {
  t.assert(minStepsToOne(6) === 3);
  t.assert(minStepsToOne(7) === 4);
  t.assert(minStepsToOne(9) === 3);
  t.assert(minStepsToOne(10) === 4);
  t.assert(minStepsToOne(50) === 5);
  t.assert(minStepsToOne(100) === 5);
  t.assert(minStepsToOne(17) === 4);
});
