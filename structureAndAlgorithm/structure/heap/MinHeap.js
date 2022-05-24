/*
 * @Author: vayne
 * @Date: 2022-05-07 15:19:09
 * @LastEditTime: 2022-05-24 13:52:06
 * @LastEditors: vayne.nong
 * @Description:
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

const h = new MinHeap();

let arr = [6, 3, 8, 5, 4, 10, 7, 2];
arr.forEach(item => [
  h.insert(item)
])
