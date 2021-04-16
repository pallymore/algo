import test from "ava";

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev1 = 0,
    prev2 = 1;
  let result;

  for (let i = 2; i <= n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }

  return result;
}

test("fibonacci", (t) => {
  t.is(0, fib(0));
  t.is(1, fib(1));
  t.is(1, fib(2));
  t.is(2, fib(3));
  t.is(3, fib(4));
  t.is(102334155, fib(40));
});
