let counterValue = 0;
const decrement = document.querySelector("button[data-action='decrement']");
const increment = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector('#value');

const countDecr = function() {
    counterValue -= 1;

    myValue.textContent = counterValue;
};

const countIncr = function() {
    counterValue += 1;

    myValue.textContent = counterValue;
};

decrement.addEventListener("click", countDecr);
increment.addEventListener("click", countIncr);