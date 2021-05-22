// Design and implement a HitCounter class that keeps track of requests (or hits). It should support the following operations:

// record(timestamp): records a hit that happened at timestamp
// total(): returns the total number of hits recorded
// range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)

import test from "ava";

function HitCounter() {
  this._total = 0;
  this.hits = {};
}

HitCounter.prototype.record = function (timestamp) {
  this._total++;
  if (this.hits[timestamp]) {
    this.hits[timestamp]++;
  } else {
    this.hits[timestamp] = 1;
  }
};

HitCounter.prototype.total = function () {
  return this._total;
};

HitCounter.prototype.range = function (lower, upper) {
  return Object.keys(this.hits).reduce((rangeTotal, timestamp) => {
    if (timestamp >= lower && timestamp <= upper) {
      rangeTotal += this.hits[timestamp];
    }
    return rangeTotal;
  }, 0);
};

test("HitCounter", (t) => {
  const c = new HitCounter();
  c.record(0);
  c.record(1);
  c.record(2);
  c.record(1);
  c.record(3);
  t.is(c.total(), 5);
  t.is(c.range(1, 2), 3);
  t.is(c.range(0, 2), 4);
  t.is(c.range(2, 3), 2);
  t.is(c.range(2, 5), 2);
  t.is(c.range(4, 9), 0);
});
