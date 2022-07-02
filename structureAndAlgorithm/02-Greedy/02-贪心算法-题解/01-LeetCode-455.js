/*
 * @Author: nongqi
 */
// LeetCode 455.分饼干

// 解题思路：
// - 局部最优：既能满足孩子，还消耗最少。
// - 先将“较小的饼干”分给“胃口最小”的孩子

// 解题步骤：
// - 对饼干数组和胃口数组进行升序排序
// - 遍历饼干数组，找到能满足第一个孩子的饼干。
// - 然后继续遍历饼干数组，找到满足第二、三、......、n个孩子的饼干

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const sortFunc = (a, b) => a - b;
  g.sort(sortFunc);
  s.sort(sortFunc);
  let i = 0;
  s.forEach((n) => {
    if (n >= g[i]) {
      i++;
    }
  });
  return i;
};

console.log(findContentChildren([1, 2, 3], [1, 1]) === 1);
console.log(findContentChildren([1, 2], [1, 2, 3]) === 2);

// 总结：
// 时间复杂度O(n)
// 空间复杂度O(1)
