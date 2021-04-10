// s - string - determine if s has unique characters
function isUnique(s) {
  const charCount = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = charCount[char] ?? 0 + 1;
    if (charCount[char] > 1) {
      return false;
    }
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
