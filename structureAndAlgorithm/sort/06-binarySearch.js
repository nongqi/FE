/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */
// 二分搜索

// 前提：有序的数组

// 思路：
// - 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束。
// - 如果目标值大于或小于中间元素，则在大于或小于中间元素的那一半数组中搜索

Array.prototype.binarySearch = function (target) {
  let low = 0;
  let high = this.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midElement = this[mid];
    if (midElement < target) {
      low = mid + 1;
    } else if (midElement > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

const res = [1, 2, 3, 4, 5].binarySearch(3);
console.log(res);



// 每一次比较都使搜索范围缩小一半
// 时间复杂度 O(logN)