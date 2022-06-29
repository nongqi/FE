/*
 * @Author: vayne
 * @Date: 2022-04-19 11:27:59
 * @LastEditTime: 2022-04-19 11:50:33
 * @LastEditors: vayne.nong
 * @Description:
 */
// 源码的原文链接：https://zh.javascript.info/mixins
// 用于练手，没有其他意思
// 关键: Mixin — 是一个通用的面向对象编程术语：一个包含其他类的方法的类。
// 一些其它编程语言允许多重继承。JavaScript 不支持多重继承，但是可以通过将方法拷贝到原型中来实现 mixin。

let eventMixin = {
  /**
   * 订阅事件，用法：
   *  menu.on('select', function(item) { ... }
   */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = [];
    if (!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];

    this._eventHandlers[eventName].push(handler);
  },

  /**
   * 取消订阅，用法：
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    const handlers = this._eventHandlers?.[eventName];

    if (!handlers) return
    for(let i = 0; i < handlers.length; i ++) {
      if (handlers[i] === handler) {
        handlers.splice(i, 1)
        // splice 之后会数组中 i 位置的会被删除，所以 i 要-- 
        i--;
      }
    }
  },

  /**
   * 生成具有给定名称和数据的事件
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {

    // 该事件名称没有对应的事件处理程序（handler）
    if (!this._eventHandlers?.[eventName]) return

    this._eventHandlers[eventName].forEach(handle => handle.apply(this, args))
  }
};

// 用法
class Menu {
  choose(value) {
    this.trigger('select', value)
  }
}

Object.assign(Menu.prototype, eventMixin)

const menu = new Menu()

menu.on('select', value => console.log(`Value selected: ${value}`))

menu.choose('123123')


