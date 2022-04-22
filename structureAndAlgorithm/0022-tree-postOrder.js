/*
 * @Author: vayne
 * @Date: 2022-04-22 22:15:53
 * @LastEditTime: 2022-04-22 22:17:36
 * @LastEditors: vayne.nong
 * @Description: 
 */
/*
 * @Author: vayne
 * @Date: 2022-04-22 12:08:48
 * @LastEditTime: 2022-04-22 22:12:04
 * @LastEditors: vayne.nong
 * @Description: 二叉树的后序遍历
 */

// 后序遍历：（左右根）
// 对根节点的左子树进行中序遍历
// 对根节点的右子树进行中序遍历
// 访问根节点


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

const postOrder = (root) => {
  if (!root) return;

  preOrder(root.left);
  preOrder(root.right);
  console.log(root.val);
};

preOrder(tree); 
