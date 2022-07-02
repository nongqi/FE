/*
 * @Author: nongqi
 */
// LeetCode：122. 买卖股票的最佳时机 II

// 解题思路：
// - 前提：上帝视角，知道未来的价格。
// - 局部最优：见好就收，见差就不动，不做任何长远打算

// 解题步骤：
// - 新建一个遍历，用来统计总利润。
// - 遍历价格数组，如果当前价格比昨天高，就在昨天买，今天卖，否则就不交易。
// - 遍历结束后，返回所有利润之和

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);

// 总结
// 时间复杂度 O(n)
// 空间复杂度 O(1)
