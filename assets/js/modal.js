const modalBox = document.querySelectorAll(".jsModalBox");
const ellipsis = document.querySelectorAll(".jsModalShow");
const closeBtn = document.querySelectorAll(".jsModalClose");

const handleEllipsisClick = (e) => {
  const modal = e.target.parentNode.parentNode.parentNode.lastChild;
  modal.classList.remove("modal-hidden");
};

const handlecloseBtn = (e) => {
  const modal = e.target.parentNode.parentNode;
  modal.classList.add("modal-hidden");
};

const init = () => {
  ellipsis.forEach((btn) => {
    btn.addEventListener("click", handleEllipsisClick);
  });
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", handlecloseBtn);
  });
};

if (modalBox) {
  init();
}
