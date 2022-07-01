/*
 * @Author: nongqi
 */

// leetCode 70. 爬楼梯

// 解题思路
// - 爬到第 n 阶可以在第 n - 1 阶爬 1 个台阶，或者在第 n- 2 阶爬 2 个台阶
// - f(n) = f(n - 1) +  f(n - 2)
// - 使用动态规划

// 解题步骤
// - 定义子问题：  f(n) = f(n - 1) +  f(n - 2)
// - 反复执行： 从 2 循环到 n，执行上诉公式

// 解法1
var climbStairs = function (n) {
  if (n < 2) return 1;
  // dp[0]是主要辅助用的
  const dp = [1, 1];
  for(let i = 2; i <= n; i ++) {
    dp[i] =  dp[i - 1] +  dp[i - 2]
  }
  return dp[n]
};

// 解法2
var climbStairs = function (n) {
    if (n < 2) return 1;
    let dp0 = 1;
    let dp1 = 1;
    for(let i = 2; i <= n; i ++) {
     let temp = dp0;
     dp0 = dp1;
     dp1 =dp1 +  temp;
    }
    return dp1
  };

console.log(climbStairs(1) === 1);
console.log(climbStairs(3) === 3);
console.log(climbStairs(4) === 5);
console.log(climbStairs(5) === 8);

// 解法一
// 时间复杂度 O(n)
// 空间复杂度 O(n):dp的长度

// 解法二
// 时间复杂度 O(n)
// 空间复杂度 O(1)

// 两个解法主要在于空间复杂度，要牺牲可读性，来提高性能；那么就是牺牲性能，提高可读性