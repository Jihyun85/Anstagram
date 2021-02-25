const textAry = document.querySelectorAll(".jsTextResult");

const init = () => {
  textAry.forEach((ele) => {
    let text = ele.innerHTML;
    ele.innerText = text;
  });
};

if (textAry) {
  init();
}
