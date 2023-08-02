function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.querySelector("body");

const changeColor = document.querySelector(".change-color");

const colorElement = document.querySelector(".color");

changeColor.addEventListener("click", randomColor);

function randomColor(){
  bodyElement.style.backgroundColor = `${getRandomHexColor()}`;
  changeColor.textContent = getRandomHexColor();
}
