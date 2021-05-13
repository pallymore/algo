import test from "ava";

// Given a list of daily stock prices (integers for simplicity), return the buy and sell prices for making the maximum profit.

function stock(prices) {
  let lowest = prices[0];
  let sell = prices[1];
  let maxProfit = sell - lowest;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - lowest;
    if (profit > maxProfit) {
      maxProfit = profit;
      sell = prices[i];
    }
    if (prices[i] < lowest) {
      lowest = prices[i];
    }
  }

  return [sell - maxProfit, sell];
}

const testCases = [
  {
    input: [8, 5, 12, 9, 19, 1],
    expected: [5, 19],
  },
  {
    input: [21, 12, 11, 9, 6, 3],
    expected: [12, 11],
  },
];

test("stock - one", (t) => {
  testCases.forEach(({ input, expected }) => {
    const actual = stock(input);
    t.deepEqual(actual, expected);
  });
});
