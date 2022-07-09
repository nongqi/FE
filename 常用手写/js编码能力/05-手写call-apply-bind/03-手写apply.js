/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */
Function.prototype.customApply = function (context) {
  let result = null;
  // 2、获取执行上下文
  actionContext = context || window;
  actionContext.fn = this; // this 指向调用函数，这里为 add 方法
  if (arguments[1]) {
    result = actionContext.fn(...arguments[1]);
    return result;
  } else {
    result = actionContext.fn();
  }
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

const res = add.customApply(person, [3, 6]);
console.log(res);
