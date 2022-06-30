/*
 * @Author: vayne
 * @Date: 2022-06-30 10:49:32
 * @LastEditTime: 2022-06-30 13:00:10
 * @LastEditors: vayne.nong
 * @Description:
 */
// 插入排序
// 思路
// - 从第二个数开始往前比
// - 比它大就往后排
// - 以此类推到最后一个数

Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i];
    let j = i;

    while (j > 0) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
      j--;
    }
    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();
console.log('====================================');
console.log(arr);
console.log('====================================');

// 时间复杂度 O(n^2) ,两层循环
