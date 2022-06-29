/*
 * @Author: jack
 * @Date: 2022-04-15 23:37:37
 * @LastEditors: jack
 * @LastEditTime: 2022-04-16 00:11:22
 * @Description: 2. 两数相加
 */

// 要求：
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 解题思路：
//   新建一个链表
//   遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，经十位数留到下一位去相加

// 遍历输出节点的val
const getLinkVal = (link) => {
  while (link) {
    console.log(link.val);
    link = link.next;
  }
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 需要 一个 l3 ,因为 p3 是会移动的，而l3则代表新链表的头结点
  let l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  // 表示进位
  let carry = 0;
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0;
    const v2 = p2 ? p2.val : 0;
    const val = v1 + v2 + carry;
    // 获取十位数的值
    carry = Math.floor(val / 10);
    p3.next = new ListNode(val % 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }

  // 如果最后一次相加的值超过10 则在最后新增一个节点
  if (carry > 0) {
    p3.next = new ListNode(carry); // [1,2] + [1,8] => [2, 0, 1]
  }

  return l3.next;
};

let link1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let link2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let link3 = addTwoNumbers(link1, link2);

// let link1 = new ListNode(2, new ListNode(4, new ListNode(5)));
// let link2 = new ListNode(5, new ListNode(6, new ListNode(5)));
// let link3 = addTwoNumbers(link1, link2);

getLinkVal(link3);
