import test from "ava";

const encode = (str) => {
  if (str.length === 0) return str;

  let result = "";
  let currentSize = 1;
  let prevChar = str.charAt(0);

  for (let i = 1; i < str.length; i++) {
    const char = str.charAt(i);
    if (char === prevChar) {
      currentSize++;
    } else {
      result += `${currentSize}${prevChar}`;
      prevChar = char;
      currentSize = 1;
    }
  }

  result += `${currentSize}${prevChar}`;

  return result;
};

const decode = (str) => {
  let result = "";
  let counterStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (/\d/.test(char)) {
      counterStr += char;
    } else {
      const count = Number(counterStr);

      result += new Array(count).fill(char).join("");

      counterStr = "";
    }
  }

  return result;
};

test("run length encoding", (t) => {
  t.is(encode("A"), "1A");
  t.is(decode("1A"), "A");
  t.is(encode("AAAABBBCCDAA"), "4A3B2C1D2A");
  t.is(decode("4A3B2C1D2A"), "AAAABBBCCDAA");
  t.is(encode(""), "");
  t.is(decode(""), "");
});
