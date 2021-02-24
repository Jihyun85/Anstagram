const userIcon = document.querySelector(".jsUserIcon");
const menu = document.querySelector(".jsHeaderMenu");

const showHeaderMenu = () => {
  menu.classList.toggle("menu-hidden");
};

const init = () => {
  userIcon.addEventListener("click", showHeaderMenu);
};

if (userIcon) {
  init();
}
