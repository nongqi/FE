/*
 * @Author: jack
 * @Date: 2022-04-14 00:20:59
 * @LastEditors: jack
 * @LastEditTime: 2022-04-14 00:46:18
 * @Description: LeetCode： 933 最近请求次数
 */

// 关键点
//  - 越早触发的请求，越不在最近的3000内的请求里
//  - 满足先进先出，考虑用队列

// 过程描述：
// - 每一次 ping 都是给实例的队列数组 push 元素(t)，同时计算是否是 3000ms 内的请求, 并返回在 3000ms 内的队列长度

let RecentCounter = function () {
  this.q = [];
};

RecentCounter.prototype.ping = function (t) {
  this.q.push(t);

  // 如果队列头部不符合3000范围内的，则删除队列头部
  while (this.q[0] < t - 3000) {
    // shift 标识删除队里的第一个元素，然后后面元素往前移动
    this.q.shift();
  }

  return this.q.length;
};

let recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100)); // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001)); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002)); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

// 总结
// 时间复杂度为 O(n)： 有一个循环
// 空间复杂度为 O(n)： 队列的长度

// 备注点
// shift 方法可能存在一些性能问题，因为在数组中，调用此方法后，后面的元素会统一往前移动。 有机会可以试一下用链表的形式
