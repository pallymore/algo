/*
  Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:
  set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
  get(key): gets the value at key. If no such key exists, return null.
  Each operation should run in O(1) time.
*/

import test from "ava";
// LRU = hash + double linked List -> head = most used, tail = least used.
import {
  Node,
  DoubleLinkedList,
} from "./data-structures/double-linked-list/DoubleLinkedList.js";

export class LRU {
  constructor(n) {
    this.cacheSize = n;
    this.__hash = Object.create(null);
    this.__list = new DoubleLinkedList(null);
  }

  set(key, value) {
    if (this.__hash[key]) {
      // node exists, replace that node's value
      this.__hash[key].value = value;
      this.__list.makeHead(this.__hash[key]);
      return;
    }

    const node = new Node(value);

    if (this.currentSize > 0 && this.currentSize === this.cacheSize) {
      const tail = this.__list.tail;
      this.__list.removeNode(tail);
      const keyToRemove = Object.keys(this.__hash).find((key) => {
        return this.__hash[key] === tail;
      });
      delete this.__hash[keyToRemove];
    }
    this.__list.makeHead(node);
    this.__hash[key] = node;
  }

  get currentSize() {
    return Object.keys(this.__hash).length;
  }

  get(key) {
    const node = this.__hash[key];
    if (!node) return null;
    this.__list.makeHead(node);
    return node.value;
  }
}

test("LRU", (t) => {
  const lru = new LRU(2);
  lru.set("foo", 1);
  t.assert(lru.get("foo") === 1);
  lru.set("bar", 2);
  t.assert(lru.get("bar") === 2);
  lru.set("bar", 3);
  t.assert(lru.get("bar") === 3);
  lru.set("baz", 4);
  t.assert(lru.get("baz") === 4);
  t.assert(lru.get("foo") == null);
});
