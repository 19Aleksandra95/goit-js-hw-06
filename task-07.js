const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", option)

function option(e){
    text.style.fontSize = `${e.target.value}px`;
}