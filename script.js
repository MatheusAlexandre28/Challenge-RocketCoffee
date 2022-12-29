const btn = document.querySelector('#open-sideBar');
const sideBar = document.querySelector('.sideBar');

btn.onclick = function() {
  sideBar.classList.toggle("active");
}
