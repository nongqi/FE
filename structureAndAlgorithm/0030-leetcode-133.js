/*
 * @Author: vayne
 * @Date: 2022-05-01 07:55:02
 * @LastEditTime: 2022-05-01 09:38:40
 * @LastEditors: vayne.nong
 * @Description: 133. 克隆图
 */

// 思路：
// 1、拷贝所有节点
// 2、拷贝所有的边

// 步骤
// 1、深度或广度优先遍历图所有节点
// 2、拷贝所有节点，并存储起来
// 3、将拷贝的节点，按照原图的连接方式进行连接


/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
   // 方法一、深度优先遍历
    if (!node) return;
    const visited = new Map();
    const dfs = (node) => {
      const nCopy = new Node(node.val)
      // 利用map保存，可以检查重复性的同时，也可以保存克隆节点的数据
      visited.set(node, nCopy)
      node.neighbors?.forEach((ne) => {
        if (!visited.has(ne)) {
          dfs(ne)
        }
        // 递归结束后才push,所以 visited.get(ne)是有值的
        nCopy.neighbors.push(visited.get(ne))
      })
    }
    dfs(node)
    return visited.get(node)
};

var cloneGraph = function(node) {
  // 方法一、广度优先遍历
   if (!node) return;
   const visited = new Map();
   const queue = [node];
   visited.set(node, new Node(node.val));
   while(queue.length) {
     const n = queue.shift();
     console.log(n.val);
     n.neighbors?.forEach((ne) => {
       if (!visited.has(ne)) {
         queue.push(ne);
         visited.set(ne, new Node(ne.val))
       }
       visited.get(n).neighbors.push(visited.get(ne))
     })
   }
  
   return visited.get(node)
};