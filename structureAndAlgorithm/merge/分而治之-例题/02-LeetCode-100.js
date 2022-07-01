/*
 * @Author: nongqi
 */
// 100 相同的树

// 解题思路
// - 两个树：根节点的值相同，左子树相同，右子树相同。（小树也是这个规律）
// - 符合“分别、解、合”特性
// - 考虑选中分而治之

// 解题步骤
// 分：获取两个树的左子树和右子树。
// 解：递归的判断两个树的左子树是否相同，右子树是否相同
// 合：将上述两个结果合并，如果根节点的的值也相同，树也就相同了

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if(!p && !q) return true;

    if(p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
        return true
    }
    return false
};

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(tree1, tree2));;

// 时间复杂度 O(n)：树的节点数
// 空间复杂度 O(n)：树的高度（递归的深度）