/*
 * @Author: jack
 * @Date: 2022-03-24 23:15:54
 * @LastEditors: jack
 * @LastEditTime: 2022-03-27 00:32:49
 * @Description:
 */

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) currentActive = circles.length;

  updata();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) currentActive = 1;

  updata();
});

function updata() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
