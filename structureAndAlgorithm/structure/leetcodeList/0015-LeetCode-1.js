/*
 * @Author: vayne
 * @Date: 2022-04-19 23:13:24
 * @LastEditTime: 2022-04-19 23:40:21
 * @LastEditors: vayne.nong
 * @Description: 1. 两数之和
 */

// 题目：
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target  的那两个整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 思路：
// 把 nums 看成相亲者们
// 把 target 想象成匹配条件
// 用一个字典建立一个婚姻介绍所，存储相亲者的数字和下标

// 步骤
// 用字典建立一个婚姻介绍所
// nums 里的值，逐个来介绍所找对象，如果没有合适的就按登记着，有合适的就牵手成功

var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i ++) {

    // 和等于 target(牵手条件)，也可以理解为：target - 其中一个 = 另一个
    const n2 = target - nums[i]

    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(nums[i], i)
    }
  }
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]

// 总结：
// 时间复杂度On: 一个循环
// 空间复杂度On 一个 map