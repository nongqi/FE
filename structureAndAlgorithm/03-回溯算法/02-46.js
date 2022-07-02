/*
 * @Author: nongqi
 */
// 46. 全排列

// 解题思路
// - 要求：1、所有排列情况；2、没有重复元素。
// - 有处理、有死路。
// - 考虑使用回溯算法

// 解题步骤
// - 用递归模拟出所有情况。
// -遇到包含重复元素的情况，就回溯。
// - 收集所有到达递归终端的情况，并返回。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const backtrace = (path) => {
    if (path.length === nums.length) {
      // 如果数组长度满足 ，则添加添加到res中
      res.push(path);
      // console.log(path);
      return;
    }
    nums.forEach((n) => {
      // 如果存在重复，则回溯，
      if (path.includes(n)) return;
      backtrace(path.concat(n));
    });
  };

  backtrace([]);

  return res;
};

console.log(permute([1, 2, 3]));
console.log("=====");
console.log(permute([0, 1])); // => [[0,1],[1,0]]

// 总结：
// 时间复杂度 O(n!)
// 空间复杂度 O(n)
