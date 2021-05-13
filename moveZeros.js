import test from "ava";

function moveZeroesToLeft(nums) {
  let lastZero = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n === 0) {
      nums.splice(i, 1);
      nums.splice(lastZero, 0, n);
      lastZero++;
    }
  }

  return nums;
}

function moveZeroesToLeftNoSplice(nums) {
  let read = nums.length - 1;
  let write = nums.length - 1;

  while (read >= 0) {
    const n = nums[read];
    if (n === 0) {
      read--;
      continue;
    }
    nums[write] = nums[read];
    read--;
    write--;
  }

  for (let i = 0; i <= write; i++) {
    nums[i] = 0;
  }

  return nums;
}

test("moveZeroesToLeft", (t) => {
  const input = [1, 10, 20, 0, 59, 63, 0, 88, 0, 5];
  const expected = [0, 0, 0, 1, 10, 20, 59, 63, 88, 5];
  const actual = moveZeroesToLeft([...input]);
  const actual2 = moveZeroesToLeftNoSplice([...input]);
  t.deepEqual(actual, expected);
  t.deepEqual(actual2, expected);
});
