/*
 * @Author: nongqi
 */
Function.prototype.customCall = function (context) {
  // 1、获取入参参数
  const args = [...arguments].slice(1);
  // 2、获取执行上下文
  actionContext = context || window;
  actionContext.fn = this; // this 指向调用函数，这里为 add 方法
  const result = actionContext.fn(...args);
  return result;
};

function add(a, b) {
  console.log(this);
  this.sayName();
  return a + b;
}

const person = {
  name: "jack",
  sayName: function () {
    console.log(this.name);
  },
};

const res = add.customCall(person, 3, 6);
console.log(res);
