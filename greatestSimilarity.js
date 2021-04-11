import test from "ava";

// You are given a list of (website, user) pairs that represent users visiting websites. Come up with a program that identifies the top k pairs of websites with the greatest similarity.
// For example, suppose k = 1, and the list of tuples is:
// [('a', 1), ('a', 3), ('a', 5),
//  ('b', 2), ('b', 6),
//  ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5),
//  ('d', 4), ('d', 5), ('d', 6), ('d', 7),
//  ('e', 1), ('e', 3), ('e', 5), ('e', 6)]
// Then a reasonable similarity metric would most likely conclude that a and e are the most similar, so your program should return [('a', 'e')].

function greatestSimilarity(tuples, k) {
  if (k < 1) return [];
  const userWebsites = tuples.reduce((result, [user, website]) => {
    return {
      ...result,
      [user]: [...(result[user] || []), website],
    };
  }, {});
  const similarities = []; // [{ pair: [user, user], differences: number }]
  const users = Object.keys(userWebsites);
  for (let i = 0; i < users.length - 1; i++) {
    const username = users[i];
    const websitesA = userWebsites[username];
    for (let j = i + 1; j < users.length; j++) {
      const pairedUser = users[j];
      const websitesB = userWebsites[pairedUser];

      similarities.push({
        pair: [username, pairedUser],
        differences: calcDifferences(websitesA, websitesB),
      });
    }
  }

  return similarities
    .sort((a, b) => (a.differences > b.differences ? 1 : -1))
    .slice(0, k)
    .map(({ pair }) => pair);
}

function calcDifferences(websitesA, websitesB) {
  const uniqueValues = [...new Set([...websitesA, ...websitesB])];
  let differences = 0;
  uniqueValues.forEach((value) => {
    if (!websitesA.includes(value) || !websitesB.includes(value)) {
      differences++;
    }
  });
  return differences;
}

test("greatestSimilarity", (t) => {
  const tuples = [
    ["a", 1],
    ["a", 3],
    ["a", 5],
    ["b", 2],
    ["b", 6],
    ["c", 1],
    ["c", 2],
    ["c", 3],
    ["c", 4],
    ["c", 5],
    ["d", 4],
    ["d", 5],
    ["d", 6],
    ["d", 7],
    ["e", 1],
    ["e", 3],
    ["e", 5],
    ["e", 6],
  ];
  t.deepEqual(greatestSimilarity(tuples, 1), [["a", "e"]]);
  t.deepEqual(greatestSimilarity(tuples, 2), [
    ["a", "e"],
    ["a", "c"],
  ]);
});

test("calcDifferences", (t) => {
  const testCases = [
    {
      input: [
        [1, 2, 3],
        [2, 3],
      ],
      expected: 1,
    },
    {
      input: [[1, 2, 3], []],
      expected: 3,
    },
    {
      input: [
        [1, 3],
        [3, 5],
      ],
      expected: 2,
    },
    {
      input: [
        [1, 3, 5],
        [1, 2, 4, 3, 5],
      ],
      expected: 2,
    },
    {
      input: [
        [1, 3, 5],
        [1, 3, 5, 6],
      ],
      expected: 1,
    },
    {
      input: [[1], [1]],
      expected: 0,
    },
  ];
  testCases.forEach(({ input, expected }) => {
    const actual = calcDifferences(...input);
    t.is(actual, expected);
  });
});
