/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */
// 题目：LeetCode 213 打家劫舍||

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
var rob = function (nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(nums[0], nums[1]);

  // 只有nums长度为3时才有可能出现首尾相连
/**
 * 如果出现首尾相连那么：从索引 0 到 nums 的倒数第二，范围内拿钱（[0, num.length - 2]），或者从 1 到 nums倒数第一中拿钱[1, num.length - 1]
 * 这样可以避免首尾碰到，保证了第一间房屋和最后一间房屋不同时偷窃
 * 然后再从两个范围内的总数中取最大值
 */
  return Math.max(
    robRange(nums.slice(0, length - 1)),
    robRange(nums.slice(1, length))
  );
};

const robRange = (nums) => {
  if (nums.length === 0) return 0;
  const dp = [0, nums[0]];

  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
  }
  console.log(dp);
  return dp[dp.length - 1];
};

const arr1 = [2, 3, 2];
const arr2 = [1, 2, 3, 1];
const arr3 = [1, 2, 3];

console.log(rob(arr1) === 3);
console.log(rob(arr2) === 4);
console.log(rob(arr3) === 3);

// 解法一
// 时间复杂度 O(n)
// 空间复杂度 O(n):dp的长度

// 解法二
// 时间复杂度 O(n)
// 空间复杂度 O(1)

// 两个解法主要在于空间复杂度，要牺牲可读性，来提高性能；那么就是牺牲性能，提高可读性
