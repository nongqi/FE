/*
 * @Author: vayne
 * @Date: 2022-04-18 22:41:02
 * @LastEditTime: 2022-04-18 22:53:20
 * @LastEditors: vayne.nong
 * @Description: 349. 两个数组的交集
 */

// 要求：给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 思路：
// 值是唯一的，且无序，那么可以考虑用集合 Set

// 步骤
// 使用集合对 nums1 去重(因为不然重复的值会再次遍历)
// 遍历 nums1 ，筛选出 num2 中也包含的值
 

var intersection = function(nums1, nums2) {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
};


const arr1 = [1,2,2,1];
const arr2 = [2,2]

console.log(intersection(arr1, arr2));

const arr3 = [4,9,5];
const arr4 = [9,4,9,8,4]

console.log(intersection(arr3, arr4));

// 总结：
// 时间复杂度: O(n^2): 一个 filter 一个 includes 的嵌套
// 空间复杂度: O(n): 返回的一个数组