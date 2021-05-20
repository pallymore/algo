/*
 * Given a singly linked list

    L: L0 → L1 → … → Ln-1 → Ln,

reorder it to:

    L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

You must do this in-place without altering the nodes’ values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.

*/

import test from "ava";

function Node(data) {
  this.data = data;
  this.next = null;
}

function reorderList(head) {
  if (head === null) return head;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head2 = slow.next;
  slow.next = null;

  const secondHalf = [];
  while (head2 !== null) {
    secondHalf.push(head2);
    head2 = head2.next;
  }

  let prev = head;
  while (secondHalf.length > 0) {
    const next = prev.next;
    const tail = secondHalf.pop();

    prev.next = tail;
    tail.next = next;
    prev = next;
  }

  return head;
}

test("reorderList", (t) => {
  const head = new Node(1);
  let prev = head;
  [2, 3, 4].forEach((value) => {
    const node = new Node(value);
    prev.next = node;
    prev = node;
  });

  reorderList(head);

  t.deepEqual(listToArray(head), [1, 4, 2, 3]);
});

test("reorderList2", (t) => {
  const head = new Node(1);
  let prev = head;
  [2, 3, 4, 5, 6].forEach((value) => {
    const node = new Node(value);
    prev.next = node;
    prev = node;
  });

  reorderList(head);

  t.deepEqual(listToArray(head), [1, 6, 2, 5, 3, 4]);
});

test("reorderList 3 ", (t) => {
  const head = new Node(93);
  let prev = head;
  [
    37,
    3,
    61,
    91,
    100,
    99,
    23,
    101,
    68,
    77,
    49,
    26,
    43,
    20,
    10,
    8,
    51,
    60,
    30,
    59,
    58,
    73,
    85,
    38,
    64,
    5,
    88,
    33,
    31,
    29,
    13,
    78,
    98,
    6,
    74,
    45,
    89,
    42,
    47,
    14,
    16,
    97,
    90,
    27,
    81,
    71,
    84,
    2,
    57,
    21,
    15,
    17,
    18,
    40,
    19,
    1,
    46,
    32,
  ].forEach((value) => {
    const node = new Node(value);
    prev.next = node;
    prev = node;
  });

  reorderList(head);

  t.deepEqual(listToArray(head), [
    93,
    32,
    37,
    46,
    3,
    1,
    61,
    19,
    91,
    40,
    100,
    18,
    99,
    17,
    23,
    15,
    101,
    21,
    68,
    57,
    77,
    2,
    49,
    84,
    26,
    71,
    43,
    81,
    20,
    27,
    10,
    90,
    8,
    97,
    51,
    16,
    60,
    14,
    30,
    47,
    59,
    42,
    58,
    89,
    73,
    45,
    85,
    74,
    38,
    6,
    64,
    98,
    5,
    78,
    88,
    13,
    33,
    29,
    31,
  ]);
});

function listToArray(head) {
  const arr = [];
  let current = head;

  while (current != null) {
    arr.push(current.data);
    current = current.next;
  }

  return arr;
}
