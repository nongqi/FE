/*
 * @Author: jack
 * @Date: 2022-04-14 23:34:17
 * @LastEditors: jack
 * @LastEditTime: 2022-04-15 00:03:59
 * @Description: 反转链表
 */

// 示例：
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

// 解题思路：
// 反转两个节点：将 n + 1 的 next 指向 n
// 反转多个节点：双指针遍历链表
// 重复上面的操作

// 步骤：
// 一个指针指向上一个节点，一个指针指向下一个节点，一前一后遍历链表，然后反转

// 官网说明
// 在遍历链表时，将当前节点的 next 指针改为指向前一个节点。由于节点没有引用其前一个节点，因此必须事先存储其前一个节点。在更改引用之前，还需要存储后一个节点。最后返回新的头引用。

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    // 由于节点没有引用其前一个节点，因此必须事先存储其前一个节点
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

const link = {
  val: 1,
  next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
};

console.log(link);
const newLink = reverseList(link);
console.log(newLink);
