/*
 * @Author: vayne
 * @Date: 2022-05-25 12:44:17
 * @LastEditTime: 2022-05-25 16:17:01
 * @LastEditors: vayne.nong
 * @Description: 347、前 K 哥
 */

// 题目描述：
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案

// 解法1 时间复杂度为 O(n log n)
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.get(n) ? map.get(n) + 1 : 1);
  });
  const list = Array.from(map).sort((a, b) => b[1] - a[1]);
  return list.slice(0, k).map((item) => item[0]);
};

class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    // 父节点的位置是(index - 1) / 2 的商（不考虑余数）
    // return Math.floor((index - 1) / 2)
    return (index - 1) >> 1;
  }
  /**
   * 获取左子节点
   * @param {*} i
   * @returns
   */
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  /**
   * 获取右子节点
   * @param {*} i
   * @returns
   */
  getRightIndex(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value ) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  /**
   * 删除堆顶
   * @returns 
   */
  pop() {
    if (this.size() < 1) return;
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap.pop();
    this.heap[0] = top;
    this.shiftDown(0);
    return top;
  }
  /**
   * 获取堆的大小
   * @returns 
   */
  size() {
    return this.heap.length;
  }
  /**
   * 获取堆顶
   * @returns 
   */
  peek() {
    return this.heap[0];
  }
}

// 解法2： 时间复杂度：O(n log k) k <= n
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.get(n) ? map.get(n) + 1 : 1);
  });

  const h = new MinHeap()
  map.forEach((value, key) => {
    h.insert({value, key})
    if(h.size() > k) {
      h.pop()
    }
  })

  return h.heap.map(item => item.key)
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log('====================================');
console.log(topKFrequent(nums, k));
console.log('====================================');
