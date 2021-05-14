import test from "ava";

import { Node } from "./data-structures/binary-tree/BinaryTree.js";

function lot(root) {
  if (root === null) return results;

  let level = 0;
  const q = [root];
  const nextLevel = [];
  const results = [];

  while (q.length > 0) {
    if (!results[level]) results[level] = [];

    while (q.length > 0) {
      const node = q.shift();
      results[level].push(node.value);

      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }

    while (nextLevel.length > 0) {
      q.push(nextLevel.shift());
    }

    level++;
  }

  return results;
}

test("level order traversal", (t) => {
  const root = new Node(100);
  const left1 = new Node(50);
  const right1 = new Node(200);
  const left11 = new Node(25);
  const right11 = new Node(75);
  const right21 = new Node(350);
  root.left = left1;
  root.right = right1;
  left1.left = left11;
  left1.right = right11;
  right1.right = right21;

  t.deepEqual(lot(root), [[100], [50, 200], [25, 75, 350]]);
});
