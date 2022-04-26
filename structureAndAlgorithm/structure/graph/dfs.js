/*
 * @Author: vayne
 * @Date: 2022-04-26 14:59:12
 * @LastEditTime: 2022-04-26 15:06:21
 * @LastEditors: vayne.nong
 * @Description: 图的深度优先遍历
 */

// 图的深度优先遍历的口诀
// - 访问根节点
// - 对根节点的没访问过的相邻节点挨个进行深度优先遍历

const graph = require('./graph');

const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

// 从2开始
dfs(2);
