/*
 * @Author: jack
 * @Date: 2022-04-16 12:09:21
 * @LastEditors: jack
 * @LastEditTime: 2022-04-16 12:22:57
 * @Description: 83. 删除排序链表中的重复元素
 */
// 题目描述：给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

// 思路：
// 因为链表是有序的，所以重复的元素一定相邻
// 遍历链表，如果发现当前元素的值和下一个元素的值相同，就删除下一个元素节点

// 步骤
// 遍历链表，如果发现当前元素的值和下一个元素的值相同，就删除下一个元素节点
// 返回链表头节点

// 节点的数据结构 - 辅助
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 遍历输出节点的val - 辅助
const getLinkVal = (link) => {
  while (link) {
    console.log(link.val);
    link = link.next;
  }
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let p = head;

  // 因为 if 判断条件里有 使用p.next.val 所以循环条件里需要加 p.next
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};

// 测试用例
const link1 = new ListNode(1, new ListNode(1, new ListNode(2)));

getLinkVal(deleteDuplicates(link1));

console.log('===================================');

const link2 = new ListNode(
  1,
  new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3))))
);

getLinkVal(deleteDuplicates(link2));
console.log('===================================');

const link3 = new ListNode(1, new ListNode(1, new ListNode(1)));

getLinkVal(deleteDuplicates(link3));
