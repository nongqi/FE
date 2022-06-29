/*
 * @Author: jack
 * @Date: 2022-04-18 00:33:53
 * @LastEditors: jack
 * @LastEditTime: 2022-04-18 00:57:34
 * @Description: 234. 回文链表
 */

// 思路：
//  遍历链表，并把val存入一个数组中，然后数组前后进行对比

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  const datas = [];
  // 把链表的val 存到一个数组
  while (head) {
    datas.push(head.val);
    head = head.next;
  }

  // 判断数组的的前后是否相同
  for (let i = 0, j = datas.length - 1; i < j; i++, j--) {
    if (datas[i] !== datas[j]) return false;
  }
  // let data = resverData.map((x) => x);
  // resverData.reverse();

  // let len = data.length;
  // for (let i = 0; i < len; i++) {
  //   if (data[i] !== resverData[i]) return false;
  // }

  return true;
};

const link1 = new ListNode(
  1,
  new ListNode(2, new ListNode(2, new ListNode(1)))
);
console.log(isPalindrome(link1));

const link2 = new ListNode(
  1,
  new ListNode(2, new ListNode(2, new ListNode(3)))
);

console.log(isPalindrome(link2));
