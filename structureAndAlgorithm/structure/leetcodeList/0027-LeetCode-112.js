/*
 * @Author: vayne
 * @Date: 2022-04-25 15:27:39
 * @LastEditTime: 2022-04-25 17:11:41
 * @LastEditors: vayne.nong
 * @Description: 112. 路径总和
 */

// 题目：
// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
// 如果存在，返回 true ；否则，返回 false 。

// 思路：
// 在深度优先遍历过程中，记录当前路径的节点值的和
// 在叶子节点处，判断当前路径的节点值的和是否等于目标值

// 步骤：
// 深度优先遍历二叉树，在叶子节点处，判断当前路径的节点值是否等于目标值，是在返回true
// 遍历结束，如果没有匹配，则返回false

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var hasPathSum = function(root, targetSum) {
  if (!root) return false
  let res = false;

  const dfs = (node, s) => {
    // console.log(node.val, s);
    // 叶子节点
    if (!node.left && !node.right && s === targetSum) {
      res = true
    }
    if (node.left) dfs(node.left, s + node.left.val)
    if (node.right) dfs(node.right,  s + node.right.val)
  }
  dfs(root, root.val)

  return res
};

const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3))
);

console.log(hasPathSum(tree, 5));