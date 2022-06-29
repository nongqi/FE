/*
 * @Author: vayne
 * @Date: 2022-04-30 11:25:10
 * @LastEditTime: 2022-04-30 12:21:48
 * @LastEditors: vayne.nong
 * @Description: 417. 太平洋大西洋水流问题
 */

// 思路：
// 1、把矩阵想象成图（每一个矩阵点，都是一个图节点，每个节点和它的上下左右节点进行连接）
// 2、从海岸线逆流而上遍历图，所到之处就是可以流到某个太平洋的坐标

// 步骤：
// 1、新建两个矩阵，分别记录能流向两个大洋的坐标；
// 2、从海岸线，多管齐下，同时深度优先遍历图，遍历过程中填充上述矩阵；
// 3、遍历两个矩阵，找出能流到两个大洋的坐标；

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  if (!heights || !heights[0]) return [];

  const m = heights.length; // 行
  const n = heights[0].length; // 列
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false)); // 记录可流向太平洋的坐标
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false)); // 记录可流向大西洋的坐标

  // 深度优先遍历
  const dfs = (r, c, flow) => {
    flow[r][c] = true;

    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        // 在指定范围之内
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // 防止重复遍历
        !flow[nr][nc] &&
        // 保证逆流而上（大于或等于）
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  // 沿着海岸线逆流向上
  for (let r = 0; r < m; r++) {
    // 左侧节点集合开始
    dfs(r, 0, flow1);
    // 右侧节点开始
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c++) {
    // 上侧节点集合开始
    dfs(0, c, flow1);
    // 下侧节点开始
    dfs(m - 1, c, flow2);
  }
  const res = [];
  // 收集能流向两大洋的坐标
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  // console.log(flow1, flow2);

  return res;
};

const testData = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
const testData2 = [
  [2, 1],
  [1, 2],
];

console.log(pacificAtlantic(testData));
