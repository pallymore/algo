// given a series of meeting intervals including start and end times [[s1,e1],[s2,e2],...] (si < ei) - find the minimum number of meeting rooms required.
// e.g. input intervals = [(0,30),(5,10),(15,20)] output = 2
// e.g. input intervals = [(2, 7)] output = 1

import test from "ava";

function minMeetingRooms(intervals) {
  if (intervals.length <= 1) return intervals.length;
  const sorted = intervals.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  let rooms = [[sorted[0]]];
  let visited = {};

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const key = `${start}-${end}`;
    if (visited[key]) {
      continue;
    }

    visited[key] = true;

    let found = false;
    for (let j = 0; j < rooms.length; j++) {
      const room = rooms[j];
      found = room.every(([s, e]) => {
        return e < start || s > end;
      });
      if (found) {
        room.push([start, end]);
        break;
      }
    }

    if (!found) {
      rooms.push([[start, end]]);
    }
  }

  return rooms.length;
}

// optionally - use a minHeap or priority queue to store end time
// sort interval by start time.
// for each interval - check which meeting ends the earliest, if found, replace it in the PQ
// if not, push the interval to the PQ.
// at the end - check number of records in the PQ.

test("minMeetingRooms", (t) => {
  t.assert(minMeetingRooms([[2, 7]]) === 1);
  t.assert(
    minMeetingRooms([
      [0, 30],
      [5, 10],
      [15, 20],
    ]) === 2
  );
});
