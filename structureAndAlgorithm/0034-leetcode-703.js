/*
 * @Author: jack
 * @Date: 2022-05-31 00:10:23
 * @LastEditors: jack
 * @LastEditTime: 2022-05-31 01:54:01
 * @Description: 703. 数据流中的第 K 大元素
 */

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
  inRange(index) {
    return index >= 0 && index <= this.size() - 1;
  }

  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);
    if (
      this.inRange(parentIndex) &&
      this.heap[parentIndex] > this.heap[index]
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);

    if (this.inRange(leftIndex) && this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (this.inRange(rightIndex) && this.heap[rightIndex] < this.heap[index]) {
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
    if (this.size() === 1) return this.heap.shift();
    // const top = this.heap.pop();
    // this.heap[0] = top;
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
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

var KthLargest = function (k, nums) {
  this.k = k;
  this.h = new MinHeap();
  nums.forEach((n) => {
    this.h.insert(n);
  });
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.h.insert(val);
  while (this.h.size() > this.k) {
    this.h.pop();
  }
  return this.h.peek();
};

// const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3); // return 4
// kthLargest.add(5); // return 5
// kthLargest.add(10); // return 5
// kthLargest.add(9); // return 8
// kthLargest.add(4); // return 8

const kl = new KthLargest(2, [0]);

console.log(kl.add(-1));
console.log(kl.add(1));
console.log(kl.add(-2));
console.log(kl.add(-4));
console.log(kl.add(3));

// ['KthLargest', 'add', 'add', 'add', 'add', 'add'][
//   ([2, [0]], [-1], [1], [-2], [-4], [3])
// ];
