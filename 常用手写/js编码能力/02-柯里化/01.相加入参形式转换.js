function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
// alert(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
// alert(curriedSum(1)(2)(3)); // 6，全柯里化

console.log(curriedSum(1, 2, 3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1)(2)(3));

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) { // 1
      return func.apply(this, args);
    } else {
      return function (...args2) { //2
        return curried.apply(this, args.concat(args2)); 
      };
    }
  };
}

// 如果传入的 args 长度与原始函数所定义的（func.length）相同或者更长，那么只需要使用 func.apply 将调用传递给它即可。
// 否则，获取一个偏函数：我们目前还没调用 func。取而代之的是，返回另一个包装器 pass，它将重新应用 curried，将之前传入的参数与新的参数一起传入。
// 柯里化 是一种转换，将 f(a,b,c) 转换为可以被以 f(a)(b)(c) 的形式进行调用。JavaScript 实现通常都保持该函数可以被正常调用，并且如果参数数量不足，则返回偏函数。
