/*
 * @Author: vayne
 * @Date: 2022-06-30 17:16:26
 * @LastEditTime: 2022-06-30 22:23:26
 * @LastEditors: Please set LastEditors
 * @Description:
 */
// 归并算法
// 思路
// 分：把数组劈成两半，在递归地对子数字进行“分”操作，直到分成一个个单独的树
// 合：把两个树合并成有序的数组，再对有序数组进行合并，直到全部子数组合并成一个完整的数组

// 合并两个有序数组
// - 新建一个 res 空数组，用于存放最终排序后的数组。
// - 比较两个有序数组的头部，比较小者出队并推入res中。
// - 如果两个有序数组还有值，就重复第二步

Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, this.length);
    const orderLeft = rec(leftArr);
    const orderRight = rec(rightArr);

    let res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift());
      } else if (orderLeft.length) {
        res.push(orderLeft.shift());
      } else {
        res.push(orderRight.shift());
      }
    }

    return res;
  };

  const res = rec(this);

  res.forEach((n, i) => {
    this[i] = n
  })
};

const arr = [5, 4, 3, 2, 1];
arr.mergeSort();
console.log('====================================');
console.log(arr);
console.log('====================================');

// 归并排序的时间复杂度
// 分的时间复杂度是 O(logN)
// 合的时间复杂度是 O(n)
// 总时间复杂度： O(n*logN)