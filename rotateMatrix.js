import test from "ava";

// rotate a matrix 90 deg to the right in place
function rotateMatrix(matrix) {
  const size = matrix[0]?.length ?? 0;
  const layer = Math.floor(size / 2);

  for (let l = 0; l <= layer; l++) {
    const start = l;
    const end = size - l - 1;

    for (let i = 0; i < end - start; i++) {
      let temp1 = matrix[start + i][end];
      matrix[start + i][end] = matrix[start][start + i];

      // using the first cell as temp here
      matrix[start][start + i] = matrix[end][end - i];
      matrix[end][end - i] = temp1;

      temp1 = matrix[end - i][start];
      matrix[end - i][start] = matrix[start][start + i];

      matrix[start][start + i] = temp1;
    }
  }

  return matrix;
}

const testCases = [
  {
    input: [[]],
    expected: [[]],
  },
  {
    input: [[1]],
    expected: [[1]],
  },
  {
    input: [
      [1, 2],
      [4, 3],
    ],
    expected: [
      [4, 1],
      [3, 2],
    ],
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    expected: [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ],
  },
];

test("rotateMatrix", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = rotateMatrix(input);
    t.deepEqual(
      actual,
      expected,
      `Expect: \n ${printMatrix(actual)} \n\n to Equal \n ${printMatrix(
        expected
      )}`
    );
  });
});

function printMatrix(m) {
  const rows = m.map((row) => row.join(", "));
  return rows.join("\n");
}
