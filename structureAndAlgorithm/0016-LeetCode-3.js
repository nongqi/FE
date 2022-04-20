/*
 * @Author: vayne
 * @Date: 2022-04-20 00:09:18
 * @LastEditTime: 2022-04-20 01:10:44
 * @LastEditors: vayne.nong
 * @Description: 3. 无重复字符的最长子串
 */

// 题目：给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 思路：
// 先找出所有不包含重复字符串的子串
// 找出最大的子串，并返回其长度

// 步骤：
// 用双指针维护一个滑动窗口（类似音频剪辑），用来剪切字符串
// 不断的移动右指针，遇到重复的字符，就把左指针移动到重复字符(left所指的索引)的的下一位 （left + 1）
// 过程中，记录所有窗口的长度，并返回最大值

var lengthOfLongestSubstring = function (s) {
  // 左指针
  let left = 0;
  // 最大窗口长度
  let res = 0;
  const map = new Map();
  // right为右指针
  for (let right = 0; right < s.length; right++) {
    // map.get(s[right] > left：是为了防止再去查询已经重复的数据（左指针以前的索引）
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      left = map.get(s[right]) + 1;
    }

    // 获取最大长度
    res = Math.max(res, right - left + 1);
    map.set(s[right], right);
  }
  return res;
};

// 测试用例
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbb') === 1);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
console.log(lengthOfLongestSubstring('abbcdea') === 5);
