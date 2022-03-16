/*
 * @Author: jack
 * @Date: 2022-03-02 00:39:36
 * @LastEditors: jack
 * @LastEditTime: 2022-03-17 01:05:35
 * @Description:
 */

// 有意思的手风琴：
// 关键点
// 1、利用类的切换，控制样式显示；
// 2、利用 transition，动画显示，提高用户体验
// 3、利用 flex 布局，改变容器占比，从而控制宽高

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
