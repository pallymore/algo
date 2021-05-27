import test from "ava";

function compare(v1, v2) {
  if (v1 === v2) return 0;
  const [major1, minor1, patch1] = v1.split(".").map(Number);
  const [major2, minor2, patch2] = v2.split(".").map(Number);
  if (major1 > major2) return 1;
  if (major1 < major2) return -1;
  if (minor1 > minor2) return 1;
  if (minor1 < minor2) return 1;

  return patch1 > patch2 ? 1 : -1;
}

test("compare sem ver", (t) => {
  t.is(compare("12.1.0", "12.0.9"), 1);
  t.is(compare("12.1.0", "12.1.2"), -1);
  t.is(compare("5.0.1", "5.0.1"), 0);
});
