/*
  Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less.
  You must break it up so that words don't break across lines.
  Each line has to have the maximum possible amount of words.
  If there's no way to break the text up, then return null.

  You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

  For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.
*/

import test from "ava";

test("lineBreaks", (t) => {
  const result = lineBreaks("the quick brown fox jumps over the lazy dog", 10);
  const expected = ["the quick", "brown fox", "jumps over", "the lazy", "dog"];
  t.deepEqual(result, expected);
});

test("lineBreaks - returns null if not possible", (t) => {
  const result = lineBreaks("foo bar babara", 4);
  t.deepEqual(result, null);
});

function lineBreaks(str, k) {
  if (k < 0) return null;

  const words = str.split(" ");
  const lines = [];
  let line = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > k) return null;

    if (line.length + word.length <= k) {
      line += `${word} `;
    } else {
      lines.push(line.trim());
      line = `${word} `;
    }
  }
  lines.push(line.trim());

  return lines;
}
