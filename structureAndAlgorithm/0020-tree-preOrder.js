/*
 * @Author: vayne
 * @Date: 2022-04-22 18:04:09
 * @LastEditTime: 2022-04-22 18:04:09
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

const preOrder = (root) => {
  if(!root) return

  console.log(root.val);
  preOrder(root.left)
  preOrder(root.right)
}

preOrder(tree) // 1234567