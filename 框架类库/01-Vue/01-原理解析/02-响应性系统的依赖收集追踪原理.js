/*
 * @Author: nongqi
 */

/**
 * 它的主要作用是用来存放 Watcher 观察者对象
 * 用 addSub 方法可以在目前的 Dep 对象中增加一个 Watcher 的订阅操作；
 * 用 notify 方法通知目前 Dep 对象的 subs 中的所有 Watcher 对象触发更新操作。
 */
class Dep {
  constructor() {
    /* 用来存放Watcher对象的数组 */
    this.subs = [];
  }

  /* 在subs中添加一个Watcher对象 */
  addSub(sub) {
    this.subs.push(sub);
  }

  /* 通知所有Watcher对象更新视图 */
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

class Watcher {
  constructor() {
    /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
    Dep.target = this;
  }

  /* 更新视图的方法 */
  update() {
    console.log("视图更新啦～");
  }
}


/**
 * 这个函数用来模拟视图更新，调用它即代表更新视图
 */
//  function cb() {
//     /* 渲染视图 */
//     console.log("视图更新啦～");
// }


function defineReactive(obj, key, val) {
    /* 一个Dep类对象 */
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,       /* 属性可枚举 */
        configurable: true,     /* 属性可被修改或删除 */
        get: function reactiveGetter() {
            /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
            dep.addSub(Dep.target)
            return val
        },
        set: function reactiveSetter(newVal) {
            if(newVal === val) return

            /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */
            dep.notify();
        }
    })

}

/**
 * 通过遍历所有属性的方式对该对象的每一个属性都通过 defineReactive 处理。
 * @param {*} value 
 * @returns 
 */
function observe(value) {
    if(!value || (typeof value !== 'object')) return

    // 实际上 observer 会进行递归调用，为了便于理解去掉了递归的过程
    Object.keys(value).forEach(key => {
        defineReactive(value, key, value[key])
    })
}

class Vue {
    constructor(options) {
        this._data = options.data;
        observe(this._data)

        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        new Watcher();
        console.log('render~', this._data.tt1);
        console.log('render~', this._data.test);
    }
}


let o = new Vue({
    data: {
        test: "I am test.",
        tt1: '111'
    }
});
o._data.test = "hello,test.";
o._data.tt1 = "hello,test11.";

Dep.target = null;