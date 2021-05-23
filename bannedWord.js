import test from "ava";

function mcw(paragraph, banned) {
  const bannedHash = banned.reduce(
    (hash, word) => ({ ...hash, [word]: true }),
    {}
  );
  const words = paragraph.toLocaleLowerCase().split(/\W+/);
  const wordCounts = {};
  let mostCommonWord = null;
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (bannedHash[word]) continue;

    wordCounts[word] = (wordCounts[word] ?? 0) + 1;
    if (wordCounts[word] > count) {
      mostCommonWord = word;
      count = wordCounts[word];
    }
  }

  return mostCommonWord;
}

test("most common word", (t) => {
  const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
  const banned = ["hit"];
  const expected = "ball";
  t.is(mcw(paragraph, banned), expected);
});

test("most common word - edge case", (t) => {
  const paragraph = "a.";
  const banned = [];
  const expected = "a";
  t.is(mcw(paragraph, banned), expected);
});
