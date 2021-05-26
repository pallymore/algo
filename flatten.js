import test from "ava";

function flatten(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flatten(item));
    }
    result.push(item);
    return result;
  }, []);
}

test("flatten", (t) => {
  t.deepEqual(flatten([1, [2], [[[[]]]], [[3], 4]]), [1, 2, 3, 4]);
});
