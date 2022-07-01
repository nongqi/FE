/*
 * @Author: nongqi
 */
// LeetCode 226 题，翻转二叉树

// 思路：
// - 先翻转左右子树，再进行子树换个位置。
// - 符合“分、解、合”的特性。
// - 考虑选中分而治之。

// 解题步骤：
// 分：获取左右子树
// 解：递归的翻转左右子树
// 合：讲翻转后的左右子树换个位置放到根节点上。

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if(!root) return null
    return {
        val: root.val,
        left: invertTree(root.right),
        right: invertTree(root.left)
    }
};

const tree = new TreeNode(
  4,
  new TreeNode(2, new TreeNode(3), new TreeNode(1)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

invertTree(tree)