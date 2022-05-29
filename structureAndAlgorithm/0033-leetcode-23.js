/*
 * @Author: jack
 * @Date: 2022-05-29 21:51:04
 * @LastEditors: jack
 * @LastEditTime: 2022-05-29 22:34:25
 * @Description: 23. 合并K个升序链表
 */
// 题目描述：
// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 解题思路：
//  新链表的下一个节点一定是 k 个链表头中最小节点
//  考虑使用最小堆

// 解题步骤
//  构建一个最小堆，并依次把链表头插入堆中
//  弹出堆顶接到输出链表，并将对顶所在链表的新链表头插入堆中
//  等堆堆元素全部弹出，合并工作就完成了。

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
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].val > this.heap[index].val
    ) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    let leftIndex = this.getLeftIndex(index);
    let rightIndex = this.getRightIndex(index);

    if (
      this.heap[leftIndex] &&
      this.heap[leftIndex].val < this.heap[index].val
    ) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }

    if (
      this.heap[rightIndex] &&
      this.heap[rightIndex].val < this.heap[index].val
    ) {
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const h = new MinHeap();
  const res = new ListNode(0);
  let p = res;

  lists.forEach((l) => {
    if (l) h.insert(l);
  });

  while (h.size()) {
    const n = h.pop();
    p.next = n;
    p = p.next;

    if (n.next) h.insert(n.next);
  }

  return res.next;
};

const a = new ListNode(1, new ListNode(4, new ListNode(5)));
const b = new ListNode(1, new ListNode(3, new ListNode(4)));
const c = new ListNode(2, new ListNode(6));

const arr = [a, b, c];

console.dir(mergeKLists(arr));
