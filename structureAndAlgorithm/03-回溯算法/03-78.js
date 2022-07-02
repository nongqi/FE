/*
 * @Author: nongqi
 */
// 78.子集

// 解题思路：
// - 要求：1、所有子集；2、没有重复元素
// - 有出路、有死路
// - 考虑使用回溯算法

// 解题步骤：
// - 用递归模拟出所有情况。
// - 保证接的数字都是后面的数字。
// - 收集所有到达递归终点的情况，并返回

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  /**
   *
   * @param {*} path 拼接的集合
   * @param {*} l 集合的目标长度
   * @param {*} start 在nums中起始位置
   */
  const backtrace = (path, l, start) => {
    if (path.length === l) {
      res.push(path);
      console.log(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      backtrace(path.concat(nums[i]), l, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    backtrace([], i, 0);
  }

  return res;
};

subsets([0])
console.log('=======');
subsets([1,2,3])
