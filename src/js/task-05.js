const myInput = document.querySelector('#name-input');
const mySpan = document.querySelector('#name-output');

myInput.addEventListener('input', newInput);

function newInput(el) {
console.log(el.currentTarget);

mySpan.textContent = el.currentTarget.value;

if (el.currentTarget.value === ""){
    mySpan.textContent = 'Anonymous'
}
}