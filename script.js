function append() {
  var img = document.createElement("img");

  img.src = "https://loremflickr.com/100/100?random=" + Math.random();

  const container = document.querySelector("#image-container");
  let images = container.getElementsByTagName("img");
  container.appendChild(img);
  let count = images.length;
  var btn = document.querySelector("#btn-rem");
  if (count >= 2 && btn.classList.contains("unactive-button")) {
    btn.classList.replace("unactive-button", "button");
  }
}
function reload() {
  const images = document.querySelectorAll("img");
  images.forEach((image) => {
    image.src = "https://loremflickr.com/100/100?random=" + Math.random();
  });
}

function remove() {
  const container = document.querySelector("#image-container");

  let img = container.getElementsByTagName("img");
  let count = img.length;

  if (count >= 2) {
    container.removeChild(container.lastElementChild);
  } else {
    var btn = document.querySelector("#btn-rem");

    btn.classList.replace("button", "unactive-button");
  }
}
const buttonAdd = document.querySelector("#btn-a");
buttonAdd.addEventListener("click", append);
const buttonReload = document.querySelector("#btn-r");
buttonReload.addEventListener("click", reload);
const buttonRemove = document.querySelector("#btn-rem");
buttonRemove.addEventListener("click", remove);
