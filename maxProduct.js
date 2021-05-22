import test from "ava";

function maxProductSubArray(arr) {
  if (arr.length <= 1) return arr[0];

  let max = arr[0];

  let rollingMax = arr[0];
  let rollingMin = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < 0) {
      [rollingMax, rollingMin] = [rollingMin, rollingMax];
    }

    rollingMax = Math.max(arr[i], rollingMax * arr[i]);
    rollingMin = Math.min(arr[i], rollingMax * arr[i]);

    max = Math.max(max, rollingMax);
  }

  return max;
}

test("max product subarray", (t) => {
  t.deepEqual(maxProductSubArray([2, 3, -2, 4]), 6);
});
