/*
 * @Author: vayne
 * @Date: 2022-04-26 15:28:38
 * @LastEditTime: 2022-04-26 15:40:41
 * @LastEditors: vayne.nong
 * @Description: 图的广度优先遍历
 */

// 广度优先遍历
// - 新建一个队列，把根节点入队
// - 把队头出队并访问
// - 把队头的没访问过的相邻节点入队
// - 重复二、三步，直到队列为空

const graph = require('./graph');


const visited = new Set()
const queue = [2] // 从 2 start
visited.add(2)
while(queue.length) {
  const head = queue.shift();
  console.log(head);
  graph[head].forEach(c => {
    if (!visited.has(c)) {
      queue.push(c)
      // 入队的节点，表示已经访问。不能出队的时候，再加入visited，不然存在重复循环（节点入队之后就应该标记为访问过，而不是在出队时候再标记）
      visited.add(c)
    }
  })
}