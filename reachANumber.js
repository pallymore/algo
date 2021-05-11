import test from "ava";

const reachNumber = function (x) {
  const queue = [{ n: 0, step: 0 }];

  while (queue.length > 0) {
    let { n, step } = queue[0];
    if (n === x) return step;

    step++;
    const left = n + step;
    const right = n - step;
    queue.push({ n: left, step });
    queue.push({ n: right, step });
    queue.shift();
  }
};

const reachNumberFaster = function (x) {
  x = Math.abs(x);
  let n = Math.ceil(Math.sqrt(1 + 8 * x) / 2 - 0.5);
  while (x % 2 !== ((n * (n + 1)) / 2) % 2) {
    n += 1;
  }

  return n;
};

test("reachNumber", (t) => {
  t.assert(reachNumber(3) === 2);
  t.assert(reachNumber(2) === 3);
  t.assert(reachNumber(-2) === 3);

  t.assert(reachNumberFaster(3) === 2);
  t.assert(reachNumberFaster(2) === 3);
  t.assert(reachNumberFaster(-2) === 3);
});
