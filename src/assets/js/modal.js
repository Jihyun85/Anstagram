const modalBox = document.querySelectorAll(".jsModalBox");
const ellipsis = document.querySelectorAll(".jsModalShow");
const closeBtn = document.querySelectorAll(".jsModalClose");
const contentDetailBtn = document.querySelector(".jsContentDetailBtn");

const handleEllipsisClick = (e) => {
  const modal = e.target.parentNode.parentNode.parentNode.lastChild;
  modal.classList.remove("modal-hidden");
};

const handlecloseBtn = (e) => {
  const modal = e.target.parentNode.parentNode;
  modal.classList.add("modal-hidden");
};

const showContentDetailModal = (e) => {
  const modal =
    e.target.parentNode.parentNode.parentNode.parentNode.nextSibling;
  modal.classList.remove("modal-hidden");
};

const init = () => {
  ellipsis.forEach((btn) => {
    btn.addEventListener("click", handleEllipsisClick);
  });
  closeBtn.forEach((btn) => {
    btn.addEventListener("click", handlecloseBtn);
  });
  if (contentDetailBtn) {
    contentDetailBtn.addEventListener("click", showContentDetailModal);
  }
};

if (modalBox) {
  init();
}
