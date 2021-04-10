/*
Note Each toy can be purchased only once.

Example

prices = [1,2,3,4]
k = 7

The budget is  units of currency. He can buy items that cost  for , or  for  units. The maximum is  items.

Function Description

Complete the function maximumToys in the editor below.

maximumToys has the following parameter(s):

int prices[n]: the toy prices
int k: Mark's budget
Returns

int: the maximum number of toys
Input Format

The first line contains two integers,  and , the number of priced toys and the amount Mark has to spend.
The next line contains  space-separated integers 
*/

function markAndToys(prices, k) {
  const sortedPrices = prices.sort((a, b) => (a > b ? 1 : -1));

  let total = 0;
  for (let i = 0; i < sortedPrices.length; i++) {
    const p = sortedPrices[i];
    if (p > k) break;
    k = k - p;
    total++;
  }

  return total;
}
