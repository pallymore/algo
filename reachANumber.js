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

test("reachNumber", (t) => {
  t.assert(reachNumber(3) === 2);
  t.assert(reachNumber(2) === 3);
  t.assert(reachNumber(-2) === 3);
});
