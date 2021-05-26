import test from "ava";

function sortInPlace(input, newIndex) {
  let indexToSort = 0;
  let charToSort = input[indexToSort];
  let sortedCount = 0;

  while (sortedCount !== newIndex.length - 1) {
    const nextIndex = newIndex[indexToSort];
    const nextChar = input[nextIndex];

    input[nextIndex] = charToSort;

    charToSort = nextChar;
    indexToSort = nextIndex;
    sortedCount++;
  }
}

test("mutate array in place", (t) => {
  const input = ["a", "b", "c", "d", "e"];
  const newIndex = [3, 1, 0, 4, 2];
  const expected = ["c", "b", "e", "a", "d"];
  sortInPlace(input, newIndex);
  t.deepEqual(input, expected);
});
