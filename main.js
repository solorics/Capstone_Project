const totalBars = document.querySelectorAll('.menu-bar');
/* eslint-disable no-unused-vars */
function changeMenuIcon() {
  for (let activeBar = 0;
    activeBar < totalBars.length;
    activeBar += 1) {
    totalBars[activeBar].classList.toggle('active');
  }
}