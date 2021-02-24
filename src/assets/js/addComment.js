import axios from "axios";

const form = document.querySelector(".jsAddComment");
const textInput = document.querySelector(".jsTextInput");

const makeComment = (comment) => {
  const container = document.querySelector(".content-detail__text");
  const div = document.createElement("div");
  div.classList.add("content-detail__reply");
  const p = document.createElement("p");
  const anonymous = document.createElement("span");
  anonymous.innerText = "anonymous |";
  anonymous.classList.add("content-detail__anonymous");
  const text = document.createElement("span");
  text.innerText = comment;
  text.classList.add("content-detail__reply-text");
  p.appendChild(anonymous);
  p.appendChild(text);
  div.appendChild(p);
  container.appendChild(div);
};

const sendComment = async (comment) => {
  const contentId = window.location.href.split("/content/")[1];
  const response = await axios({
    url: `/api/${contentId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  }).then(makeComment(comment));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const comment = textInput.value;
  sendComment(comment);
  textInput.value = "";
};

const init = () => {
  form.addEventListener("submit", handleSubmit);
};

if (form) {
  init();
}
