/*
 * @Author: vayne
 * @Date: 2022-04-22 18:04:09
 * @LastEditTime: 2022-04-23 21:54:38
 * @LastEditors: vayne.nong
 * @Description: 
 */
/*
 * @Author: vayne
 * @Date: 2022-04-22 12:08:48
 * @LastEditTime: 2022-04-22 12:18:46
 * @LastEditors: vayne.nong
 * @Description: 二叉树的先（前）序遍历
 */

// 先序遍历：（根左右）
// 	访问根节点
// 	对根节点的左子树进行先序遍历
// 	对根节点的右子树进行先序遍历

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

// 递归版
// const preOrder = (root) => {
//   if(!root) return

//   console.log(root.val);
//   preOrder(root.left)
//   preOrder(root.right)
// }

// 利用栈实现
const preOrder = (root) => {
  if (!root) return
  const stack = [root]

  while(stack.length) {
    const top = stack.pop();
    console.log(top.val);
    // 因为先进后出，所以要右节点入栈
    if (top.right) stack.push(top.right)
    if (top.left) stack.push(top.left)
  }
}

preOrder(tree) // 1234567