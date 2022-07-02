/*
 * @Author: nongqi
 */
// 题目：LeetCode 198 打家劫舍

// 解题思路
// - f(k) = 从前 k 个房屋中能够偷窃到的最大数额。
// - Ak = 第 k 个房屋的钱数
// - f(k) = max(f(k - 2) + Ak, f(k - 1))

// 解题步骤
// - 定义子问题：f(k) = max(f(k - 2) + Ak, f(k - 1))
// - 反复执行：从 2 循环到 n, 执行上述公式

// 解法一
/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function (nums) {
//   if (nums.length === 0) return 0;
//   // dp[0]是为了公式的初始值不为空而准备的
//   const dp = [0, nums[0]];

//   for (let i = 2; i <= nums.length; i++) {
//     // nums[i-1] 中的 i是目标值（也就是第i家），而目标值所在数组索引为：i-1（索引从0开始）
//     dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
//   }
//   console.log(dp);
//   // dp[0]是辅助用的
//   return dp[dp.length - 1];
// };

// 解法二
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0;
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    const  dp2 = Math.max(dp0 + nums[i - 1], dp1);
    dp0 = dp1;
    dp1 = dp2
  }
  console.log(dp1);
  return dp1;
};

const arr1 = [1, 2, 3, 1];
const arr2 = [2, 7, 9, 3, 1];

console.log(rob(arr1) === 4);
console.log(rob(arr2) === 12);

// 解法一
// 时间复杂度 O(n)
// 空间复杂度 O(n):dp的长度

// 解法二
// 时间复杂度 O(n)
// 空间复杂度 O(1)

// 两个解法主要在于空间复杂度，要牺牲可读性，来提高性能；那么就是牺牲性能，提高可读性
