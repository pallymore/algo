import test from "ava";
/*
  *
  * Given a grid of characters output a decoded message. The message for the following would be IROCLED. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)
  * I B C A L K A
    D R F C A E A
    G H O E L A D
  * */

function decode(grid) {
  let decoded = "";

  let direction = 1;
  for (
    let i = 0, j = 0;
    i < grid.length && j < grid[i].length;
    i += direction, j++
  ) {
    if (i === 0) direction = 1;
    if (i === grid.length - 1) direction = -1;
    decoded += grid[i][j];
  }

  return decoded;
}

test("decode grid of chars", (t) => {
  const input = ["IBCALKA", "DRFCAEA", "GHOELAD"].map((s) => s.split(""));
  const expected = "IROCLED";
  const actual = decode(input);
  t.is(expected, actual);
});
