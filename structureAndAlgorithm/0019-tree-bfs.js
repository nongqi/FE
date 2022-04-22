/*
 * @Author: vayne
 * @Date: 2022-04-22 00:26:19
 * @LastEditTime: 2022-04-22 00:34:02
 * @LastEditors: vayne.nong
 * @Description:
 */
/*
 * @Author: vayne
 * @Date: 2022-04-21 23:42:07
 * @LastEditTime: 2022-04-21 23:51:44
 * @LastEditors: vayne.nong
 * @Description: 树的广度优先遍历
 */

// 概念：
// 深度优先遍历：先访问离根节点最近的节点

// 实现步骤
// 新建一个队列，把根节点入队
// 把队头出队并访问
// 把队头的children挨个入队
// 重复二、三步，直到队列为空

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

const bfs = (root) => {
  const q = [root];
  while (q.length > 0) {
    const node = q.shift();
    console.log(node.val);
    node.children.forEach((child) => {
      q.push(child);
    });
  }
};

bfs(tree); // abcdefg
