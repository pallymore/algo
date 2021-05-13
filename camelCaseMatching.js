import test from "ava";

function camelCaseMatch(queries, pattern) {
  let regexPattern = "^";

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern.charAt(i);
    regexPattern += `([a-z]*)${char}`;
  }
  regexPattern += "([a-z]*)$";

  const tester = new RegExp(regexPattern);

  return queries.map((q) => tester.test(q));
}

const testCases = [
  {
    input: [
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FB",
    ],
    expected: [true, false, true, true, false],
  },
  {
    input: [
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FoBa",
    ],
    expected: [true, false, true, false, false],
  },
  {
    input: [
      ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
      "FoBaT",
    ],
    expected: [false, true, false, false, false],
  },
  {
    input: [["CompetitiveProgramming", "CounterPick", "ControlPanel"], "CooP"],
    expected: [false, false, true],
  },
];

test("camelCase match", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = camelCaseMatch(...input);
    t.deepEqual(actual, expected);
  });
});
