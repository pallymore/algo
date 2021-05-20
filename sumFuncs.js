// Can you write code for this function: sum(a)(b)(c)....( n)(). This should return the sum of all the numbers a+b+c+..+n.

import test from "ava";

function sum(a) {
  return function (b) {
    if (arguments.length === 0) {
      return a;
    }

    return sum(a + b);
  };
}

test("sum func", (t) => {
  t.is(sum(1)(), 1);
  t.is(sum(1)(2)(), 3);
  t.is(sum(1)(2)(3)(), 6);
  t.is(sum(1)(2)(3)(4)(), 10);
  t.is(sum(1)(2)(3)(4)(5)(), 15);
});
