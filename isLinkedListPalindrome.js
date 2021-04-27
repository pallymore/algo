import test from "ava";

import { arrayToDoubleLinkedList } from "./data-structures/double-linked-list/DoubleLinkedList.js";
import { arrayToLinkedList } from "./data-structures/linked-list/LinkedList.js";

function isLinkedListPalindrome(list) {
  let head = list.head;
  let tail = list.tail;

  while (head !== tail) {
    if (head.value !== tail.value) return false;
    head = head.next;
    tail = tail.previous;
  }

  return true;
}

function isSingleLinkedListPalindrome(list) {
  const leftHalf = []; // stack
  let slowPointer = list.head;
  let fastPointer = list.head;
  if (!slowPointer) return false;
  if (!slowPointer.next) return true;
  if (!fastPointer.next?.next)
    return slowPointer.value === slowPointer.next.value;

  let isEven = false;
  while (fastPointer) {
    leftHalf.push(slowPointer.value);
    slowPointer = slowPointer.next;
    if (fastPointer.next && !fastPointer.next?.next) {
      isEven = true;
    }
    fastPointer = fastPointer.next?.next;
  }

  if (isEven) {
    leftHalf.push(slowPointer.value);
  } else {
    leftHalf.pop();
  }

  while (slowPointer.next) {
    const left = leftHalf.pop();
    if (left !== slowPointer.value) return false;
    slowPointer = slowPointer.next;
  }

  return true;
}

const testCases = [
  {
    input: [1, 4, 3, 4, 1],
    expected: true,
  },
  {
    input: [1, 4, 3, 4, 1, 3],
    expected: false,
  },
  {
    input: [1, 4, 4, 1],
    expected: true,
  },
  {
    input: [1, 4, 4, 1, 3],
    expected: false,
  },
  {
    input: [1],
    expected: true,
  },
  {
    input: [1, 1],
    expected: true,
  },
  {
    input: [1, 4],
    expected: false,
  },
];

test("isLinkedListPalindrome", (t) => {
  testCases.forEach(({ expected, input }) => {
    const actual = isLinkedListPalindrome(arrayToDoubleLinkedList(input));
    t.assert(
      expected === actual,
      `Expected ${input.toString()} is ${expected ? "" : "not "} a palindrome.`
    );
  });
});

test("isSingleLinkedListPalindrome", (t) => {
  testCases.forEach(({ expected, input }) => {
    const actual = isSingleLinkedListPalindrome(arrayToLinkedList(input));
    t.assert(
      expected === actual,
      `Expected ${input.toString()} is ${expected ? "" : "not "} a palindrome.`
    );
  });
});
