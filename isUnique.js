import test from "ava";

// s - string - determine if s has unique characters
function isUnique(s) {
  const charMap = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }
  return true;
}

// does the same thing but without using any additional data structures
function isUniqueNoHash(s) {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] === char) {
        return false;
      }
    }
  }
  return true;
}

test("isUnique", (t) => {
  t.assert(isUnique("of bar"));
  t.assert(isUniqueNoHash("of bar"));

  t.assert(!isUniqueNoHash("babara"));
  t.assert(!isUnique("babara"));
});
