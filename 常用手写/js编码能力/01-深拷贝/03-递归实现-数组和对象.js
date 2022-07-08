/*
 * @Author: nongqi
 */
/*
 * @Author: nongqi
 */


/**
 * 当前深拷贝方法，只适用对象和数组，严格的JSON格式, 无法处理循环引用，
 * 如果层级太深，那么递归栈也会随之变深，容易溢出
 * 可优化，针对不同类型数据做处理
 * @param {*} obj 
 * @returns 
 */
function clone(obj) {
  let objCopy = Array.isArray(obj) ? [] : {};

  if (obj && typeof obj === "object") {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objCopy[key] = clone(obj[key]);
        } else {
          objCopy[key] = obj[key];
        }
      }
    }
  }
  return objCopy;
}

const state = {
  info: {
    name: "jj",
    career: {
      first: {
        name: "111",
      },
    },
  },
  data: [1,2],
};

const a = clone(state)
console.log(a);
