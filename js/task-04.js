const output = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick)
function onDecrementBtnClick(event) {
    counterValue -= 1;
    output.textContent = counterValue;
};

incrementBtn.addEventListener('click', onIncrementBtnClick)
function onIncrementBtnClick(event) {
    counterValue += 1;
    output.textContent = counterValue;
};