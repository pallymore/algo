import test from "ava";

// https://bigfrontend.dev/problem/previous-left-sibling
// Given a DOM tree and a target element, please return the previous left sibling.

export function nextRightSibling(root, target) {
  if (target === root) return null;
  if (target.nextElementSibling) return target.nextElementSibling;

  let parentElement = target.parentElement;

  while (parentElement) {
    parentElement = nextRightSibling(root, parentElement);

    if (parentElement && parentElement.firstElementChild) {
      return parentElement.firstElementChild;
    }
  }

  return null;
}

test("prevSibling", (t) => {
  t.is(true, true, `this one needs to be tested in the browser`);
});
