import test from "ava";

function sum_three(nums) {
  if (nums.length < 3) return [];
  const sorted = nums.sort((a, b) => (a > b ? 1 : -1));
  const triplets = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) return triplets;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;

    for (let j = i + 1, k = sorted.length - 1; j < k; ) {
      const sum = sorted[i] + sorted[j] + sorted[k];
      if (sum === 0) {
        triplets.push([sorted[i], sorted[j], sorted[k]]);
        j++;
        k--;
        while (j < k && sorted[j] === sorted[j - 1]) j++;
        while (j < k && sorted[k] === sorted[k + 1]) k--;
      }
      if (sum > 0) k--;
      if (sum < 0) j++;
    }
  }

  return triplets;
}

const testCases = [
  {
    input: [[-1, 0, 1, 2, -1, 4]],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  {
    input: [[]],
    expected: [],
  },
  {
    input: [[0]],
    expected: [],
  },
];

test("3sum", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = sum_three(...input);
    t.deepEqual(actual, expected);
  });
});
