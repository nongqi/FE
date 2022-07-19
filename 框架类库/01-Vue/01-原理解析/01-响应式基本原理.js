/*
 * @Author: nongqi
 */

/**
 * 这个函数用来模拟视图更新，调用它即代表更新视图
 */
function cb() {
    /* 渲染视图 */
    console.log("视图更新啦～");
}


function defineReactive(obj, key, val) {

    Object.defineProperty(obj, key, {
        enumerable: true,       /* 属性可枚举 */
        configurable: true,     /* 属性可被修改或删除 */
        get: function reactiveGetter() {
            return val
        },
        set: function reactiveSetter(newVal) {
            if(newVal === val) return
            cb(newVal)
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
    }
}

// TEST
let o = new Vue({
    data: {
        test: "I am test."
    }
});
o._data.test = "hello,world.";  /* 视图更新啦～ */
