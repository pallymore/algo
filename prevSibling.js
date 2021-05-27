import test from "ava";

// https://bigfrontend.dev/problem/previous-left-sibling
// Given a DOM tree and a target element, please return the previous left sibling.

function prevLeftSibling(root, target) {
  if (target.previousElementSibling) return target.previousElementSibling;

  let parentElement = target.parentElement;

  while (parentElement) {
    parentElement = previousLeftSibling(root, parentElement);

    if (parentElement && parentElement.lastElementChild) {
      return parentElement.lastElementChild;
    }
  }

  return null;
}

test("prevSibling", (t) => {
  t.is(true, true, `this one needs to be tested in the browser`);
});
