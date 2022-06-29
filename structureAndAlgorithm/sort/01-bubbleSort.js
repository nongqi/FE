/*
 * @Author: nongqi
 */
// 冒泡排序
// 思路：
//     比较所有相邻的元素，如果第一个比第二个大，则交换他们。
//     一轮下来，可以保证最后一个数是最大的。
//     执行 n - 1 轮，就可以完成排序 (外面套一层 循环)

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};

const arr = [5, 4, 3, 2, 1];

arr.bubbleSort();

console.log("====================================");
console.log(arr);
console.log("====================================");

// 总结：
// 时间复杂度 O(n^2) ,两层循环
