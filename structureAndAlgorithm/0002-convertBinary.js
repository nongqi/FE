/*
 * @Author: jack
 * @Date: 2022-04-12 21:45:42
 * @LastEditors: jack
 * @LastEditTime: 2022-04-12 23:53:09
 * @Description: 十进制转二进制, 目前只支持正整数
 */

const convertBinary = (num) => {
  const stack = [];
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }

  return stack.reverse().join('');
};

console.log(convertBinary(100));
