// in a MxN matrix, set the whole row and colmun to 0, if a member is 0
import test from "ava";

function zeroMatrix(m) {
  const clonedMatrix = m.map((row) => [...row]);

  for (let rowIndex = 0; rowIndex < m.length; rowIndex++) {
    const row = m[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const item = row[colIndex];
      if (item === 0) {
        setZero(clonedMatrix, rowIndex, colIndex);
        break;
      }
    }
  }

  return clonedMatrix;
}

function setZero(matrix, rowIndex, colIndex) {
  for (let r = 0; r < matrix.length; r++) {
    const row = matrix[r];
    for (let c = 0; c < row.length; c++) {
      if (r === rowIndex || c === colIndex) {
        row[c] = 0;
      }
    }
  }
}

const testCases = [
  {
    input: [[]],
    expected: [[]],
  },
  {
    input: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    expected: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    input: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    expected: [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ],
  },
  {
    input: [
      [1, 1, 1],
      [0, 1, 1],
    ],
    expected: [
      [0, 1, 1],
      [0, 0, 0],
    ],
  },
];

test("zeroMatrix", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = zeroMatrix(input);
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
