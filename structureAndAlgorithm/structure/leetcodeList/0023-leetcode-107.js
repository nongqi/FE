/*
 * @Author: vayne
 * @Date: 2022-04-24 00:07:40
 * @LastEditTime: 2022-04-24 00:24:19
 * @LastEditors: vayne.nong
 * @Description: 求二叉树的最大深度
 */

// 题目描述
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 思路：
// 求最大深度，优先考虑深度遍历
// 在深度遍历的过程中，记录下每一个节点所在层级，找出最大层级即可

// 步骤：
// 新建一个变量，记录最大深度；
// 深度优先遍历整棵树，并记录每个节点的层级，同时不断刷新最大深度的变量；
// 遍历结束，返回最大深度这个变量

// 二叉树的结构
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  // 记录最大深度
  let res = 0;

  const dns = (n, i) => {
    // i 用于记录每一个节点层级
    if (!n) return;
    // console.log(n.val, i);
    // 只在叶子节点刷新最大深度变量，减少计算次数
    if (!n.left && !n.right) res = Math.max(res, i);
    dns(n.left, i + 1);
    dns(n.right, i + 1);
  };
  // 第一层
  dns(root, 1);

  return res;
};

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(17))
);

console.log(maxDepth(tree) === 3);
