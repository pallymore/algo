export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  appendNode(value) {
    const node = new Node(value);
    if (!this.head || !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  toString() {
    let currentNode = this.head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values.join(" -> ");
  }

  print() {
    console.log(this.toString());
  }
}

export const arrayToLinkedList = (arr) => {
  const list = new LinkedList();
  arr.forEach((v) => list.appendNode(v));
  return list;
};
