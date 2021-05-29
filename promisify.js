// https://bigfrontend.dev/problem/promisify

import test from "ava";

function promisify(fn) {
  return function () {
    return new Promise((resolve, reject) => {
      fn.call(this, ...arguments, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}

test("promisify", (t) => {
  t.is(true, true);
});
