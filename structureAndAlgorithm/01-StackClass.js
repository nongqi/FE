/*
 * @Author: jack
 * @Date: 2022-04-12 21:32:12
 * @LastEditors: jack
 * @LastEditTime: 2022-04-12 21:41:05
 * @Description: 用 ES6 的 class，封装一个 Stack 类，包括 push、pop、peek 方法。
 */

class StackClass {
  stack;

  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  // 返回栈顶元素，且将该栈顶元素出栈
  pop() {
    return this.stack.pop();
  }

  // 函数返回栈顶的元素，但不弹出该栈顶元素
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

const stack = new StackClass();

stack.push(1);
stack.push(2);

console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack);
