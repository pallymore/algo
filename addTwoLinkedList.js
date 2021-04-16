/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

import test from "ava";

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToList(n) {
  const head = new ListNode(n[0]);
  let current = head;

  for (let i = 1; i < n.length; i++) {
    const node = new ListNode(n[i]);
    current.next = node;
    current = node;
  }

  return head;
}

function listToArray(l) {
  const arr = [];
  let current = l;

  while (current != null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoLinkedLists(l1, l2) {
  let c1 = l1;
  let c2 = l2;
  let carryover = 0;
  let resultCurrent;
  let resultHead;

  while (c1 || c2) {
    let digit = (c1?.val ?? 0) + (c2?.val ?? 0) + carryover;
    carryover = 0;

    if (digit >= 10) {
      carryover = 1;
      digit = digit - 10;
    }

    const node = new ListNode(digit);
    if (resultCurrent) {
      resultCurrent.next = node;
    } else {
      resultHead = node;
    }
    resultCurrent = node;

    c1 = c1?.next;
    c2 = c2?.next;
  }

  if (carryover > 0) {
    const node = new ListNode(carryover);
    resultCurrent.next = node;
  }

  return resultHead;
}

const testCases = [
  {
    input: [arrayToList([2, 4, 3]), arrayToList([5, 6, 4])],
    expectedArray: [7, 0, 8],
  },
  {
    input: [arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9])],
    expectedArray: [8, 9, 9, 9, 0, 0, 0, 1],
  },
];

test("addTwoLinkedLists", (t) => {
  testCases.forEach(({ input, expectedArray }) => {
    const actual = addTwoLinkedLists(...input);
    const actualArray = listToArray(actual);
    t.deepEqual(actualArray, expectedArray);
  });
});
