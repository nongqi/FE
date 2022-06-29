/*
 * @Author: jack
 * @Date: 2022-04-17 23:34:25
 * @LastEditors: jack
 * @LastEditTime: 2022-04-17 23:51:07
 * @Description: 封装方法 instanceOf => instanceof
 */

// instanceof：用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
// 关键点：实例的原型链中 是否存在和 构造函数的 prototype 相同引用

function instanceOf(object, constructor) {
  // let p = object.__proto__;
  let p = Object.getPrototypeOf(object);
  while (p) {
    if (p === constructor.prototype) {
      return true;
    } else {
      p = Object.getPrototypeOf(p);
      // p = object.__proto__;
    }
  }

  return false;
}

function tset() {}

console.log(instanceOf(tset, Array)); // false
console.log(instanceOf(tset, Function)); // true
