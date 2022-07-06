/*
 * @Author: jack
 * @Date: 2022-05-24 23:38:55
 * @LastEditors: jack
 * @LastEditTime: 2022-05-24 23:48:31
 * @Description: 215. 数组中的第K个最大元素
//  */

// 题目
// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 解题思路：
//   看到”第 k 个最大元素”
//   考虑选择使用最小堆

// 解题步骤：
// 1、构建一个最小堆，并依次把数组的值插入堆中；
// 2、当堆的容量超过 K，就删除堆顶
// 3、插入结束后，堆顶就是第 K 个最大元素

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
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);

    if (this.heap[index] > this.heap[leftIndex]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (this.heap[index] > this.heap[rightIndex]) {
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

var findKthLargest = function (nums, k) {
  const h = new MinHeap();

  nums.forEach((n) => {
    h.insert(n);
    if (h.size() > k) {
      h.pop();
    }
  });

  return h.peek();
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
