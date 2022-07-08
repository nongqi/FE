/*
 * @Author: nongqi
 */
function throttle(func, delay) {
    let last = 0;
    let timer;

    return function(...args)  {
      const now = Date.now();
      if (now - last > delay) {
        last = now
        func.apply(this, args);
        
      }
    };
  }