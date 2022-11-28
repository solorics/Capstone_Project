const totalBars = document.querySelectorAll('.menu-bar');
const changeMenuIcon = function() {
  for (let activeBar = 0;
    activeBar < totalBars.length;
    activeBar++) {
    totalBars[activeBar].classList.toggle('active');
  }
}