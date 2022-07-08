/*
 * @Author: nongqi
 */

// 参考：https://juejin.cn/post/6920492226594373639
const log = console.log;
const sleep = (timeout) => {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    }, timeout)
  })
}

const main = async()=>{
  await sleep(1000);
  log(1);
  await sleep(2000);
  log(2);
  await sleep(3000);
  log(3);
}
