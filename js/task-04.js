let counterValue = 0;
const value = document.querySelector('#value');
const increaseValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
}
const decreaseValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
incrementBtn.addEventListener('click', increaseValue);
decrementBtn.addEventListener('click', decreaseValue);
