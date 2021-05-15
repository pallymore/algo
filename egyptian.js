import test from "ava";

const egyptian = ([a, b]) => {
  if (b % a === 0) return [[1, b / a]];

  const results = [];
  const newBase = (b + a - ((b + a) % a)) / a;
  const egyptianRepresentation = [1, newBase];

  results.push(egyptianRepresentation);

  const restBase = newBase * b;
  const restA = a * newBase - b;

  const rest = egyptian([restA, restBase]);

  return [...results, ...rest];
};

test("egyptian", (t) => {
  const input = [4, 13];
  const expected = [
    [1, 4],
    [1, 18],
    [1, 468],
  ];
  const actual = egyptian(input);
  t.deepEqual(expected, actual);
});
