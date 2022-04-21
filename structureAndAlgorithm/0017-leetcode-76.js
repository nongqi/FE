/*
 * @Author: vayne
 * @Date: 2022-04-20 23:01:47
 * @LastEditTime: 2022-04-21 13:52:45
 * @LastEditors: vayne.nong
 * @Description: 76. 最小覆盖子串
 */

// 题目描述：
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 思路：
// 先找出所有包含 t 的子串
// 找出长度最小的那个子串，并返回

// 步骤：
// 用双指针维护一个滑动窗口
// 移动右指针，找到包含 t 的子串，移动左指针，尽量减少包含 t 的子串长度
// 循环上述过程，找出包含 t 的最小子串

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  //  左指针
  let l = 0;
  // 右指针
  let r = 0;
  const need = new Map();

  for (const c of t) {
    // 记录 t 子串的字符和对应次数
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  // console.log(need);

  // 用于动态记录 t 对应字符的次数，当为 0 时，表示滑动窗口中已包含子串t (字典的value 可能存在负数)
  // 如果是负数：代表窗口中包含了 t ，但是它不是最小窗口，不符合需求
  let needType = need.size;
  let res = ''

  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      // 减去对应字符在字段中的次数
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) needType--; // 滑动窗口中包含的某（c）个字符的次数已符合t中的对应字符的次数
    }

    // 处理滑动窗口中已包含子串t的情况
    while (needType === 0) {
      // console.log(s.substring(l, r + 1));
      const newRes = s.substring(l, r+1)
      // 对比获取比较小的窗口结果
      if (!res || newRes.length < res.length) res = newRes;

      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType++
        // needType++
      }
      // 左指针向左移动
      l = l + 1;
    }
    // 右指针向左移动

    r = r + 1;
  }
  return res
};

console.log(minWindow('ADOBECODEBANC', 'ABC') === 'BANC');
console.log(minWindow('a', 'a') === 'a');
console.log(minWindow('a', 'tt') === '');
console.log(minWindow('abc', 'b') === 'b');
