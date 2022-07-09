/*
 * @Author: nongqi
 */
Function.prototype.customBind = function (context) {
  // 获取参数
  const args = [...arguments].slice(1)

  let fn = this; // this 指向调用函数，这里为 add 方法
  // if (arguments[1]) {
  //   result = actionContext.fn(...arguments[1]);
  //   return result;
  // } else {
  //   result = actionContext.fn();
  // }
  return (...args2) => {
     return fn.apply(context, args.concat(args2))
  }
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

const newFunc = add.customBind(person, 3);
const res = newFunc(6)
console.log(res);
