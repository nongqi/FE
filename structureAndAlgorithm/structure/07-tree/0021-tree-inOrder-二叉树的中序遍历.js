/*
 * @Author: vayne
 * @Date: 2022-04-22 12:08:48
 * @LastEditTime: 2022-04-23 22:53:30
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

// 递归
// const inOrder = (root) => {
//   if (!root) return;

//   inOrder(root.left);
//   console.log(root.val);
//   inOrder(root.right);
// };

// 非递归-栈实现
const inOrder = (root) => {
  if (!root) return
  const stack = [];
  let p = root;

  while(stack.length || p) {
    while(p) {
      stack.push(p)
      p = p.left;
    }
    const top = stack.pop()
    console.log(top.val);
    p = top.right;
  }
}

inOrder(tree); // 1234567
