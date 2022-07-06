/*
 * @Author: vayne
 * @Date: 2022-04-18 22:41:02
 * @LastEditTime: 2022-04-18 23:40:59
 * @LastEditors: vayne.nong
 * @Description: 349. 两个数组的交集
 */

// 要求：给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

// 思路：
// 值是唯一的，且无序，那么可以考虑用集合 Set

// 步骤
// 使用集合对 nums1 去重(因为不然重复的值会再次遍历)
// 遍历 nums1 ，筛选出 num2 中也包含的值
 

// 解法一
// var intersection = function(nums1, nums2) {
//   return [...new Set(nums1)].filter(item => nums2.includes(item))
// };

// 解法二：
// 利用字典的映射关系和key的唯一性
var intersection = function(nums1, nums2) {
  const map = new Map();
  const res = []

  // 把nums1存储到map中
  nums1.forEach(item => {
    map.set(item, true)
  })

  
  nums2.forEach(item => {
    // 如果item存在于map中，则为交集部分
    if (map.get(item)) {
      res.push(item)
      // 避免重复
      map.delete(item)
    }
  })

  return res;
}


const arr1 = [1,2,2,1];
const arr2 = [2,2]

console.log(intersection(arr1, arr2));

const arr3 = [4,9,5];
const arr4 = [9,4,9,8,4]

console.log(intersection(arr3, arr4));

const arr5 = [];
const arr6 = []

console.log(intersection(arr5, arr6));

// 总结：
// 解法一
// 时间复杂度: O(n^2): 一个 filter 一个 includes 的嵌套
// 空间复杂度: O(n): 返回的一个数组

// 解法二
// 时间复杂度: O(n): 存在遍历，但无嵌套遍历
// 空间复杂度: O(n): 同一个作用域里的一个数组和 map 无嵌套