/*
 * @Author: vayne
 * @Date: 2022-04-25 14:00:35
 * @LastEditTime: 2022-04-25 14:55:19
 * @LastEditors: vayne.nong
 * @Description: 94. 二叉树的中序遍历
 */

// 题目：给定一个二叉树的根节点 root ，返回 它的 中序 遍历 

// 思路：中序遍历：左根右

function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//  var inorderTraversal = function(root) {
//   //  递归实现
//   const res = []

//   const rec = (node) => {
//     if (!node) return
//     rec(node.left)
//     res.push(node.val)
//     rec(node.right)
//   }

//   rec(root)

//   return res
// };

var inorderTraversal = function (root) {
  // 迭代形式实现-栈
  const res = [];
  const stack = [];
  let p = root;

  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left
    }
    const top = stack.pop()
    res.push(top.val)
    p = top.right
  }

  return res
}


const tree = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3))
);

console.log(inorderTraversal(tree));