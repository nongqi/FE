/*
 * @Author: vayne
 * @Date: 2022-04-24 23:50:13
 * @LastEditTime: 2022-04-25 00:32:51
 * @LastEditors: vayne.nong
 * @Description: 111. 求二叉树最小深度
 */

// 思路：
// 1、求二叉树最小深度，优先想到广度优先遍历
// 2、遇到叶子节点，则停止遍历，并返回节点层级

// 广度优先遍历
// 需要利用队列实现，速度较快（先进先出）

// 步骤
// 1、广度优先遍历整棵树，并记录节点层级
// 2、遇到子节点层级，停止遍历，并返回节点层级



function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var minDepth = function (root) {
  if (!root) return 0;
  // 利用数组，来记录层级
  const q = [[root, 1]];
  while(q.length) {
    const [n, l] = q.shift()
    // console.log(n.val, l);
    // 广度优先遍历中，遇到的第一个叶子节点，就是深度最小的叶子节点
    // 如果为叶子节点, 则它的left 和 right 为 undefined
    if (!n.left && !n.right) return l
    if (n.left) q.push([n.left, l + 1])
    if (n.right) q.push([n.right, l + 1])
  }
};

const tree = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(minDepth(tree) === 2);

// 总结：
// 时间复杂度： On，有一个while循环
