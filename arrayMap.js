// Please implement your own Array.prototype.map().

// [1,2,3].myMap(num => num * 2)
// [2,4,6]

import test from "ava";

Array.prototype.myMap = function (callback, thisObj) {
  const result = [];
  this.forEach((...args) => {
    const index = args[1];
    result[index] = callback.apply(thisObj, args);
  });
  return result;
};

test("array.map", (t) => {
  const results = [1, 2, 3].myMap((num) => num * 2);
  t.deepEqual(results, [2, 4, 6]);
});
