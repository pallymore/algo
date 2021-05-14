// Given an array of strictly the characters 'R', 'G', and 'B',
// segregate the values of the array so that all the Rs come first,
// the Gs come second, and the Bs come last.
// You can only swap elements of the array.

// Do this in linear time and in-place.

// For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

import test from "ava";

const rgbSort = (input) => {
  let lastSortedR = -1;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "R") {
      lastSortedR++;
      swap(input, i, lastSortedR);
    }
  }

  let lastSortedB = input.length;
  for (let j = input.length - 1; j > lastSortedR; j--) {
    const char = input[j];
    if (char === "B") {
      lastSortedB--;
      swap(input, j, lastSortedB);
    }
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

test("rgbSort", (t) => {
  const input = ["G", "B", "R", "R", "B", "R", "G"];
  const expected = ["R", "R", "R", "G", "G", "B", "B"];
  rgbSort(input);
  t.deepEqual(input, expected);
});
