// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,
// return 1->4->3->2->5->NULL.

import test from "ava";
import { arrayToLinkedList } from "./data-structures/linked-list/LinkedList.js";

function reversePartialLinkedList(head, start, end) {
  if (head === null) return head;
  if (start === end) return head;
  let nodeBeforeStart = start === 1 ? null : head;
  for (let i = 2; i < start; i++) {
    nodeBeforeStart = head.next;
  }
  let nodeAfterEnd = start === 1 ? head : nodeBeforeStart;
  let endNode = null;
  for (let i = start; i <= end + 1; i++) {
    if (i === end) {
      endNode = nodeAfterEnd.next;
    }
    nodeAfterEnd = nodeAfterEnd && nodeAfterEnd.next;
  }
  if (endNode) {
    endNode.next = null;
  }
  const startNode = nodeBeforeStart ? nodeBeforeStart.next : head;
  if (nodeBeforeStart) {
    nodeBeforeStart.next = null;
  }
  reverseLinkedList(startNode);

  if (nodeBeforeStart) {
    nodeBeforeStart.next = endNode;
  }
  startNode.next = nodeAfterEnd;

  return head;
}

function reverseLinkedList(head) {
  if (head === null) return head;
  let prev = head;
  let current = prev.next;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

test("reverse linked list", (t) => {
  const inputArr = arrayToLinkedList([1, 2, 3, 4, 5]);
  reversePartialLinkedList(inputArr.head, 2, 4);
  const result = inputArr.toString();
  t.assert(result === "1 -> 4 -> 3 -> 2 -> 5", `Got: ${result}`);
});
