/*
 * @Author: jack
 * @Date: 2022-04-14 22:37:34
 * @LastEditors: jack
 * @LastEditTime: 2022-04-14 22:55:47
 * @Description: 删除链表中的节点
 */

// 题目要求：
// 请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。

// 特点
// 无法直接获取被删除节点的上一个节点

// 思路：
//     将被删除的节点的值改为下一个节点的值
//     删除下一个节点

// 复杂度分析
// 时间复杂度：O(1)：没有循环
// 空间复杂度：O(1)：没有数组

let d = { val: 9, next: null };
let c = { val: 1, next: d };
let b = { val: 5, next: c };
let a = { val: 4, next: b };

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

console.log(a);
deleteNode(b);
console.log(a);
