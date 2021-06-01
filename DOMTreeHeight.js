import test from "ava";

test("DOM Tree Height", (t) => {
  t.is(true, true, `this is tested in the browser`);
});

/*
 *Height of a tree is the maximum depth from root node. Empty root node have a height of 0.

  If given DOM tree, can you create a function to get the height of it?

  For the DOM tree below, we have a height of 4.

  <div>
    <div>
      <p>
        <button>Hello</button>
      </p>
    </div>
    <p>
      <span>World!</span>
    </p>
  </div>
 * */

function getHeight(root) {
  if (!root) return 0;
  if (root.children.length === 0) return 1;
  return 1 + Math.max(...Array.prototype.map.call(root.children, getHeight));
}

function getHeightRecursive(root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const queueSize = queue.length;
    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();
      queue.push(...node.children);
    }

    depth++;
  }

  return depth;
}
