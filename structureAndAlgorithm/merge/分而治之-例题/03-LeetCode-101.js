/*
 * @Author: nongqi
 */

// leetCode 101. 对称二叉树\
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

// 解题思路：
// 转化为：左右子树是否是镜像。
// 分解为：树1的左子树和树2的左子树是否是镜像。树1的右子树和树2的左子树是否是镜像。
// 符合：“分、解、合”特性，考虑选中分而治之

// 解题步骤：
// 分：获取两个树的左子树和右子树
// 解：递归的判断树1和左子树和树2的右子树是否镜像，树1的右子树和树2的左子树是否镜像
// 合：如果上述都成立，且根节点值也相同，两个树就镜像

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isSymmetric = function (root) {
  if (!root) return true;

  const isMirror = (l, r) => {
    if (!l && !r) return true;

    if (
      l &&
      r &&
      l.val === r.val &&
      isMirror(l.left, r.right) &&
      isMirror(l.right, r.left)
    ) {
      return true;
    }
    return false;
  };

  return isMirror(root.left, root.right);
};

// 空间复杂度 O(n)：树的深度
// 时间复杂度 O(n)：树的节点数

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), new TreeNode(4)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

const tree2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
  );


console.log(isSymmetric(tree));
console.log(isSymmetric(tree2));
