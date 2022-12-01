// const totalBars = document.querySelectorAll('.menu-bar');
// const intro = document.getElementsByClassName('intro');
// const spans = document.getElementsByTagName('span');
// /* eslint-disable no-unused-vars */
// function changeMenuIcon() {
//   for (let activeBar = 0;
//     activeBar < totalBars.length;
//     activeBar += 1) {
//     totalBars[activeBar].classList.toggle('active');
//   }
// }

function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}

document.querySelector('#open-nav').addEventListener('click', openNav);
document.querySelector('#close-nav').addEventListener('click', closeNav);
document.querySelectorAll('.mobile-link').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('myNav').style.display = 'none';
  });
});