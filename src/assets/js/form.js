const fileInput = document.querySelector(".jsFileInput");
const profileInput = document.querySelector(".jsProfileInput");
const fileLabel = document.querySelector(".jsFileLabel");

const chooseFile = (e) => {
  const file = e.target.files.length;
  if (file === 1) {
    fileLabel.innerText = "이미지 선택 완료";
  } else if (file === 0) {
    fileLabel.innerText = "이미지 선택하기";
  }
};

const chooseProfile = (e) => {
  const file = e.target.files.length;
  if (file === 1) {
    fileLabel.innerText = "프로필 사진 선택 완료";
  } else if (file === 0) {
    fileLabel.innerText = "프로필 사진 선택";
  }
};

const init = () => {
  if (fileInput) {
    fileInput.addEventListener("change", chooseFile);
  } else if (profileInput) {
    profileInput.addEventListener("change", chooseProfile);
  }
};

if (fileLabel) {
  init();
}
