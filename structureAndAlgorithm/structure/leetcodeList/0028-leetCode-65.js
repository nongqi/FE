/*
 * @Author: vayne
 * @Date: 2022-04-29 21:19:49
 * @LastEditTime: 2022-04-29 21:49:21
 * @LastEditors: vayne.nong
 * @Description: 65. 有效数字
 */

// 步骤：
// 1、构建一个表示状态的图
// 2、遍历字符串，沿着图走，如果到某个节点，无路可走了，就返回false。
// 3、遍历结束，如果返回 3/5/6则返回true，否则返回 false.


/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
   // blank 表示空格，sign表示特殊符号+-，dot表示点号，digit表示数字类型
  const graph = {
    0: {'blank': 0, 'sign': 1, '.': 2, 'digit': 6},
    1: {'digit': 6, '.': 2},
    2: {'digit': 3},
    3: {'digit': 3, 'e': 4, 'E': 4},
    4: {'digit': 5, 'sign': 7},
    5: {'digit': 5},
    6: {'digit': 6,  'e': 4, 'E': 4, '.': 3},
    7: {'digit': 5}
 };

//  记录状态
 let state = 0;
 // 去掉前后空格
 for(c of s.trim()) {
  if (c >= '0' && c <= '9') {
    c = 'digit'
  } else if (c === ' ') {
    c = 'blank'
  } else if (c === '+' || c === '-'){
    c = 'sign';
  }
  state = graph[state][c];

  // 如果在图中没找到对应状态，则返回false
  if (state === undefined) {
    return false
  }
 }

 if (state === 3 || state === 5 || state === 6) {
   return true
 }

 return false;
};

console.log(isNumber("2") === true);
console.log(isNumber("-0.1") === true);
console.log(isNumber("2e10") === true);
console.log(isNumber("-123.456e789") === true);
console.log(isNumber("abc") === false);
console.log(isNumber("-+3") === false);
console.log(isNumber("95a54e53") === false);