/*
 * @Author: vayne
 * @Date: 2022-04-21 23:42:07
 * @LastEditTime: 2022-04-21 23:51:44
 * @LastEditors: vayne.nong
 * @Description: 树的深度优先遍历
 */

// 概念：
// 深度优先遍历：尽可能的搜索树的分支

// 实现步骤
// 访问根节点
// 对根节点的children挨个进行深度优先遍历

const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        { val: 'd', children: [] },
        { val: 'e', children: [] },
      ],
    },
    {
      val: 'c',
      children: [
        { val: 'f', children: [] },
        { val: 'g', children: [] },
      ],
    },
  ],
};

const dfs = (root) => {
  console.log(root.val);
  // root.children.forEach(node => dfs(node))
  root.children.forEach(dfs)
}

dfs(tree) // abdecfg
