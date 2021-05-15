import test from "ava";

const rand7 = () => {
  return 1 + Math.random() * 6;
};

const rand5FromRand7 = () => {
  let r = Infinity;

  while (r > 5) {
    r = rand7();
  }

  return r;
};

test("rand5FromRand7", (t) => {
  for (let i = 0; i < 10000; i++) {
    const r = rand5FromRand7();
    t.assert(r >= 1 && r <= 5);
  }
});
