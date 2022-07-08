/*
 * @Author: nongqi
 */
// observe方法遍历并包装对象属性
function observe (target) {
    if(target && typeof target === 'object') {
        Object.keys(target).forEach((key) => {
            defineReactive(target, key , target[key])
        }) 
    }
}

function defineReactive(target, key, val) {
    const dep = new Dep()
    observe(val)
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: false,
        get: function() {
            return val
        },
        set: function(value) {
            console.log(`${target}属性的${key}属性从${val}值变成了了${value}`)
            val = value
            dep.notify()
        }
    })
}

// 定义订阅者类Dep
class Dep {
    constructor() {
        // 初始化订阅队列
        this.subs = []
    }
    
    // 增加订阅者
    addSub(sub) {
        this.subs.push(sub)
    }
    
    // 通知订阅者（是不是所有的代码都似曾相识？）
    notify() {
        this.subs.forEach((sub)=>{
            sub.update()
        })
    }
}