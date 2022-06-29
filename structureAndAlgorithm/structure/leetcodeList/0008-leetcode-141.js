/*
 * @Author: jack
 * @Date: 2022-04-17 16:50:35
 * @LastEditors: jack
 * @LastEditTime: 2022-04-17 23:26:50
 * @Description: 141. 环形链表
 */

// 思路：
//  1、用一快一慢的两个指针遍历链表，如果这两个指针能够相逢，那么就代表链表有环（在环形操场中，一人慢跑一个人快跑，那么他们总会有相约的时刻）
// 步骤：
// 用一快一慢两个指针遍历链表，如果指针能够重逢，那么返回 true ，默认返回false（遍历完链表后发现无环）
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var hasCycle = function (head) {
  if (!head) return;
  // 慢指针
  let p1 = head;
  // 快指针
  let p2 = head;

  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }

  return false;
};
// const d = new ListNode(4);
// const c = new ListNode(0, d);
// let b = new ListNode(2, c);
// const a = new ListNode(3, b);
// d.next = b;
// console.log(hasCycle(a));

// let b = new ListNode(2);
// const a = new ListNode(3, b);
// b.next = a;
// console.log(hasCycle(a));

const a = new ListNode(3);
console.log(hasCycle(a));
