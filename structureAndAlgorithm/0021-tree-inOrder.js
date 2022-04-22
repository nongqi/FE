/*
 * @Author: vayne
 * @Date: 2022-04-22 12:08:48
 * @LastEditTime: 2022-04-22 22:12:04
 * @LastEditors: vayne.nong
 * @Description: 二叉树的中序遍历
 */

// 中序遍历：（左根右）
// 对根节点的左子树进行中序遍历
// 	访问根节点
// 	对根节点的右子树进行中序遍历


const tree = {
  val: 5,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: { val: 3, left: null, right: null },
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      lef: null,
      right: null,
    },
  },
};

const preOrder = (root) => {
  if (!root) return;

  preOrder(root.left);
  console.log(root.val);
  preOrder(root.right);
};

preOrder(tree); // 1234567
