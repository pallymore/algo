export class Node {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

export class DoubleLinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
  }

  removeNode(node) {
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.previous;

    if (node.previous) {
      node.previous.next = node.next;
    }
    if (node.next) {
      node.next.previous = node.previous;
    }
    node.previous = null;
    node.next = null;
  }

  makeHead(newHead) {
    this.removeNode(newHead);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      return;
    }
    newHead.next = this.head;
    this.head.previous = newHead;
    this.head = newHead;
  }

  print() {
    let currentNode = this.head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(" <-> "));
  }
}
