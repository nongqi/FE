/*
 * @Author: vayne
 * @Date: 2022-04-25 12:33:44
 * @LastEditTime: 2022-04-25 13:45:48
 * @LastEditors: vayne.nong
 * @Description: 102. 二叉树的层序遍历
 */

// 题目：给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 思路：
// 层级遍历顺序就是广度优先遍历
// 不过在遍历的时候，需要记录当前节点所在层级，方便将其添加到不同的数组中

// 步骤：
// 广度优先遍历二叉树
// 在遍历过程中，记录每个节点的层级，并将其添加到不同的数组中

// tip、先写广度优先遍历，后面在考虑层级

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


// 第一种解法
// 时间复杂度为On: 一个循环
// 空间复杂度： On^2 一个队列和一个res数组
// 第一种解法是每一个节点都push一次。有没有办法，在一个层级的时候才push一次呢？（把老层级一次shift，新层级直接一次push）


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//  var levelOrder = function(root) {
//   if (!root) return []
//   const queue = [[root, 0]];
//   const res = []

//   while(queue.length) {
//     const [node, level] = queue.shift()
//     // console.log(node.val, level);
//     if (!res[level]) {
//       // 对应 level 还未存在情况，直接 push
//       res.push([node.val])
//     } else {
//       // 已存在对应 level，则在对应 level 中 push
//       res[level].push(node.val)
//     }
//     if(node.left) queue.push([node.left, level + 1])
//     if(node.right) queue.push([node.right, level + 1])
//   }

//   return res
// };


// 第二种解法：
// （把老层级一次shift，新层级直接一次push），第一种解法是每一个节点都shift 和 push
var levelOrder = function(root) {
  if (!root) return []
  const queue = [root];
  const res = []

  while(queue.length) {
    // const node = queue.shift()
    // console.log(node.val);
    let len = queue.length
    res.push([])
    while(len--){
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
   
  }

  return res
};



const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(levelOrder(tree));