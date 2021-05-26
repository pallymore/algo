import test from "ava";

// WeakMap vs Map
// WeakMap -> keys are objects only
// Map -> keys can be objects or other types like Symbol or string
// WeakMap -> not enumerable; weak reference to the object; no list of keys available
// Map -> enumerable; STRONG reference to the object (not garbage collected if object is deleted); can provide list of keys; ORDERED

class NodeStore {
  constructor() {
    this.store = new WeakMap();
  }

  set(node, value) {
    this.store.set(node, value);
  }

  get(node) {
    return this.store.get(node);
  }

  has(node) {
    return this.store.has(node);
  }
}

class NodeStoreArray {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  has(node) {
    return this.keys.includes(node);
  }

  set(node, value) {
    const index = this.keys.indexOf(node);
    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(node);
      this.values.push(value);
    }
  }

  get(node) {
    const index = this.keys.indexOf(node);
    if (index < 0) return null;
    return this.values[index];
  }
}

test("node store", (t) => {
  t.assert(1 === 1);
});
