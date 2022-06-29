/*
 * @Author: vayne
 * @Date: 2022-04-19 22:39:23
 * @LastEditTime: 2022-04-19 23:09:18
 * @LastEditors: vayne.nong
 * @Description: 20、有效括号
 */

// 题目描述：
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 思路：
// 具有对称性，利用栈的先进后出的特性

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 2 === 1) return false;

  const map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');

  const stack = [];

  for (let i = 0; i < len; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      const top = stack[stack.length - 1];
      if (map.get(top) === s[i]) {
        stack.pop();
      } else {
        // 对应位置的栈顶和遍历的s[i]不一致，则返回FALSE
        return false
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid('()') === true);
console.log(isValid(']') === false);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('([)]') === false);
console.log(isValid('([}}])') === false);
