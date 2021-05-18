/*
 * Implement a 2D iterator class. It will be initialized with an array of arrays, and should implement the following methods:
next(): returns the next element in the array of arrays. If there are no more elements, raise an exception.
has_next(): returns whether or not the iterator still has elements left.
For example, given the input [[1, 2], [3], [], [4, 5, 6]], calling next() repeatedly should output 1, 2, 3, 4, 5, 6.
Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.
*/

import test from "ava";

class TwoDIterator {
  constructor(twoDArray) {
    this._data = twoDArray;
    this.i = 0;
    this.j = -1;
    this.hasNext = true;
    this.setNextCursor();
  }

  setNextCursor() {
    let i = this.i;
    let j = this.j + 1;
    for (; i < this._data.length; i++) {
      const arr = this._data[i];
      if (j < arr.length) {
        this.j = j;
        this.i = i;
        this.hasNext = true;
        return;
      }
      j = 0;
    }

    this.hasNext = false;
  }

  next() {
    const value = this._data[this.i]?.[this.j];
    this.setNextCursor();
    return value;
  }

  has_next() {
    return this.hasNext;
  }
}

test("2d iterator", (t) => {
  const subject = new TwoDIterator([[1, 2], [3], [], [4, 5, 6]]);
  t.is(subject.next(), 1, "returns 1");
  t.assert(subject.has_next(), "has more 1");
  t.is(subject.next(), 2);
  t.assert(subject.has_next(), "has more 2");
  t.is(subject.next(), 3);
  t.assert(subject.has_next(), "has more 3");
  t.is(subject.next(), 4);
  t.assert(subject.has_next(), "has more 4");
  t.is(subject.next(), 5);
  t.assert(subject.has_next(), "has more 5");
  t.is(subject.next(), 6, "expect 6");
  t.assert(!subject.has_next(), "no more");
});
