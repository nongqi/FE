/*
 * @Author: vayne
 * @Date: 2022-07-01 10:46:12
 * @LastEditTime: 2022-07-01 11:27:41
 * @LastEditors: vayne.nong
 * @Description: 21 合并两个有序链表
 */

// 思路
//  - 和归并算法类似
//  - 把数组替换成链表
// 步骤：
// 1、新建一个链表，作为返回结果
// 2、用指针遍历两个有序链表，并比较两个链表的当前节点，比较小者先接入新链表，并将指针往后移一步
// 3、链表遍历结束，返回链表

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  const res = new ListNode(0)
  let p = res;
  let p1 = list1;
  let p2 = list2

  while(p1 && p2) {
    if(p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next
    } else {
      p.next = p2;
      p2 = p2.next
    }

    p = p.next
  }
  if(p1) {
    p.next = p1
  }

  if(p2) {
    p.next = p2
  }
  return res.next;
};


