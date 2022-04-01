/*
 * @Author: jack
 * @Date: 2022-03-30 23:57:20
 * @LastEditors: jack
 * @LastEditTime: 2022-04-01 22:08:54
 * @Description:
 */
const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => {
  container.classList.add('show-nav');
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
