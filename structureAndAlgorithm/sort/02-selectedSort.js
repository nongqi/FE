/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */
// 选择排序

// 思路：
// 找到数组中的最小值，选中它并将其放置在第一位。
// 接着找到第二小的值，选中他并将其放置在第二位。
// 以此类型，执行n-1轮

Array.prototype.selectedSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    let indexMin = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      const temp = this[i];
      this[i] = this[indexMin];
      this[indexMin] = temp;
    }
  }
};

const arr = [5, 4, 3, 2, 1];

arr.selectedSort();

console.log("====================================");
console.log(arr);
console.log("====================================");


// 时间复杂度 O(n^2) ,两层循环
