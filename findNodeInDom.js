import test from "ava";

// Given 2 identical DOM trees (but not equal) and one element of the first DOM tree, how would you find this element in the second DOM tree?
/*
 *   <div id="root1">
      <div>
        <div></div>
      </div>
      <div>
        <div id="node1"></div>
        <div></div>
      </div>
    </div>

    <div id="root2">
      <div>
        <div></div>
      </div>
      <div>
        <div id="node2"></div>
        <div></div>
      </div>
    </div>
  * */

function findNode(rootA, rootB, nodeA) {
  if (rootA === nodeA) return rootB;

  const pathToNode = [];
  let node = nodeA;
  while (node !== root1) {
    const parentElement = node.parentElement;
    const index = Array.from(parentElement.children).indexOf(node);
    pathToNode.unshift(index);
    node = parentElement;
  }

  let resultNode = rootB.children[pathToNode.shift()];
  while (pathToNode.length !== 0) {
    resultNode = resultNode.children[pathToNode.shift()];
  }

  return resultNode;
}

function testFindNode() {
  const root1 = document.querySelector("#root1");
  const root2 = document.querySelector("#root2");
  const node1 = document.querySelector("#node1");

  console.log(findNode(root1, root2, node1)); // this would be #node2
}

test("find node in dom", (t) => {
  t.is(true, true, `This is not unit testable here (yet)`);
});
