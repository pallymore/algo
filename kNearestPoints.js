// Given a list of points, a central point, and an integer k, find the nearest k points from the central point.
// For example, given the list of points [(0, 0), (5, 4), (3, 1)], the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].

import test from "ava";

function getDistance(p1, p2) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const xDiff = Math.abs(x1 - x2);
  const yDiff = Math.abs(y1 - y2);

  return Math.sqrt(xDiff ** 2 + yDiff ** 2);
}

function kNearest(points, center, k) {
  return points
    .sort((a, b) => {
      const distanceA = getDistance(a, center);
      const distanceB = getDistance(b, center);

      return distanceA < distanceB ? -1 : 1;
    })
    .slice(0, k);
}

test("k nearest points", (t) => {
  const points = [
    [0, 0],
    [5, 4],
    [3, 1],
  ];
  const center = [1, 2];
  const k = 2;
  const expected = [
    [0, 0],
    [3, 1],
  ];
  const actual = kNearest(points, center, k);
  t.deepEqual(expected, actual);
});
