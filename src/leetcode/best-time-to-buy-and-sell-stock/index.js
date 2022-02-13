// https://leetcode.com/submissions/detail/632532919/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = 1_000_000;
  let best = 0;
  let price = 0;
  let profit = 0;

  for (let day = 0; day < prices.length; day++) {
    price = prices[day];

    if (price < minPrice) {
      minPrice = price;
    }

    profit = price - minPrice;

    if (profit > best) {
      best = profit;
    }
  }

  return best;
};
